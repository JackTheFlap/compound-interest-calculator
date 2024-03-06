import { NavMenu } from '@/components/NavMenu'
import { Footer } from '@/components/footer'
import { createRootRoute, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
    component: () => (
        <main className='container flex flex-col min-h-screen'>
            <NavMenu />
            <Outlet />
            <Footer />
        </main>
    ),
})