import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { nanoid } from "nanoid";

export const list = query({
  handler: async (ctx) => {
    return await ctx.db.query("snippets").order("desc").collect();
  },
});

export const get = query({
  args: { slug: v.string() },
  handler: async (ctx, { slug }) => {
    return await ctx.db
      .query("snippets")
      .withIndex("slug", (q) => q.eq("slug", slug))
      .unique();
  },
});

export const create = mutation({
  args: {
    name: v.string(),
    language: v.string(),
    content: v.string(),
    expiresAt: v.optional(v.number()),
  },
  handler: async (ctx, { name, language, content, expiresAt }) => {
    const slug = nanoid();
    const now = Date.now();
    const id = await ctx.db.insert("snippets", {
      name,
      language,
      content,
      slug,
      createdAt: now,
      expiresAt,
    });
    return await ctx.db.get(id);
  },
});

export const remove = mutation({
  args: { id: v.id("snippets") },
  handler: async (ctx, { id }) => {
    await ctx.db.delete(id);
  },
});

export const deleteExpiredSnippets = mutation({
  handler: async (ctx) => {
    const now = Date.now();
    const snippets = await ctx.db.query("snippets").collect();
    
    for (const snippet of snippets) {
      if (snippet.expiresAt && snippet.expiresAt < now) {
        await ctx.db.delete(snippet._id);
      }
    }
  },
});
