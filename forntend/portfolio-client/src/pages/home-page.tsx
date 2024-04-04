import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";


export const HomePage = () => {
    return (
        <div className="flex-col md:flex">
            <Hero />
            <About />
            <Footer />
        </div>
    );
}