import type { Metadata } from "next";
import { getArticleData, getArticles } from "@/src/lib/articles";
import { Article } from "../../../components/article";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const articleData = await getArticleData(params.slug);
  const baseUrl = "https://cassano.com.br";

  return {
    title: `${articleData.title} - Joaquim Cassano`,
    description: articleData.excerpt || articleData.title,
    authors: [{ name: "Joaquim Cassano" }],
    openGraph: {
      type: "article",
      title: articleData.title,
      description: articleData.excerpt || articleData.title,
      url: `${baseUrl}/articles/${params.slug}`,
      authors: ["Joaquim Cassano"],
      publishedTime: articleData.publishedDate,
    },
    twitter: {
      card: "summary_large_image",
      title: articleData.title,
      description: articleData.excerpt || articleData.title,
    },
  };
}

export async function generateStaticParams() {
  const articles = getArticles();
  return articles.map((article) => ({
    slug: article.id,
  }));
}

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const articleData = await getArticleData(params.slug);

  return (
    <section>
      <div className="flex flex-col my-12">
        <h1 className="font-bold">{articleData.title}</h1>
        <span className="text-zinc-700">{articleData.date}</span>
      </div>
      <Article html={articleData.contentHtml} />
    </section>
  );
}
