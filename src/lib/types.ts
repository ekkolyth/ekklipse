import type { Id } from '../../convex/_generated/dataModel'

export interface Klip {
    _id: Id<'klips'>
    slug: string
    name: string
    language: string
    content: string
    createdAt: number
    expiresAt?: number
}
