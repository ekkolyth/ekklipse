import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { ConvexProviderWrapper } from '@/components/providers/convex-provider'

export const Route = createRootRoute({
    component: RootLayout,
})

function RootLayout() {
    return (
        <ConvexProviderWrapper>
            <ThemeProvider
                attribute='class'
                defaultTheme='dark'
                enableSystem={false}
            >
                <div className='min-h-screen'>
                    <main>
                        <Outlet />
                    </main>
                </div>
            </ThemeProvider>
            <TanStackRouterDevtools />
        </ConvexProviderWrapper>
    )
}
