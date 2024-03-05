import { ModeToggle } from "./ui/mode-toggle"
import { Link } from "@tanstack/react-router"

const Footer = () => {
    return (<footer className="flex flex-row items-center justify-center mt-auto mb-4">
        <h6 className="mr-1">{new Date(Date.now()).getFullYear()} - Made with ❤️ by <a href="https://jacktheflap.com" className="underline">JackTheFlap</a> - </h6>
        <Link to="/privacy-policy" className="mr-2 underline">Privacy Policy</Link>
        <ModeToggle />
    </footer>)
}

export { Footer }