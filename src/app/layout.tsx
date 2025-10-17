import type { Metadata } from "next";
import { Karla } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { ScrollToTop } from "../components/scroll-to-top";
import { ThemeProvider } from "../components/theme-provider";
import { ThemeToggle } from "../components/theme-toggle";
import { Analytics } from "@vercel/analytics/next";

const baseUrl = "https://cassano.com.br";

export const metadata: Metadata = {
  title: "Joaquim Cassano - Software Engineer | Blog & Projects",
  description:
    "Discover my projects, articles on Python, web development, and software engineering. Connect with me on GitHub and explore my work.",
  keywords:
    "Joaquim Cassano, software engineer, Python, web development, blog, projects, dev, brasil, programador, desenvolvedor",
  authors: [{ name: "Joaquim Cassano", url: baseUrl }],
  creator: "Joaquim Cassano",
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    title: "Joaquim Cassano - Software Engineer | Blog & Projects",
    description:
      "Discover my projects, articles on Python, web development, and software engineering.",
    siteName: "Joaquim Cassano",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@JoaquimCassano",
    title: "Joaquim Cassano - Software Engineer",
    description:
      "Discover my projects, articles on Python, web development, and software engineering.",
  },
  robots: "index, follow",
};

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Joaquim Cassano",
    url: baseUrl,
    image: `${baseUrl}/profile.jpg`,
    jobTitle: "Software Engineer",
    sameAs: [
      "https://github.com/JoaquimCassano",
      "https://x.com/JoaquimCassano",
      "https://bsky.app/profile/joaquimcassano.bsky.social",
    ],
    email: "mailto:joaquim@cassano.com.br",
    description:
      "Trainee Brazilian software engineer who loves Python and building things",
  };

  return (
    <html lang="en" className="min-h-screen" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${karla.className} min-h-screen p-4`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header className="max-w-prose mx-auto mb-8">
            <nav className="flex items-center justify-between">
              <Link className="flex flex-col no-underline" href="/">
                <span className="font-bold">Joaquim Cassano</span>
                Software Engineer
              </Link>
              <div className="items-center flex gap-4">
                <ThemeToggle />
                <Link href="/">Home</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/articles">Articles</Link>
                <Link href="/about">About</Link>
              </div>
            </nav>
          </header>
          <main className="mx-auto max-w-prose">
            {children}
            <ScrollToTop />
          </main>
        </ThemeProvider>
      </body>
      <Analytics />
    </html>
  );
}
