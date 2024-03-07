import { NavMenu } from '@/components/NavMenu'
import { Footer } from '@/components/footer'
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
    component: () => (
        <main className='container flex flex-col min-h-screen animate-smooth-fade-in'>
            <NavMenu />
            <Outlet />
            <Footer />
        </main>
    ),
    notFoundComponent: () => {
        return (<main className='container flex flex-col min-h-screen animate-smooth-fade-in'>
            <NavMenu />
            <section className='container flex flex-col items-center justify-center mt-8 mb-4'>
                <p className='text-6xl font-black text-center'>Page Not Found</p>
                <Link to="/" className='mt-4 text-3xl text-center underline sm:mt-4'>Go Home?</Link>
            </section>
            <Footer />
        </main>);
    }
})