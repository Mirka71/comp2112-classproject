import Link from "next/link";
import PageTitle from "../components/PageTitle";

// set structure of blog post data
interface Post {
    id: number;
    title: string;
}

export default async function Blog() {
    // use fetch API to get blog data from Vercel sample blog API (await and async allows to load async so page loads before )
    const data: Response = await fetch("https://api.vercel.app/blog");

    //convert API response to json to array of Post objects (defined above)
    const posts: Post[] = await data.json();

    // display a page and show the blog post data we recieved 
    return (
        <main>
            <PageTitle title="Blog" />
            <h1>Blog</h1>
            <ul className="list-none ">
                {/* Js version of a foreach loop */}
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link href={`/blog/${post.id}`}>
                        {post.title}
                        </Link>
                        {post.title}
                    </li>
                ))};
            </ul>
        </main>
    )
}