import { BlogList } from "@/components/blog-list";
import { Footer } from "@/components/footer";
import { BlogData } from "@/data/blog-data";

export const BlogPage = () => {

    return (
        <div className="flex-col md:flex">
            <BlogList blogs={BlogData} />
            <Footer />
        </div>
    );
}