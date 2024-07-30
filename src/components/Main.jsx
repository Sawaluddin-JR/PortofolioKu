import { useContext } from "react";
import Project from "./Project";
import { BsGithub, BsLinkedin, BsInstagram, BsFacebook } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { LanguageContext, strings } from "../App";

export default function Main(projects) {
  const { language } = useContext(LanguageContext);

  return (
    <main>
      <div className="mx-auto max-w-screen-2xl px-6 sm:px-9 py-6">
        <div className="flex flex-col-reverse items-center md:flex-row md:justify-between">
          <div className="md:w-1/2">
            <h1 className="text-xl text-center md:text-left  sm:text-2xl md:text-3xl font-bold">
              {strings[language].introduction}
              <span className="bg-gradient-to-br bg-clip-text text-transparent from-sky-500 to-cyan-400">
                Sawaluddin
              </span>
            </h1>
            <div className="mt-6 text-base sm:text-lg md:text-xl">
              <p> {strings[language].tagline}</p>
              <p className="tracking-normal bg-gradient-to-br bg-clip-text text-transparent font-extrabold italic from-sky-500 to-cyan-400">
                {strings[language].slogan}
              </p>
            </div>
          </div>
          <img src="myprofile.jpg" alt="portofolio" className="md:w-1/3 rounded-md" />
        </div>
      </div>
      <Project projects={projects} />
      <div className="mx-auto max-w-screen-2xl px-6 sm:px-9 py-6">
        <div
          id="contact"
          className="mb-6 text-lg sm:text-xl md:text-2xl font-bold text-center bg-gradient-to-br bg-clip-text text-transparent from-sky-500 to-cyan-400"
        >
          {strings[language].contacts}
        </div>
        <div className="flex gap-6 sm:gap-10 justify-center text-2xl sm:text-3xl items-center">
          <a href="mailto:sawaluddinsrg472@gmail.com">
            <HiOutlineMail className="text-3xl sm:text-4xl" />
          </a>
          <a href="https://github.com/Sawaluddin-JR">
            <BsGithub />
          </a>
          <a href="https://www.linkedin.com/in/sawaluddin-siregar/">
            <BsLinkedin />
          </a>
          <a href="https://www.instagram.com/sawaluddinsiregar_28/">
            <BsInstagram />
          </a>
          <a href="https://www.facebook.com/Sawaluddin Jr.">
            <BsFacebook />
          </a>
        </div>
      </div>
    </main>
  );
}
