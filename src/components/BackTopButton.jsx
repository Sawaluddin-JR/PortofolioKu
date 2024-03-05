import { useContext } from "react";
import { ThemeContext } from "../App";
import { GoMoveToTop } from "react-icons/go";

// eslint-disable-next-line react/prop-types
export function BackTopButton({scrollRef}) {
  const { theme } = useContext(ThemeContext);
  const scrollToTop = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`fixed bottom-6 right-8 md:bottom-10 md:right-10 flex justify-center items-center text-xl p-1 border ${
        theme === "dark"
          ? "border-white text-white hover:bg-white hover:text-black"
          : "border-black text-black hover:bg-black hover:text-white"
      } rounded-full hover:cursor-pointer`}
      onClick={() => {
        // eslint-disable-next-line react/prop-types
        scrollToTop(scrollRef.current);
      }}
    >
      <GoMoveToTop />
    </button>
  );
}
