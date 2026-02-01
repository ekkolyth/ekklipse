import { v } from 'convex/values'
import { nanoid } from 'nanoid'
import { mutation, query } from './_generated/server'

export const list = query({
    handler: async (ctx) => {
        return await ctx.db.query('klips').order('desc').collect()
    },
})

export const get = query({
    args: { slug: v.string() },
    handler: async (ctx, { slug }) => {
        return await ctx.db
            .query('klips')
            .withIndex('slug', (q) => q.eq('slug', slug))
            .unique()
    },
})

export const create = mutation({
    args: {
        name: v.string(),
        language: v.string(),
        content: v.string(),
        expiresAt: v.optional(v.number()),
    },
    handler: async (ctx, { name, language, content, expiresAt }) => {
        const slug = nanoid()
        const now = Date.now()
        const id = await ctx.db.insert('klips', {
            name,
            language,
            content,
            slug,
            createdAt: now,
            expiresAt,
        })
        return await ctx.db.get(id)
    },
})

export const remove = mutation({
    args: { id: v.id('klips') },
    handler: async (ctx, { id }) => {
        await ctx.db.delete(id)
    },
})

export const deleteExpiredKlips = mutation({
    handler: async (ctx) => {
        const now = Date.now()
        const klips = await ctx.db.query('klips').collect()

        for (const klip of klips) {
            if (klip.expiresAt && klip.expiresAt < now) {
                await ctx.db.delete(klip._id)
            }
        }
    },
})
