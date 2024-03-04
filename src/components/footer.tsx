import { ModeToggle } from "./ui/mode-toggle"

const Footer = () => {
    return (<footer className="mt-auto mb-4 flex flex-row items-center"><h6 className="mr-4">© JackTheFlap {new Date(Date.now()).getFullYear()}</h6><ModeToggle /></footer>)
}

export { Footer }