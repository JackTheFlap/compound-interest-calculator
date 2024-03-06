import { NavMenu } from '@/components/NavMenu'
import { Footer } from '@/components/footer'
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
    component: () => (
        <main className='container flex flex-col min-h-screen'>
            <NavMenu />
            <Outlet />
            <Footer />
        </main>
    ),
    notFoundComponent: () => {
        return (<main className='container flex flex-col min-h-screen'>
            <NavMenu />
            <section className='container flex flex-col items-center justify-center mt-8'>
                <p className='text-6xl font-black'>Page Not Found</p>
                <Link to="/" className='text-3xl underline'>Go Home?</Link>
            </section>
            <Footer />
        </main>);
    }
})