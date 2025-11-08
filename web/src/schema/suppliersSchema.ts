import { z } from "zod";

export const supplierSchema = z.object({
  orderId: z.string(),

  generalInformation: z.object({
    name: z.string(),
    image: z.string(),
  }),

  product: z.string(),
  contactNumber: z.string(),
  email: z.string().email(),
  type: z.enum(["Taking Return", "Not Taking Return"]),
  onTheWay: z.union([z.number(), z.string()]),
});

export type Supplier = z.infer<typeof supplierSchema>;
