import { Link } from "@tanstack/react-router"

const Footer = () => {
    return (<footer className="flex flex-col items-center justify-center mt-auto mb-4">
        <div className="flex flex-row items-center justify-center">
            <h6 className="mr-1">Made with ❤️ by <a href="https://jacktheflap.com" className="underline">JackTheFlap</a> - </h6>
            <Link to="/privacy-policy" className="mr-2 underline">Privacy Policy</Link>
        </div>
        <p>{new Date(Date.now()).getFullYear()}</p>
    </footer>)
}

export { Footer }