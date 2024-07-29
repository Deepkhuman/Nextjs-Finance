import { pgTable, text } from "drizzle-orm/pg-core";

export const accounts = pgTable("accounts", {
	id: text("id").primaryKey(),
	pladId: text("pladId").notNull(),
	name: text("name").notNull(),
	userId: text("user_Id").notNull(),
});
