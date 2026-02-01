import { createFileRoute } from '@tanstack/react-router'
import { useMutation, useQuery } from 'convex/react'
import { MoonStar } from 'lucide-react'
import { useEffect } from 'react'
import { KlipList } from '@/components/klip/list'
import { NewKlipForm } from '@/components/klip/new-klip-form'
import { HomeHeader } from '@/components/nav/home-header'
import { api } from '../../convex/_generated/api'

export const Route = createFileRoute('/')({
    component: Home,
})

function Home() {
    const klips = useQuery(api.klips.list) || []
    const createKlip = useMutation(api.klips.create)
    const deleteKlip = useMutation(api.klips.remove)

    useEffect(() => {
        document.title = 'ekklipse'
        const metaDescription = document.querySelector(
            'meta[name="description"]'
        )
        if (metaDescription) {
            metaDescription.setAttribute(
                'content',
                'ekklipse is a simple pastebin app to share links, code, or other text with your friends, colleagues, or yourself on another device.'
            )
        }
    }, [])

    const handleSave = async (data: {
        name: string
        language: string
        content: string
        expiresAt?: number
    }) => {
        await createKlip(data)
    }

    return (
        <>
            <HomeHeader />
            <div className='min-h-screen flex flex-col items-center pt-24 p-4'>
                <h1 className='my-30 text-5xl font-bold flex items-center gap-2'>
                    <MoonStar className='size-14 mr-2' />
                    <span className='text-foreground/60'>ek</span>(klip)
                    <span className='text-foreground/60'>se</span>
                </h1>
                <div className='w-full max-w-3xl space-y-4'>
                    <NewKlipForm onSave={handleSave} />
                    <KlipList
                        klips={klips}
                        onDelete={(id) => deleteKlip({ id })}
                    />
                </div>
            </div>
        </>
    )
}
