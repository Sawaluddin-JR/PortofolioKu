import { useContext } from "react";
import { LanguageContext, ThemeContext, projects, strings } from "../App";

export default function Project() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  return (
    <div className="mx-auto max-w-screen-2xl px-6 sm:px-9 py-6">
      <div
        id="projects"
        className="mb-6 text-lg sm:text-xl md:text-2xl font-bold text-center bg-gradient-to-br bg-clip-text text-transparent from-sky-500 to-cyan-400"
      >
        {strings[language].projects}
      </div>
      <div className="flex flex-col gap-6">
        {projects.map((project, i) => (
          <div
            key={i}
            className={`flex flex-col items-center gap-x-8 rounded-md p-3 lg:flex-row
              ${theme === "dark" ? "bg-slate-800" : "bg-slate-500"}`}
          >
            <a
              href={project.link}
              className="w-64 shrink-0 flex justify-center"
            >
              <img
                src={project.image}
                alt={project.name}
                className="object-cover"
              />
            </a>
            <div className="">
              <div className="flex flex-col items-center gap-y-2 text-center lg:flex-row">
                <a href={project.link} className="hover:text-cyan-400">
                  <div className="text-base sm:text-lg md:text-xl font-semibold">
                    {project.name}
                  </div>
                </a>
                <div className="lg:ml-3 flex gap-2 flex-wrap justify-center">
                  {project.tools.map((tool, i) => (
                    <div
                      key={i}
                      className="flex rounded-md px-2 py-1 text-xs font-semibold bg-slate-600 text-cyan-400"
                    >
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
              <p
                className={`mt-3 text-justify
                  ${theme === "dark" ? "text-gray-400" : "text-gray-900"}`}
              >
                {project.description[language]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
