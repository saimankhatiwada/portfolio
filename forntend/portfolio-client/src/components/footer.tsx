export const Footer = () => {
    return (
        <footer id="footer">

            <hr className="w-11/12 mx-auto" />

            <section className="container pb-14 text-center mt-2">
                <h3>
                    &copy; 2024 made by{" "}
                    <a
                        target="_blank"
                        href="https://github.com/saimankhatiwada"
                        className="text-primary transition-all border-primary hover:border-b-2"
                    >
                        Saiman Khatiwada
                    </a>
                </h3>
            </section>
        </footer>
    );
}