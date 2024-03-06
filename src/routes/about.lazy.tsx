import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/about')({
    component: About
})

function About() {
    return (
        <main className='flex flex-col'>
            <h2 className='text-3xl font-black text-center'>About</h2>
            <p className='mt-4'>For years I personally used <a href="https://www.thecalculatorsite.com/finance/calculators/compoundinterestcalculator.php" className='underline'>TheCalculatorSite's</a> Compound Interest Calculator. This calculator works great but it's slow (joys of server-side PHP) and I was never happy with the site layout and style. The site felt cluttered and, worst of all, lacked a dark theme 😱!</p>
            <p className='mt-2'>This site was created with Vite & React as a SPA and used many NPM packages such as:</p>
            <ul className='mt-2 list-disc'>
                <li className='ml-6'><a href="https://tanstack.com/router/latest/" className='underline'>TanStack Router</a></li>
                <li className='ml-6'><a href="https://tailwindcss.com/" className='underline'>TailwindCSS</a></li>
                <li className='ml-6'><a href="https://ui.shadcn.com/" className='underline'>shadcn/ui</a></li>
                <li className='ml-6'><a href="https://react-hook-form.com/" className='underline'>React Hook Form</a></li>
                <li className='ml-6'><a href="https://auto-animate.formkit.com/" className='underline'>AutoAnimate</a></li>
            </ul>
            <p className='mt-2'>The font used is <a href="https://github.com/googlefonts/comfortaa" className='underline'>Comfortaa</a>.</p>
            <p className='mt-2'>The sites source code is stored on <a href="https://github.com/jacktheflap/compound-interest-calculator" className='underline'>GitHub</a> under the <a href="https://spdx.org/licenses/MIT.html" className='underline'>MIT License</a>.</p>
            <p className='mt-2'>This site was created over the span of a week using any free time I had available. Everything should be working, but I would double check the numbers before making any major financial decisions!</p>
        </main>
    )
}

