import * as cdk from "aws-cdk-lib";
import { Stack, StackProps, Duration } from "aws-cdk-lib";
import { Construct } from "constructs";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as lambdaNode from "aws-cdk-lib/aws-lambda-nodejs";
import * as apigwv2 from "aws-cdk-lib/aws-apigatewayv2";
// import * as integrations from "aws-cdk-lib/aws-apigatewayv2-integrations";
import { HttpLambdaIntegration } from "aws-cdk-lib/aws-apigatewayv2-integrations";
import * as path from "path";
export class ProductsApiStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);
    // DynamoDB table
    const ProductsTable = new dynamodb.Table(this, "ProductsTable", {
      partitionKey: { name: "productId", type: dynamodb.AttributeType.STRING },
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
    });
    //  Lambda (Node) — using esbuild via NodejsFunction
    const ProductFn = new lambdaNode.NodejsFunction(
      this,
      "ProductCreateFunction",
      {
        runtime: lambda.Runtime.NODEJS_18_X,
        entry: path.join(
          __dirname,
          "..",
          "src",
          "products",
          "productCreateFunction.ts"
        ),
        handler: "handler",
        memorySize: 512,
        timeout: Duration.seconds(10),
        environment: {
          PRODUCTS_TABLE: ProductsTable.tableName,
        },
        bundling: {
          minify: true,
          sourceMap: true,
          externalModules: [],
        },
      }
    );
    // Grant the lambda function read/write permissions to the DynamoDB table
    ProductsTable.grantReadWriteData(ProductFn);
    const httpApi = new apigwv2.HttpApi(this, "ProductsApi", {
      corsPreflight: {
        allowHeaders: ["content-type", "authorization"],
        allowMethods: [
          apigwv2.CorsHttpMethod.POST,
          apigwv2.CorsHttpMethod.OPTIONS,
        ],
        allowOrigins: ["*"],
      },
    });
    const createProductIntegration = new HttpLambdaIntegration(
      "CreateProductIntegration",
      ProductFn
    );

    httpApi.addRoutes({
      path: "/products",
      methods: [apigwv2.HttpMethod.POST],
      integration: createProductIntegration,
    });
    new cdk.CfnOutput(this, "ApiUrl", {
      value: httpApi.apiEndpoint ?? "no-endpoint",
    });
  }
}
