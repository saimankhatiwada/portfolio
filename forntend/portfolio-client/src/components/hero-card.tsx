import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Check, Linkedin } from "lucide-react";
import profile from "@/assets/profile.jpg";

export const HeroCards = () => {
    return (
        <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[400px]">
            <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
                <CardHeader className="mt-8 flex justify-center items-center pb-2">
                    <img
                        src={profile}
                        alt="user avatar"
                        className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                    />
                    <CardTitle className="text-center">Saiman Khatiwada</CardTitle>
                    <CardDescription className="font-normal text-primary">
                        .NET Developer
                    </CardDescription>
                </CardHeader>

                <CardContent className="text-center pb-2">
                    <p>
                        I really enjoy transforming ideas into functional software that
                        exceeds expectations
                    </p>
                </CardContent>

                <CardFooter>
                    <div>
                        <a
                            href="https://github.com/saimankhatiwada"
                            target="_blank"
                            className={buttonVariants({
                                variant: "ghost",
                                size: "sm",
                            })}
                        >
                            <span className="sr-only">Github icon</span>
                            <GitHubLogoIcon className="w-5 h-5" />
                        </a>
                        <a
                            href="https://twitter.com/saimankhatiwad1"
                            target="_blank"
                            className={buttonVariants({
                                variant: "ghost",
                                size: "sm",
                            })}
                        >
                            <span className="sr-only">X icon</span>
                            <svg
                                role="img"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                className="fill-foreground w-5 h-5"
                            >
                                <title>X</title>
                                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                            </svg>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/saiman-khatiwada-a07346163/"
                            target="_blank"
                            className={buttonVariants({
                                variant: "ghost",
                                size: "sm",
                            })}
                        >
                            <span className="sr-only">Linkedin icon</span>
                            <Linkedin size="20" />
                        </a>
                    </div>
                </CardFooter>
            </Card>

            <Card className="absolute top-[150px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
                <CardHeader>
                    <CardTitle className="flex item-center justify-between">
                        Skills
                    </CardTitle>

                    <CardDescription>
                        These are just a few highlights of my skills. Let's discuss how I can contribute to your project!
                    </CardDescription>
                </CardHeader>

                <hr className="w-4/5 m-auto mb-4" />

                <CardFooter className="flex">
                    <div className="space-y-4">
                        {["Docker", "NGINX", ".NET Core", "React.js", "AWS", "Azure", "Redis and more"].map(
                            (skills: string) => (
                                <span
                                    key={skills}
                                    className="flex"
                                >
                                    <Check className="text-green-500" />{" "}
                                    <h3 className="ml-2">{skills}</h3>
                                </span>
                            )
                        )}
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}