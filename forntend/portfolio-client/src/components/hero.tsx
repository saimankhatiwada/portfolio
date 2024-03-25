import { HeroCards } from "./hero-card";

export const Hero = () => {
    return (
        <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
            <div className="text-center lg:text-start space-y-6">
                <main className="text-5xl md:text-6xl font-bold">
                    <h1 className="inline">
                        <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
                            Passionate
                        </span>{" "}
                        developer
                    </h1>{" "}
                    from{" "}
                    <h2 className="inline">
                        <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
                            Nepal
                        </span>{" "}
                    </h2>
                </main>

                <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
                    I'm a passionate .NET developer with a knack for crafting clean, efficient code.
                    Let's collaborate on building the next big thing!
                </p>
            </div>

            <div className="z-10">
                <HeroCards />
            </div>
        </section>
    );
}