import { useContext, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";
import { LanguageContext, ThemeContext} from "../App";
//import ThemeButton from "./ThemeButton";

// eslint-disable-next-line react/prop-types
export default function Header({ scrollRef }) {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);
  const { language, setLanguage } = useContext(LanguageContext);

  const menuLinks = [
    { name: "PROJECTS", link: "#projects" },
    { name: "CONTACT", link: "#contact" },
  ];

  return (
    <nav
      className={`sticky top-0
       ${
         theme === "light"
           ? "bg-gray-300 text-gray-900"
           : "bg-gray-800 text-gray-900"
       }`}
    >
      <div className="flex items-center justify-between" ref={scrollRef}>
        <div className="mx-7">
          <h4
            className={`text-4xl uppercase font-bold ${
              theme === "light" ? "text-gray-900" : "text-white"
            }`}
          >
            Sya<span className="text-primary">P</span>F
          </h4>
        </div>
        <div className="text-gray-900 md:block hidden px-7 py-2 font-medium rounded-bl-full">
          <ul
            className={`flex items-center gap-1 py-4 px-4 text-semibold ${
              theme === "light" ? "text-gray-900" : "text-white"
            }`}
          >
            {menuLinks?.map((menu, i) => (
              <li key={i} className="px-4 hover:text-blue-500">
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
            {theme === "light" ? (
              <button onClick={() => setTheme("dark")}>
                <BsMoonStarsFill size={16} className="hover:text-blue-500" />
              </button>
            ) : (
              <button onClick={() => setTheme("light")}>
                <BsFillSunFill size={20} className="hover:text-blue-500" />
              </button>
            )}
            <div className="px-2 flex text-center">
              {language === "en" ? (
                <button onClick={() => setLanguage("id")}>
                  <h1 className="hover:text-blue-500">ID</h1>
                </button>
              ) : (
                <button onClick={() => setLanguage("en")}>
                  <h1 className="hover:text-blue-500">EN</h1>
                </button>
              )}
            </div>
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="z-[999] text-white text-3xl md:hidden m-5"
        >
          <AiOutlineMenu />
        </div>
        <div
          className={`md:hidden text-white absolute w-4/2 h-screen px-7 py-2 font-medium bg-gray-700 top-0 duration-300 ${
            open ? "right-0" : "right-[-100%]"
          }`}
        >
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li
                onClick={() => setOpen(false)}
                key={i}
                className="px-6 hover:text-blue-600"
              >
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
            {theme === "light" ? (
              <button onClick={() => setTheme("dark")}>
                <BsFillSunFill
                  onClick={() => setOpen(false)}
                  size={20}
                  className="hover:text-blue-500 mx-auto"
                />
              </button>
            ) : (
              <button onClick={() => setTheme("light")}>
                <BsMoonStarsFill
                  onClick={() => setOpen(false)}
                  size={20}
                  className="hover:text-blue-500 mx-auto"
                />
              </button>
            )}
            {language === "en" ? (
              <button onClick={() => setLanguage("id")}>
                <h1
                  onClick={() => setOpen(false)}
                  className="hover:text-blue-500 mx-auto"
                >
                  ID
                </h1>
              </button>
            ) : (
              <button onClick={() => setLanguage("en")}>
                <h1
                  onClick={() => setOpen(false)}
                  className="hover:text-blue-500 mx-auto"
                >
                  EN
                </h1>
              </button>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
