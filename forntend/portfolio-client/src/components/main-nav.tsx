import { cn } from "@/lib/utils"

export const MainNav = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) => {
    return (
        <nav
            className={cn("flex items-center space-x-4 lg:space-x-6", className)}
            {...props}
        >
            <a
                href="/"
                className="text-sm font-medium transition-colors hover:text-primary"
            >
                Home
            </a>
            <a
                href="/projects"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
                Projects
            </a>
            <a
                href="/blogs"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
                Blogs
            </a>
            <a
                href="/contact"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
                Contact
            </a>
        </nav>
    );
}