import { About } from "@/components/about";
import { Hero } from "@/components/hero";


export const HomePage = () => {
    return (
        <div className="flex-col md:flex">
            <Hero />
            <About />
        </div>
    );
}