import { Link } from "@tanstack/react-router"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const NavMenu = () => {
    return (
        <nav className="flex flex-row items-center mt-4">
            <a href="https://jacktheflap.com">
                <Avatar className="mr-4">
                    <AvatarImage src="/me.jpg"></AvatarImage>
                    <AvatarFallback>JackTheFlap</AvatarFallback>
                </Avatar>
            </a>

            <Link to="/">
                <h1>Compound Interest Calculator</h1>
            </Link>
            <a className="ml-auto" href="https://github.com/jacktheflap">
                <Button variant={"outline"} className="p-2"><Github /></Button>
            </a>
        </nav>

    )
}

export { NavMenu }