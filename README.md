# Stuck

> A modern inventory management app for small businesses to track products, suppliers, and stock levels effortlessly.

---

## Overview

**Stuck** helps small and growing businesses manage inventory efficiently — from tracking stock levels and monitoring supplier performance to automating low-stock alerts.  
The app is built with a **serverless architecture** on AWS, ensuring scalability, reliability, and low operational overhead.

---

## Tech Stack

| Layer          | Technology              | Description                                                           |
| -------------- | ----------------------- | --------------------------------------------------------------------- |
| Frontend       | Next.js, Tailwind CSS   | Fast, responsive, and SEO-friendly UI hosted on Vercel                |
| Auth           | Amazon Cognito          | User authentication and session management                            |
| Backend / API  | AWS Lambda, API Gateway | Serverless functions handling core logic and routing                  |
| Database       | Amazon DynamoDB         | Single-table NoSQL design for products, suppliers, and stock movement |
| Storage        | Amazon S3               | Secure image and asset storage                                        |
| Notifications  | Amazon SES, EventBridge | Low-stock email alerts and scheduled tasks                            |
| Infrastructure | SST (Serverless Stack)  | Simplified AWS Infrastructure as Code and local dev tools             |
| Hosting        | Vercel + AWS            | Vercel for frontend, AWS for backend APIs                             |

---

## Architecture

```mermaid
flowchart LR
  subgraph Web[Frontend - Vercel]
    A[Next.js App]
  end

  subgraph AWS[Backend - AWS Cloud]
    B[API Gateway]
    C[AWS Lambda (SST)]
    D[(DynamoDB)]
    E[S3 Bucket]
    F[Amazon Cognito]
    G[Amazon SES]
    H[EventBridge]
  end

  A -- REST API Calls --> B
  B --> C
  C --> D
  C --> E
  C --> G
  F --> A
  H --> C

  classDef aws fill:#F4F8FB,stroke:#232F3E,stroke-width:1px,color:#000;
  classDef web fill:#E6F0FF,stroke:#1570EF,stroke-width:1px,color:#000;
  class AWS,Web;

stuck/
├── web/                 # Next.js frontend (Vercel)
│   ├── components/      # Reusable UI components
│   ├── pages/           # Routes (Next.js pages)
│   ├── lib/             # Client utilities (API calls, helpers)
│   └── styles/          # Tailwind setup
├── api/                 # Serverless backend (SST)
│   ├── functions/       # Lambda functions (product CRUD, suppliers, etc.)
│   ├── lib/             # Shared code (DynamoDB client, auth utils)
│   ├── stacks/          # SST stack definitions
│   └── package.json
└── infra/               # Infrastructure config (CDK/SST)
    └── sst.config.ts


| Entity         | PK                    | SK                    | Example | Notes                             |
| -------------- | --------------------- | --------------------- | ------- | --------------------------------- |
| Tenant         | TENANT#<tenantId>     | TENANT#<tenantId>     | -       | Tenant profile                    |
| User           | USER#<userId>         | USER#<userId>         | -       | Role, email                       |
| Product        | PRODUCT#<productId>   | PRODUCT#<productId>   | -       | Name, SKU, price                  |
| Supplier       | SUPPLIER#<supplierId> | SUPPLIER#<supplierId> | -       | Supplier data: name, contact      |
| Movement       | MOVE#<productId>      | MOVE#<timestamp>      | -       | Stock changes: delta, reason      |
| Purchase Order | PO#<poId>             | PO#<poId>             | -       | Purchase info: line items, totals |


Key Features

Manage products, stock levels, and supplier details

Track order fulfillment and reliability rating

Low-stock alert system (EventBridge + SES)

AWS-native serverless infrastructure (scalable & pay-per-use)

Secure auth with Amazon Cognito

Responsive and modern UI with Tailwind CSS


Future Enhancements

Analytics dashboard for sales insights

Role-based access control (RBAC)

Supplier performance scoring

Integrate Stripe for supplier payments

Offline-first support (IndexedDB caching)
```
