import { useContext } from "react";
import { ThemeContext } from "../App";

export default function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer>
      <div
        className={`mx-auto max-w-screen-2xl mt-10 px-6 sm:px-9 py-6 ${
          theme === "dark" ? "bg-slate-800" : "bg-slate-500"
        }`}
      >
        <div>
          <div
            className={`text-sm text-center font-medium ${
              theme === "dark" ? "text-gray-200" : "text-gray-900"
            }`}
          >
            © 2024 Sawaluddin
          </div>
        </div>
      </div>
    </footer>
  );
}
