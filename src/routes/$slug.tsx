import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from 'convex/react'
import { useEffect } from 'react'
import { KlipClient } from '@/components/klip/client'
import { LogoHeader } from '@/components/nav/logo-header'
import { api } from '../../convex/_generated/api'

export const Route = createFileRoute('/$slug')({
    component: KlipPage,
})

function KlipPage() {
    const { slug } = Route.useParams()
    const klip = useQuery(api.klips.get, { slug })

    useEffect(() => {
        if (klip) {
            document.title = klip.name

            // Update OG title
            const ogTitle = document.querySelector('meta[property="og:title"]')
            if (ogTitle) {
                ogTitle.setAttribute('content', klip.name)
            }

            // Update Twitter title
            const twitterTitle = document.querySelector(
                'meta[name="twitter:title"]'
            )
            if (twitterTitle) {
                twitterTitle.setAttribute('content', klip.name)
            }
        }
    }, [klip])

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
