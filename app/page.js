import Image from "next/image";

export default function Home() {
  return (
    <main className=" container mx-auto p-5">
      <h2 className=" text-3xl font-semibold">{`Hi there, I'm Hazem! 👋`}</h2>
      <p className="p-3 mt-1">
        {` I'm a passionate software engineer specializing in front-end development
        with a focus on React and Next.js. I love crafting beautiful and
        functional user interfaces that enhance user experiences.`}
      </p>
      <ul className=" flex flex-col gap-3  p-4 border-t-2">
        <li>
          {`🔭 I’m currently working on honing my skills in React and exploring
          server-side rendering with Next.js.`}
        </li>
        <li>
          {` 🌱 I’m continuously learning and staying updated with the latest
          trends in web development.`}
        </li>
        <li>
          {`💬 Ask me about front-end development, React, or anything related to
          web technologies!`}
        </li>
      </ul>
      <div className="mt-5">
        <ul className=" flex gap-6">
          <a target="_blank" href="https://www.linkedin.com/in/hazemyahea/">
            <li>
              <Image
                src="/images/linkedin.png"
                width={40}
                height={40}
                loading="lazy"
                alt="Linkedin"
              />
            </li>
          </a>
          <a target="_blank" href="https://github.com/Hazemyahea">
            <li>
              <Image
                src="/images/social.png"
                width={40}
                height={40}
                loading="lazy"
                alt="Soical"
              />
            </li>
          </a>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1vHUD2KOK5gMP0aJ4OpiW7h4_JN28e8xS/view?usp=drive_link"
          >
            <li>
              <Image
                src="/images/cv.png"
                width={40}
                height={40}
                loading="lazy"
                alt="My Cv"
              />
            </li>
          </a>
        </ul>
      </div>
    </main>
  );
}
