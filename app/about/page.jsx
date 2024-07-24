import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main className=" container mx-auto p-5">
      <div className="flex flex-wrap w-[80%] p-5">
        <Image
          className=" float-left rounded-lg shadow-sm shadow-white ml-3 mb-3"
          src="/images/hazem.png"
          width={200}
          height={70}
          loading="lazy"
          alt="Hazem"
        />

        <p className="p-3 border-b">
          {` 🐱‍🏍 I am a junior software developer with a focus on front-end
          development. My skills include HTML, CSS, JavaScript, and React. I
          love problem-solving and have honed my skills by solving problems on
          LeetCode. While I don't have formal work experience in software
          development, I have built several projects that showcase my abilities
          and passion for coding. You can find details about these projects in
          the Projects section.`}
        </p>
        <div className=" p-1">
          <ul className=" flex p-5 gap-12  ">
            <li>
              <Image
                src="/images/react.png"
                width={70}
                height={70}
                loading="lazy"
                alt="React"
              />
            </li>
            <li>
              <Image
                src="/images/html-5.png"
                width={70}
                height={30}
                loading="lazy"
                alt="HTML"
              />
            </li>
            <li>
              <Image
                src="/images/css.png"
                width={70}
                height={30}
                loading="lazy"
                alt="css"
              />
            </li>
            <li>
              <Image
                src="/images/js.png"
                width={70}
                height={30}
                loading="lazy"
                alt="js"
              />
            </li>
            <li>
              <Image
                src="/images/next.jpg"
                width={90}
                height={30}
                loading="lazy"
                alt="next"
              />
            </li>
          </ul>
        </div>
        <p className="p-3 border-b">
          {`I am continuously improving my skills by solving problems on LeetCode,
          focusing on enhancing my understanding of algorithms and data
          structures. I am always striving to develop my problem-solving
          abilities, which helps me gain a deeper understanding of the field and
          write code more efficiently.`}
          <Image
            src="/images/leetcode.png"
            className="mt-3"
            loading="lazy"
            alt="Hazem"
            width={1000}
            height={100}
          />
        </p>
        <p className="p-3 mt-3">
          {`Additionally, I have created a couple of videos on YouTube about this
          field—just two videos, but hey, it's a start! 😄"`}
        </p>
        <iframe
          width="1000"
          height="315"
          src="https://www.youtube.com/embed/xf84JEdwq4o?si=XmBmX0WJpZ2ZYsJ0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </main>
  );
};

export default page;
