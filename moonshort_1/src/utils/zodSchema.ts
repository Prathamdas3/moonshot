import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(8, "Minimum of 8 characters should be in name "),
  email: z.string().email(),
  password: z.string().min(8, "Minimum of 8 characters should be in password"),
});

export type UserSchemaType = z.infer<typeof userSchema>;

export const itemSchema = z.object({
  name: z.string(),
  check: z.boolean(),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Minimum of 8 characters should be in password"),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
