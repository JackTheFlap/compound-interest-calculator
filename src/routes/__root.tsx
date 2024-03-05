import { NavMenu } from '@/components/NavMenu'
import { Footer } from '@/components/footer'
import { createRootRoute, Outlet } from '@tanstack/react-router'
// import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
    component: () => (
        <main className='container flex flex-col min-h-screen'>
            <NavMenu />
            <Outlet />
            <Footer />
            {/* <TanStackRouterDevtools /> */}
        </main>
    ),
})