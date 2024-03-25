import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { MainHeader } from "@/components/main-header";


export const HomePage = () => {
    return (
        <div className="flex-col md:flex">
            <MainHeader />
            <Hero />
            <About />
            <Footer />
        </div>
    );
}