import { ReactNode, useEffect, useMemo, useState } from 'react'
import { ConvexProvider, ConvexReactClient } from 'convex/react'

const buildTimeUrl = import.meta.env.VITE_CONVEX_URL || ''

export function ConvexProviderWrapper({ children }: { children: ReactNode }) {
    const [runtimeUrl, setRuntimeUrl] = useState<string | null>(null)

    useEffect(() => {
        const injected = typeof window !== 'undefined' && (window as unknown as { __CONVEX_URL__?: string }).__CONVEX_URL__
        if (injected) {
            setRuntimeUrl(injected)
            return
        }
        fetch('/config.json')
            .then((r) => (r.ok ? r.json() : null))
            .then((data: { convexUrl?: string } | null) => {
                setRuntimeUrl(data?.convexUrl ?? buildTimeUrl)
            })
            .catch(() => setRuntimeUrl(buildTimeUrl))
    }, [])

    const client = useMemo(
        () =>
            runtimeUrl !== null && runtimeUrl
                ? new ConvexReactClient(runtimeUrl)
                : null,
        [runtimeUrl],
    )

    if (client === null) {
        return (
            <div className="flex min-h-screen items-center justify-center text-muted-foreground">
                Loading…
            </div>
        )
    }

    return <ConvexProvider client={client}>{children}</ConvexProvider>
}
