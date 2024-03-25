import { MainNav } from "./main-nav";
import { ThemeToggle } from "./theme/theme-toogle";
import logo from "@/assets/logo.svg";
import darklogo from "@/assets/darklogo.svg";

export const MainHeader = () => {
    return (

        <div className="border-b">
            <div className="flex h-16 items-center px-4">
                <img src={logo} alt="logo" className="block dark:hidden" />
                <img src={darklogo} alt="logo" className="hidden dark:block" />
                <MainNav className="mx-6" />
                <div className="ml-auto flex items-center space-x-4">
                    <ThemeToggle />
                </div>
            </div>
        </div>
    );
}