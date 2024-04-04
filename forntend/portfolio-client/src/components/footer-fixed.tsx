import { Link } from "react-router-dom";

export const FooterFixed = () => {
    return (
        <footer className="fixed bottom-0 z-0 w-full">

            <hr className="w-11/12 mx-auto" />

            <section className="container pb-14 text-center mt-2">
                <h3>
                    &copy; 2024 made by{" "}
                    <Link
                        target="_blank"
                        to="https://github.com/saimankhatiwada"
                        className="text-primary transition-all border-primary hover:border-b-2"
                    >
                        Saiman Khatiwada
                    </Link>
                </h3>
            </section>
        </footer>
    );
}