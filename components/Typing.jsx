"use client";

import { useEffect, useRef, useState } from "react";

function Typing({ text, duration = 100, initialDelay = 0 }) {
  const [displayText, setDisplayText] = useState("");
  const [displayCursor, setDisplayCursor] = useState(true);

  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // function placeholder for cleanup functions
    let clearIntervalsAndTimeouts = () => {};

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting) {
          // cleanup before starting new typing animation
          clearIntervalsAndTimeouts();
          clearIntervalsAndTimeouts = startTyping();
        } else {
          // cleanup if out of view;
          clearIntervalsAndTimeouts();
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
      clearIntervalsAndTimeouts();
    };
  }, [text, duration, initialDelay]);

  // typing animation function
  const startTyping = () => {
    setDisplayText("");
    setDisplayCursor(true);
    let i = 0;
    let interval = null;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setDisplayText(text.slice(0, i + 1));
        i++;
        if (i === text.length) clearInterval(interval);
      }, duration);
    }, initialDelay);
    const cursorTimeout = setTimeout(
      () => {
        setDisplayCursor(false);
      },
      initialDelay + text?.length * duration + 2000,
    );
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      clearTimeout(cursorTimeout);
    };
  };

  return (
    <>
      <span ref={ref}>{displayText}</span>
      {
        <span
          className={`${displayCursor ? "animate-pulse" : "opacity-0"} ml-1 transition-opacity`}
        >
          |
        </span>
      }
    </>
  );
}

export default Typing;
