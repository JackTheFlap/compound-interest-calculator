import { Link } from "@tanstack/react-router"

const Footer = () => {
    return (<footer className="flex flex-col items-center justify-center mt-auto mb-4 animate-smooth-fade-in">
        <h6 className="mr-1">Made with ❤️ by <a href="https://jacktheflap.com" className="underline">JackTheFlap</a></h6>
        <Link to="/privacy-policy" className="mr-2 underline">Privacy Policy</Link>
        <p>{new Date(Date.now()).getFullYear()}</p>
    </footer>)
}

export { Footer }