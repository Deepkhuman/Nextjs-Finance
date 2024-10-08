import { pgTable, text } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
export const accounts = pgTable("accounts", {
	id: text("id").primaryKey(),
	pladId: text("pladId"),
	name: text("name").notNull(),
	userId: text("user_Id").notNull(),
});

export const insertAccountSchema = createInsertSchema(accounts);
