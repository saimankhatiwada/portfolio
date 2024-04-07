import { BlogModel } from "@/model/blog-model";
import { Link } from "react-router-dom";

interface BlogListInterface {
    blogs: BlogModel[]
}

export const BlogList = ({ blogs }: BlogListInterface) => {
    return (
        <>
            {blogs.map((value) =>
                <div className="grid grid-cols-1 gap-6 px-4 py-6 md:grid-cols-2 md:gap-8 md:px-6 lg:py-12">
                    <div className="flex flex-col space-y-2">
                        <Link className="font-semibold" to="/blogs/blog:1">
                            {value.tittle}
                        </Link>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Posted on {value.published.toLocaleDateString()}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{value.read_time} min read</p>
                        <Link className="self-start w-[fit-content] text-sm font-semibold underline" to="/blogs/blog:1">
                            Read More
                        </Link>
                    </div>
                    <div className="aspect-card w-full aspect-square">
                        <img
                            alt="Image for blog post"
                            className="object-cover rounded-lg aspect-inner"
                            height={600}
                            src={value.image_url}
                            width={600}
                        />
                    </div>
                </div>
            )}
        </>
    );
}