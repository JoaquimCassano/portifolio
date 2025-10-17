import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Joaquim Cassano - Software Engineer",
  description:
    "Learn about Joaquim Cassano, a trainee Brazilian software engineer passionate about Python, web development, and gaming. Contact me at joaquim@cassano.com.br",
  openGraph: {
    title: "About Joaquim Cassano",
    description:
      "Learn about Joaquim Cassano, a trainee Brazilian software engineer",
    url: "https://cassano.com.br/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <h1 className="my-12 font-bold">About</h1>
      <article>
        <p>
          I am a trainee brazilian software engineer that loves Python and
          Armadillos
        </p>
        <p>
          In my free time I enjoy coding and playing Videogames, such as
          Fortnite, Valorant and EA FC 26 (yes, I am a fifa addict)
        </p>
        <p>
          Thank you for visiting my website. I hope you find it informative and
          enjoyable. You can contact me at{" "}
          <a href="mailto:joaquim@cassano.com.br">joaquim@cassano.com.br</a>.
        </p>
        <p>Joaquim Cassano</p>
      </article>
    </>
  );
}
