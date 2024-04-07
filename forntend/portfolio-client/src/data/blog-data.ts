import { blog1 } from "@/assets/blog:images";
import { BlogModel } from "@/model/blog-model";

export const BlogData: BlogModel[] = [
    {
        id: "blog:1",
        tittle: "Correct Way To Write LINQ Querries",
        image_url: blog1,
        read_time: 3,
        published: new Date(2024, 4, 7)
    }
]