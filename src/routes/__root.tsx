import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { ThemeProvider } from '@/components/theme-provider';
import { ThemeToggle } from '@/components/theme-toggle';
import { ConvexProviderWrapper } from '@/components/convex-provider';

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <ConvexProviderWrapper>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        <div className="min-h-screen">
          <div className="absolute top-4 right-4">
            <ThemeToggle />
          </div>
          <main>
            <Outlet />
          </main>
        </div>
      </ThemeProvider>
      <TanStackRouterDevtools />
    </ConvexProviderWrapper>
  );
}