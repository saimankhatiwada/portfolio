import { Separator } from "@/components/ui/separator";
import { Wrench } from "lucide-react";

export const Announcement = () => {
    return (
        <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium">
            <Wrench className="h-4 w-4" /> 
            <Separator className="mx-2 h-4" orientation="vertical" />{" "}
            <span className="sm:hidden">Under Development: Portfolio Website Upgrades</span>
            <span className="hidden sm:inline">Under Development: Portfolio Website Upgrades</span>
        </div>
    );
}