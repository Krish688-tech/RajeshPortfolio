import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function CustomCursor() {
  const cursorDot = useRef(null);
  const cursorOutline = useRef(null);
  const [cursorText, setCursorText] = useState("");
  const [cursorMode, setCursorMode] = useState("default");

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;

      gsap.set(cursorDot.current, {
        x: clientX,
        y: clientY,
      });

      gsap.to(cursorOutline.current, {
        x: clientX,
        y: clientY,
        duration: 0.18,
        ease: "power3.out",
      });
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest("[data-cursor]");

      if (!target) {
        setCursorMode("default");
        setCursorText("");
        return;
      }

      const mode = target.dataset.cursor;

      if (mode === "button") {
        setCursorMode("button");
        setCursorText("");
      }

      if (mode === "view") {
        setCursorMode("view");
        setCursorText("VIEW");
      }

      if (mode === "play") {
        setCursorMode("play");
        setCursorText("PLAY");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  const cursorClasses = {
    default: "h-10 w-10 border border-white/60 bg-transparent",
    button: "h-16 w-16 border border-white bg-white/10",
    view: "h-20 w-20 border border-white bg-white text-black",
    play: "h-20 w-20 border border-white bg-white text-black",
  };

  return (
    <>
      {/* Center Dot */}
      <div
        ref={cursorDot}
        className="pointer-events-none fixed left-0 top-0 z-9999 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
      />

      {/* Interactive Cursor */}
      <div
        ref={cursorOutline}
        className={`pointer-events-none fixed left-0 top-0 z-9998 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full transition-all duration-300 ${cursorClasses[cursorMode]}`}
      >
        <span className="text-[10px] font-bold tracking-[0.2em]">
          {cursorText}
        </span>
      </div>
    </>
  );
}

export default CustomCursor;