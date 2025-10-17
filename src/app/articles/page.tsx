import type { Metadata } from "next";
import { Article, getArticles } from "@/src/lib/articles";
import moment from "moment";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Articles - Joaquim Cassano | Python, Web Dev & Software Engineering",
  description: "Read my latest articles about Python, web development, software engineering, and tech insights.",
  openGraph: {
    title: "My Articles",
    description: "Read my latest articles about Python, web development, and software engineering",
    url: "https://cassano.com.br/articles",
  },
};

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
      <section className="flex flex-col divide-y divide-zinc-300 dark:divide-zinc-700 w-full">
        {articles.map((article: Article) => (
          <Link
            className="flex items-center justify-between w-full py-2 hover:bg-zinc-100 dark:hover:bg-zinc-900 px-4"
            key={article.id}
            href={`/articles/${article.id}`}
          >
            {article.title}{" "}
            <span className="text-zinc-500 dark:text-zinc-400">
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
