import type { Metadata } from "next";
import { Karla } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { ScrollToTop } from "../components/scroll-to-top";
import { ThemeProvider } from "../components/theme-provider";
import { ThemeToggle } from "../components/theme-toggle";

export const metadata: Metadata = {
  title: "Joaquim Cassano's Blog",
  description: "Joaquim Cassano's Blog",
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
  return (
    <html lang="en" className="min-h-screen" suppressHydrationWarning>
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
          <main className="mx-auto max-w-prose">{children}<ScrollToTop /></main>
        </ThemeProvider>
      </body>
    </html>
  );
}
