import { z } from "zod";

export const inventoryItemSchema = z.object({
  orderId: z.string(),
  Price: z.union([z.number(), z.string()]),
  quantity: z.union([z.number(), z.string()]),
  thresholdValue: z.union([z.number(), z.string()]),
  expiryDate: z.string(),
  status: z.string(),
  stock: z.number(),

  generalInformation: z.object({
    name: z.string(),
    image: z.string(),
    category: z.string().optional(),
    ProductDescription: z.string().optional(),
  }),
});

export type OrderItem = z.infer<typeof inventoryItemSchema>;
