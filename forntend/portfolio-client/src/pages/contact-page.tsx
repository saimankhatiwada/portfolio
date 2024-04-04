import { Contact } from "@/components/contact"
import { FooterFixed } from "@/components/footer-fixed";

export const ContactPage = () => {
    return (
        <div className="flex-col md:flex">
            <Contact />
            <FooterFixed />
        </div>
    );
}
