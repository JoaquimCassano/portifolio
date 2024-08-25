import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <>
      <h1>Projects</h1>
      <section>
        <article>
          <div className="mt-10 flex justify-between flex-col gap-4 md:items-center md:flex-row">
            <h2 className="m-0">The official Python SDK of Alertpix</h2>
            <div className="flex items-center gap-4">
              <div className="ring-1 ring-zinc-950 px-2 py-1">Python</div>
            </div>
          </div>
          <a
            href="https://TODO"
            target="_blank"
            className="group block overflow-hidden my-6 relative ring-1 ring-zinc-950"
          >
            <span className="z-10 absolute flex items-center transition-all gap-2 top-2 right-2 opacity-0 group-hover:opacity-100 text-zinc-100">
              Click to visit website <ArrowUpRight className="size-5" />
            </span>
            <Image
              className="size-full group-hover:scale-105 transition-all"
              src="/projects/alertpix.svg"
              width={9999}
              height={250}
              alt="merchant"
            />
          </a>
          <p>
            The official Python SDK of {" "}
            <a
              className="font-bold underline hover:scale-150"
              href="https://alertpix.live"
            >
              Alertpix
            </a>
            . It uses the Requests library to handle the API Connections.
          </p>

          <div className="items-center flex gap-4">
            <a
              className="items-center flex gap-2"
              href="https://alertpix.live"
              target="_blank"
            >
              Visit website
              <ArrowUpRight className="size-5" />
            </a>
            <a
              className="items-center flex gap-2"
              href="https://github.com/JoaquimCassano/Alert-SDK"
              target="_blank"
            >
              View code
              <ArrowUpRight className="size-5" />
            </a>
          </div>
        </article>

        <article>
          <div className="mt-10 flex justify-between flex-col gap-4 md:items-center md:flex-row">
            <h2 className="m-0">PopTime DEV</h2>
            <div className="flex items-center gap-4">
              <div className="ring-1 ring-zinc-950 px-2 py-1">Python</div>
              <div className="ring-1 ring-zinc-950 px-2 py-1">OpenAI</div>
              <div className="ring-1 ring-zinc-950 px-2 py-1">Huggingface</div>
              <div className="ring-1 ring-zinc-950 px-2 py-1">Tweety</div>
            </div>
          </div>
          <a
            href="https://phived.com"
            className="group block overflow-hidden my-6 relative ring-1 ring-zinc-950"
            target="_blank"
          >
            <span className="z-10 absolute flex items-center gap-2 top-2 right-2 opacity-0 transition-all group-hover:opacity-100">
              Click to visit website <ArrowUpRight className="size-5" />
            </span>
            <Image
              className="size-full group-hover:scale-105 transition-all"
              src="/projects/phived.png"
              width={9999}
              height={250}
              alt="merchant"
            />
          </a>
          <p>
            A Twitter/X bot that uses web scrapping to get the tweets of the
            timeline, and an LLM to analyze them, find the most important news
            and advertise them as tweets. It also has some special features:
          </p>
          <ul>
            <li>
              <span className="font-bold">Images analyzing: </span>it uses the
              Blip image analyzing model to describe the images of the posts to
              the Openai GPT-3, in order to get better results.
            </li>

          </ul>
          <div className="items-center flex gap-4">
            <a
              className="items-center flex gap-2"
              href="https://github.com/LukeberryPi/phived"
              target="_blank"
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
