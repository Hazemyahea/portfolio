import Project from "../components/Project";

const page = () => {
  return (
    <div className="flex flex-col gap-2 container mx-auto">
      <Project
        title="Quran - website"
        contect="This website provides a platform for users to listen to the Holy Quran recited by various esteemed qaris (reciters). Users can access a wide range of Quranic recitations by renowned scholars and reciters, allowing them to immerse themselves in the divine verses of the Quran. The website offers a seamless and user-friendly interface, making it easy for individuals to navigate through different recitations and chapters of the Quran. Whether for spiritual enrichment, memorization, or relaxation, users can utilize this platform to engage with the sacred text in a meaningful way. With its diverse collection of recitations, the website caters to users of different backgrounds and preferences, fostering a deeper connection with the Quranic verses. Experience the beauty and serenity of Quranic recitations with just a click away.
"
        livelink="https://quran-mauve-xi.vercel.app/"
        Github="https://github.com/Hazemyahea/Quran"
        skills={["React", "Tailwind"]}
        key={1}
      />
      <Project
        title="Cooking App"
        contect="your ultimate destination for exploring delicious recipes from around the world! Whether you're an experienced chef or a home cook, our website offers a diverse collection of recipes categorized by country and type of dish."
        livelink="https://cooking-app-ashy.vercel.app/"
        Github="https://github.com/Hazemyahea/Cooking-App"
        skills={["Next-js", "Tailwind"]}
        key={2}
      />
      <Project
        title="Learn Way"
        contect="I created Path to Learning, a website offering courses in various fields that you can follow and view directly from the site. You can create an account and save the courses you want in your profile, making it easy to access them later."
        livelink="https://learnway.vercel.app/"
        Github="https://github.com/Hazemyahea/learnway"
        skills={["React", "Tailwind", "supabase"]}
        key={3}
      />
      <Project
        title="The-reddit-clone"
        contect="Soical Media Clone"
        livelink="https://the-reddit-clone.vercel.app/"
        Github="https://github.com/Hazemyahea/The-reddit-clone"
        skills={["React", "Tailwind", "supabase"]}
        key={4}
      />
    </div>
  );
};

export default page;
