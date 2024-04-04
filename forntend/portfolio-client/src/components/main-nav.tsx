import { cn } from "@/lib/utils"
import { Link } from "react-router-dom";

export const MainNav = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) => {
    return (
        <nav
            className={cn("flex items-center space-x-4 lg:space-x-6", className)}
            {...props}
        >
            <Link
                to="/"
                className="text-sm font-medium transition-colors hover:text-primary"
            >
                Home
            </Link>
            <Link
                to="/projects"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
                Projects
            </Link>
            <Link
                to="/blogs"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
                Blogs
            </Link>
            <Link
                to="/contact"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
                Contact
            </Link>
        </nav>
    );
}