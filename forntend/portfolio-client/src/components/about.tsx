import { Statistics } from "./statistics";
import profile from "@/assets/profile.jpg";

export const About = () => {
    return (
        <section
            id="about"
            className="container py-24 sm:py-32"
        >
            <div className="bg-muted/50 border rounded-lg py-12">
                <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
                    <img
                        src={profile}
                        alt=""
                        className="w-[300px] object-contain rounded-lg"
                    />
                    <div className="bg-green-0 flex flex-col justify-between">
                        <div className="pb-6">
                            <h2 className="text-3xl md:text-4xl font-bold">
                                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                                    About{" "}
                                </span>
                                Myself
                            </h2>
                            <p className="text-xl text-muted-foreground mt-4">
                                I'm a passionate .NET developer based in Nepal, driven to create robust and maintainable web applications.
                                With experience in a diverse range of projects, I possess a strong foundation in:
                                <span className="grid grid-cols-1 divide-y mt-4">
                                    <span className="mt-2 mb-2">
                                        Implementing established patterns like Domain-Driven Design (DDD),
                                        CQRS, Clean Architecture, and MediatR to ensure well-structured and scalable code.
                                    </span>
                                    <span className="mt-2 mb-2">
                                        Integrating Keycloak for secure user authentication and access control.
                                    </span>
                                    <span className="mt-2 mb-2">
                                        Employing Redis for efficient caching strategies, optimizing application performance.
                                    </span>
                                    <span className="mt-2 mb-2">
                                        Streamlining the user experience with seamless payment processing through Khalti, Esewa,
                                        Connectips, NPS, Stripe, and PayPal.
                                    </span>
                                    <span>
                                        Utilizing AWS services like Route 53, ec2 for infrastructure management, 
                                        Azure Blob Storage and AWS s3 for scalable object storage and more.
                                    </span>
                                </span>
                            </p>
                        </div>

                        <Statistics />
                    </div>
                </div>
            </div>
        </section>
    );
}