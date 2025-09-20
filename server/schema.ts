import { defineSchema, defineTable } from "convex/server";

export default defineSchema({
  users: defineTable({
    name: "string",
    email: "string",
    createdAt: "number",
  }),
});