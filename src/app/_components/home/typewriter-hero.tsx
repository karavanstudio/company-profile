"use client";

import { useEffect, useState } from "react";

export function TypewriterHero() {
  const [displayText, setDisplayText] = useState("");
  const [isLine2, setIsLine2] = useState(false);

  useEffect(() => {
    const line1 = "Welcome to ";
    const line2 = "Karavan Studio";

    let charIndex = 0;
    let deleting = false;
    let line2Active = false;
    let timeoutId: NodeJS.Timeout;

    const typeStep = () => {
      let speed = 60;

      if (!deleting) {
        if (!line2Active) {
          if (charIndex < line1.length) {
            setDisplayText(line1.substring(0, charIndex + 1));
            charIndex++;
          } else {
            line2Active = true;
            setIsLine2(true);
            charIndex = 0;
          }
        } else {
          if (charIndex < line2.length) {
            setDisplayText(line2.substring(0, charIndex + 1));
            charIndex++;
          } else {
            deleting = true;
            speed = 3000;
          }
        }
      } else {
        speed = 30;

        if (line2Active) {
          if (charIndex > 0) {
            charIndex--;
            setDisplayText(line2.substring(0, charIndex));
          } else {
            line2Active = false;
            setIsLine2(false);
            charIndex = line1.length;
          }
        } else {
          if (charIndex > 0) {
            charIndex--;
            setDisplayText(line1.substring(0, charIndex));
          } else {
            deleting = false;
            speed = 500;
          }
        }
      }

      timeoutId = setTimeout(typeStep, speed);
    };

    timeoutId = setTimeout(typeStep, 60);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <h1 className="font-display-xl text-5xl md:text-7xl text-on-surface tracking-tight font-bold mb-space-lg leading-[1.08] min-h-30">
      {!isLine2 ? (
        <>
          {displayText}
          <span className="animate-pulse text-gray-300">|</span>
        </>
      ) : (
        <>
          Welcome to <br />
          <span className="text-primary-fixed text-[#b2c5ff]">
            {displayText}
            <span className="animate-pulse text-gray-300">|</span>
          </span>
        </>
      )}
    </h1>
  );
}