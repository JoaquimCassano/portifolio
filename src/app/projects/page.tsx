import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <>
      <h1 className="my-12 font-bold">Projects</h1>
      <section className="space-y-20">
        <article className="space-y-6">
          <h2>css2wind, a minigame for learning TailwindCSS</h2>
          <span>
            <span className="font-bold">Made with: </span>
            Next.js, Typescript, and TailwindCSS
          </span>
          <a
            href="https://css2wind.com"
            target="_blank"
            className="group block overflow-hidden relative ring-1 ring-zinc-900"
          >
            <span className="z-10 absolute flex items-center gap-2 top-2 right-2 invisible group-hover:visible text-slate-100">
              Click to visit website <ArrowUpRight className="size-5" />
            </span>
            <Image
              className="w-full h-full group-hover:scale-105 transition-all"
              src="/projects/css2wind.png"
              width={9999}
              height={250}
              alt="merchant"
            />
          </a>
          <p>
            A website to teach people what TailwindCSS is and isn&apos;t. The
            main feature is a minigame: there are eight CSS properties that you
            must translate to the equivalent TailwindCSS utility. It also has:{" "}
          </p>
          <ul className="space-y-4">
            <li>
              <span className="font-bold">Resources:</span> a page that details
              the recommended tooling to maximize productivity and
              maintainability while using TailwindCSS. It mentions libraries
              such as{" "}
              <a href="#" target="_blank">
                prettier-plugin-tailwindcss
              </a>{" "}
              and{" "}
              <a href="#" target="_blank">
                shadcn/ui
              </a>
              .
            </li>
            <li>
              <span className="font-bold">Frequently Asked Questions:</span> a
              page that addresses common beginner questions about TailwindCSS.
              It also exposes misconceptions about the framework, such as
              recurring comparisons to Bootstrap.
            </li>
            <li>
              <span className="font-bold">Tutorial:</span> a page with a
              comprehensive, step-by-step guide that teaches the user how to
              play the minigame.
            </li>
          </ul>
          <div className="items-center flex gap-4">
            <a className="items-center flex gap-2" href="https://css2wind.com">
              Visit website
              <ArrowUpRight className="size-5" />
            </a>
            <a
              className="items-center flex gap-2"
              href="https://github.com/LukeberryPi/css2wind"
            >
              View code
              <ArrowUpRight className="size-5" />
            </a>
          </div>
        </article>
        <article className="space-y-6">
          <h2>phived, an anti-procrastination to-do list</h2>
          <span>
            <span className="font-bold">Made with: </span> Vite, React and
            TailwindCSS
          </span>
          <a
            href="https://phived.com"
            className="group block overflow-hidden relative ring-1 ring-zinc-900"
            target="_blank"
          >
            <span className="z-10 absolute flex items-center gap-2 top-2 right-2 invisible group-hover:visible">
              Click to visit website <ArrowUpRight className="size-5" />
            </span>
            <Image
              className="w-full h-full group-hover:scale-105 transition-all"
              src="/projects/phived.png"
              width={250}
              height={250}
              alt="merchant"
            />
          </a>
          <p>
            A website to help you stop procrastinating. It is a to-do list with
            one premise: you can&apos;t have more than five tasks at the same
            time. If you want to add more tasks, you have to complete one of the
            previous tasks. It is beautiful, efficient and privacy-first (no
            informatio is stored). It also has:
          </p>
          <ul className="space-y-4">
            <li>
              <span className="font-bold">Daily tasks: </span>a page to list
              five things you want to do everyday. Everyday, you can restore
              these tasks to do them again. My five daily tasks are currently:
              do skin care, take creatine, work out, do a duolingo lesson, and
              solve 5 chess puzzles.
            </li>
            <li>
              <span className="font-bold">Progessive Web App (PWA): </span>
              download phived on any mobilde device for free, so that you can
              access your tasks from any device.
            </li>
          </ul>
          <div className="items-center flex gap-4">
            <a className="items-center flex gap-2" href="https://phived.com">
              Visit website
              <ArrowUpRight className="size-5" />
            </a>
            <a
              className="items-center flex gap-2"
              href="https://github.com/LukeberryPi/phived"
            >
              View code
              <ArrowUpRight className="size-5" />
            </a>
          </div>
        </article>
      </section>
    </>
  );
}
