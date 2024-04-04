import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Facebook, MailIcon } from "lucide-react";
import { Link } from "react-router-dom";


export const ContactPage = () => {
    return (
        <div className="w-full py-12 md:py-24 dark:bg-gray-950">
            <div className="container grid max-w-3xl gap-4 px-4 text-center md:px-6 md:gap-10 lg:grid-cols-2 xl:max-w-5xl xl:gap-16">
                <div className="flex flex-col items-center justify-center space-y-3">
                    <div className="inline-flex items-center rounded-full p-3 bg-gray-100 dark:bg-gray-800">
                        <LinkedInLogoIcon className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-lg font-bold tracking-tighter">Connect on LinkedIn</h3>
                        <p className="text-gray-500 dark:text-gray-400">Professional networking</p>
                    </div>
                    <Link
                        className="inline-flex h-8 items-center rounded-md border border-gray-200 bg-white px-4 shadow-sm text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                        to="https://www.linkedin.com/in/saiman-khatiwada-a07346163/"
                    >
                        Connect
                    </Link>
                </div>
                <div className="flex flex-col items-center justify-center space-y-3">
                    <div className="inline-flex items-center rounded-full p-3 bg-gray-100 dark:bg-gray-800">
                        <GitHubLogoIcon className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-lg font-bold tracking-tighter">Check out my GitHub</h3>
                        <p className="text-gray-500 dark:text-gray-400">Open source projects</p>
                    </div>
                    <Link
                        className="inline-flex h-8 items-center rounded-md border border-gray-200 bg-white px-4 shadow-sm text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                        to="https://github.com/saimankhatiwada"
                    >
                        View Profile
                    </Link>
                </div>
                <div className="flex flex-col items-center justify-center space-y-3">
                    <div className="inline-flex items-center rounded-full p-3 bg-gray-100 dark:bg-gray-800">
                        <Facebook className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-lg font-bold tracking-tighter">Follow me on Facebook</h3>
                        <p className="text-gray-500 dark:text-gray-400">Social updates</p>
                    </div>
                    <Link
                        className="inline-flex h-8 items-center rounded-md border border-gray-200 bg-white px-4 shadow-sm text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                        to="https://www.facebook.com/profile.php?id=100092378822477"
                    >
                        Follow
                    </Link>
                </div>
                <div className="flex flex-col items-center justify-center space-y-3">
                    <div className="inline-flex items-center rounded-full p-3 bg-gray-100 dark:bg-gray-800">
                        <MailIcon className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-lg font-bold tracking-tighter">Send me an email</h3>
                        <p className="text-gray-500 dark:text-gray-400">Get in touch</p>
                    </div>
                    <Link
                        className="inline-flex h-8 items-center rounded-md border border-gray-200 bg-white px-4 shadow-sm text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                        to="mailto:saimankhatiwada9611@gmail.com"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    )
}
