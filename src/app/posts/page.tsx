import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Post from "./contentPosts";

async function getPosts(): Promise<Post[]> {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) {
      throw new Error(`Ошибка HTTP: ${res.status}`);
    }
    const posts: Post[] = await res.json();
    return posts;
  } catch (error) {
    console.error("Ошибка при загрузке:", error);
    return [];
  }
}

export default async function Posts() {
  const posts: Post[] = await getPosts();
  return (
    <div>
      <h1>Страница со всеми постами</h1>
      <div className="flex flex-wrap gap-6 justify-center ">
        {posts.map((post: Post) => (
          <div key={post.id}>
            <Card className="w-60 h-full flex flex-col justify-between">
              <CardHeader>
                <CardTitle>
                  <h3 className="pb-1">{post.title}</h3>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow p-4">
                <p>{post.body} </p>

                <Link
                  href={`/posts`}
                  className="text-grey font-extralight text-xs hover:underline"
                >
                  Show more...
                </Link>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
