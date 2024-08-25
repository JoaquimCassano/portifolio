import { Article, getArticles } from "@/src/lib/articles";
import moment from "moment";
import Link from "next/link";

export default async function ArticlesPage() {
  const articles = getArticles();
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <h1 className="my-12 font-bold">Articles</h1>
        <Link href={"/rss.xml"} className="text-zinc-500">
          <p className="underline">RSS Feed</p>
        </Link>
      </div>
      <section className="flex flex-col divide-y divide-zinc-300 w-full">
        {articles
          .filter((article) => article.id.endsWith(".md"))
          .map((article: Article) => (
            <Link
              className="flex items-center justify-between w-full py-2 hover:bg-zinc-100 px-4"
              key={article.id}
              href={`/articles/${article.id}`}
            >
              {article.title}{" "}
              <span className="text-zinc-500">
                {moment(article.date, "YYYY-MM-DD").format("MMMM Do, YYYY")}
              </span>
            </Link>
        ))}
      </section>
        {articles.length === 0 && (
          <div className="flex items-center justify-center">
            <p>
              <span className="bold">404</span>. There are no articles yet. Be
              patient, I am working on it.
            </p>
          </div>
        )}
    </div>
  );
}