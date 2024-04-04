import { CommingSoon } from "@/components/comming-soon";
import { FooterFixed } from "@/components/footer-fixed";

export const ProjectPage = () => {
    return (
        <div className="flex-col md:flex">
            <CommingSoon />
            <FooterFixed />
        </div>
    );
}