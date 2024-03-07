import { Link } from "@tanstack/react-router"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"

const Disclaimer = () => {
    return (<section className="flex flex-col justify-center mt-4 mb-4 max-w-7xl animate-smooth-fade-in">
        <p className="mb-2 font-black sm:mb-0">Disclaimer</p>
        <p>The information and tools in this website are given AS IS WITHOUT ANY WARRANTY OF ANY KIND.</p>
        <p>compound-interest-calculator.jacktheflap.com and its contributors will not be liable for any damage or loss resulting from the use of the content or the tools on this website.</p>
    </section>)
}

const Footer = () => {
    return (<>
        <Separator className="mt-auto" />
        <Disclaimer />
        <Separator />
        <footer className="flex flex-col items-center justify-center mt-4 mb-2 animate-smooth-fade-in">
            <h6 className="mb-2">Made with ❤️ by <a href="https://jacktheflap.com" className="underline">JackTheFlap</a></h6>
            <Link to="/about" className="mb-2"><Button variant={"outline"}>About</Button></Link>
            <Link to="/privacy-policy" className="mb-2"><Button variant={"outline"}>Privacy Policy</Button></Link>
            <p>&#169; {new Date(Date.now()).getFullYear()}</p>
        </footer>
    </>)
}

export { Footer }