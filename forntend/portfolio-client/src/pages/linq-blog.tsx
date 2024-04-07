import { BlogData } from "@/data/blog-data";

export const LinqBlog = () => {
    const data = BlogData;
    const linqData = data.find(blog => blog.id == "blog:1");

    const wideLinq = `dbContext.Books.Where(book => book.Genre == "Fiction" && book.Price > 50).OrderByDescending(book => book.Price)
    .Select(book => new {book.Title, book.Author, book.Price}).ToList();`;

    const tallLinq = `
    dbContext
        .Books
        .Where(book => book.Genre == "Fiction" && book.Price > 50)
        .OrderByDescending(book => book.Price)
        .Select(book => new {book.Title, book.Author, book.Price})
        .ToList();`;
    return (
        <div className="px-4 py-6 md:px-6 md:py-12 lg:py-16">
            <article className="prose prose-gray max-w-6xl mx-auto dark:prose-invert">
                <div className="relative w-full aspect-[2.93] rounded-lg overflow-hidden">
                    <img
                        alt="Cover image"
                        className="object-cover aspect-extend"
                        height={600}
                        src={linqData?.image_url}
                        width={1250}
                    />
                </div>
                <div className="space-y-2 not-prose">
                    <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                        {linqData?.tittle}
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400">Posted on {linqData?.published.toLocaleDateString()}</p>
                    <p className="text-gray-500 dark:text-gray-400">Estimated reading time: {linqData?.read_time} minute</p>
                </div>
                <h2>What is the inccorect way to write?</h2>
                <p>Let's consider the following LINQ expression:</p>
                <pre>
                    <code>
                        {wideLinq}
                    </code>
                </pre>
                <ul>
                    <li>
                        It is difficult to read.
                    </li>
                    <li>
                        It is difficult to extend or maintain.
                    </li>
                </ul>
                <p>To improve this, We can follow a simple rule:</p>
                <blockquote>
                    Try to go tall, not wide.
                </blockquote>
                <h2>How to write correct LINQ expressions?</h2>
                <p>I'm going to rewrite the previous expression.</p>
                <p>Try to follow the one dot per line rule:</p>
                <pre>
                    <code>
                        {tallLinq}
                    </code>
                </pre>
                <p>Is the new version easier to read? <strong>Yes</strong></p>
                <p>It is easier to understand what each expression does, and how it feeds into the next one in the chain.</p>
            </article>
        </div>
    );
}