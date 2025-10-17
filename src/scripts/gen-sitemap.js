import fs from "fs";
import path from "path";
import matter from "gray-matter";
import moment from "moment";

const baseUrl = "https://cassano.com.br";

function getArticles() {
  const ARTICLES_DIR = path.join(process.cwd(), "src/articles");
  const fileNames = fs.readdirSync(ARTICLES_DIR);

  const allArticlesData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const id = fileName.replace(/\.md$/, "");
      const fullPath = path.join(ARTICLES_DIR, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf-8");
      const matterResult = matter(fileContents);

      return {
        id,
        title: matterResult.data.title,
        date: moment(matterResult.data.date, "YYYY-MM-DD").format("YYYY-MM-DD"),
      };
    });

  return allArticlesData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else if (a.date > b.date) {
      return -1;
    } else {
      return 0;
    }
  });
}

function generateSitemap() {
  const articles = getArticles();

  const pages = [
    {
      url: "",
      changefreq: "monthly",
      priority: "1.0",
    },
    {
      url: "/about",
      changefreq: "monthly",
      priority: "0.8",
    },
    {
      url: "/projects",
      changefreq: "weekly",
      priority: "0.8",
    },
    {
      url: "/articles",
      changefreq: "weekly",
      priority: "0.8",
    },
  ];

  articles.forEach((article) => {
    pages.push({
      url: `/articles/${article.id}`,
      changefreq: "never",
      priority: "0.6",
      lastmod: article.date,
    });
  });

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  pages.forEach((page) => {
    xml += "  <url>\n";
    xml += `    <loc>${baseUrl}${page.url}</loc>\n`;
    if (page.lastmod) {
      xml += `    <lastmod>${page.lastmod}</lastmod>\n`;
    }
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += "  </url>\n";
  });

  xml += "</urlset>";

  const sitemapPath = path.join(process.cwd(), "public", "sitemap.xml");
  fs.writeFileSync(sitemapPath, xml);
  console.log("Sitemap generated successfully!");
}

generateSitemap();
