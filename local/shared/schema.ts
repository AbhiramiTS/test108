import { pgTable, text, serial, timestamp, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  message: text("message").notNull()
});

export const insertContactSchema = createInsertSchema(contacts).pick({
  name: true,
  email: true,
  phone: true,
  message: true
});

export const insertQuoteSchema = z.object({
  name: z.string().min(1, "Name is required"),
  company: z.string().optional(), // <-- Add this if "company" is optional
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Invalid phone number"),
  details: z.string().min(5, "Provide more details"),
  requirements: z.string().optional(), // <-- Add this if needed
});



export const quoteRequests = pgTable("quote_requests", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  companyName: text("company_name"),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  message: text("message").notNull(),
  budget: text("budget").notNull(),
  timeline: text("timeline").notNull(),
  serviceCategory: text("service_category").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertQuoteRequestSchema = createInsertSchema(quoteRequests)
  .omit({ id: true, createdAt: true })
  .extend({
    name: z.string().min(2, "Name must be at least 2 characters"),
    companyName: z.string().optional(),
    email: z.string().email("Please enter a valid email"),
    phone: z.string().min(10, "Please enter a valid phone number"),
    message: z.string().min(10, "Please provide more details about your requirements"),
    budget: z.string().min(1, "Please select a budget range"),
    timeline: z.string().min(1, "Please select a timeline"),
    serviceCategory: z.string().min(1, "Please select a service category"),
  });

export type InsertQuoteRequest = z.infer<typeof insertQuoteRequestSchema>;
export type QuoteRequest = typeof quoteRequests.$inferSelect;


export type InsertQuote = z.infer<typeof insertQuoteSchema>;


export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contacts.$inferSelect;
