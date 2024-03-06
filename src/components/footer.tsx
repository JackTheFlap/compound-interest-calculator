import { Link } from "@tanstack/react-router"

const Disclaimer = () => {
    return (<section className="flex flex-col justify-center mt-auto mb-4 max-w-7xl animate-smooth-fade-in">
        <p className="font-black ">Disclaimer</p>
        <p>The information and tools in this website are given AS IS WITHOUT ANY WARRANTY OF ANY KIND.</p>
        <p>compound-interest-calculator.jacktheflap.com and its contributors will not be liable for any damage or loss resulting from the use of the content or the tools on this website.</p>
    </section>)
}

const Footer = () => {
    return (<>
        <Disclaimer />
        <footer className="flex flex-col items-center justify-center mb-4 animate-smooth-fade-in">
            <h6 className="mr-1">Made with ❤️ by <a href="https://jacktheflap.com" className="underline">JackTheFlap</a></h6>
            <Link to="/privacy-policy" className="mr-2 underline">Privacy Policy</Link>
            <p>{new Date(Date.now()).getFullYear()}</p>
        </footer>
    </>)
}

export { Footer }