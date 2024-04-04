import { Wrench } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const CommingSoon = () => {
    return (
        <section className="w-full py-6 md:py-12 lg:py-16">
            <div className="container flex flex-col items-center px-4 md:px-6 space-y-4 text-center">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Coming Soon</h1>
                    <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium">
                        <Wrench className="h-4 w-4" />
                        <Separator className="mx-2 h-4" orientation="vertical" />{" "}
                        <span className="sm:hidden">Under Development</span>
                        <span className="hidden sm:inline">Under Development</span>
                    </div>
                </div>
            </div>
        </section>
    );
}