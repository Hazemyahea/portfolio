const Project = ({ numbre, title, contect, Github, livelink, skills = [] }) => {
  return (
    <div className=" flex flex-col gap-3 p-5 border">
      <h3 className=" text-2xl font-bold">{title}</h3>
      <p>{contect}</p>
      <div className="flex flex-col gap-2">
        <span>GithubLink: {Github}</span>
        <span>Live: {livelink}</span>
      </div>
      <div>
        <ul className=" flex  gap-3">
          {skills.map((skill) => {
            return (
              <li
                key={numbre}
                className=" bg-red-600 text-white p-1 uppercase rounded-md"
              >
                {skill}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Project;
