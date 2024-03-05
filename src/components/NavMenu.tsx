import { Link } from "@tanstack/react-router"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { ModeToggle } from "@/components/ui/mode-toggle";

const NavMenu = () => {
    return (
        <nav className="flex flex-col items-center mt-4 mb-4 sm:flex-row sm:mb-4 animate-smooth-fade-in">
            <a href="https://jacktheflap.com">
                <Avatar className="w-10 h-10 mr-4 sm:h-14 sm:w-14">
                    <AvatarImage src="/me.jpg"></AvatarImage>
                    <AvatarFallback>JackTheFlap</AvatarFallback>
                </Avatar>
            </a>
            <Link to="/">
                <h1 className="text-center sm:text-left">Compound Interest Calculator</h1>
            </Link>
            <div className="flex flex-row items-center sm:ml-auto">
                <ModeToggle />
                <a className="ml-2" href="https://github.com/jacktheflap">
                    <Button variant={"outline"} className="p-2"><Github /></Button>
                </a>
            </div>

        </nav>

    )
}

export { NavMenu }