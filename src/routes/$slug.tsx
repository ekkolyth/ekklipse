import { createFileRoute } from '@tanstack/react-router'
import { ConvexHttpClient } from 'convex/browser'
import { useQuery } from 'convex/react'
import { KlipClient } from '@/components/klip/client'
import { LogoHeader } from '@/components/nav/logo-header'
import { api } from '../../convex/_generated/api'

function getConvexUrl(): string {
    if (typeof window === 'undefined') return ''
    return (
        (window as unknown as { __CONVEX_URL__?: string }).__CONVEX_URL__ ||
        import.meta.env.VITE_CONVEX_URL ||
        ''
    )
}

export const Route = createFileRoute('/$slug')({
    loader: async ({ params }) => {
        const url = getConvexUrl()
        if (!url) return { klip: null }
        const client = new ConvexHttpClient(url)
        const klip = await client.query(api.klips.get, { slug: params.slug })
        return { klip }
    },
    head: ({ loaderData }) => ({
        meta: [
            {
                title: loaderData?.klip?.name ?? 'ekklipse',
            },
        ],
    }),
    component: KlipPage,
})

function KlipPage() {
    const { slug } = Route.useParams()
    const klip = useQuery(api.klips.get, { slug })

    if (klip === undefined) {
        return <div className='p-4'>Loading...</div>
    }
    if (klip === null) {
        return <div className='p-4'>Klip not found.</div>
    }
    return (
        <>
            <LogoHeader />
            <KlipClient klip={klip} />
        </>
    )
}
