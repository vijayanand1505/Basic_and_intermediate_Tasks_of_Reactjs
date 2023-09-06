import React, { useEffect, useState } from "react";

export const Home = () => {
  const wordsArray = [
    "Computer Science Engineer",
    "Full Stack Developer",
    "UI/UX Designer",
    "Digital Marketer",
    "Data Analyst",
  ];
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const typingDelay = 200; // Delay between typing each character
  const erasingDelay = 50; // Delay between erasing each character
  const newTextDelay = 1000; // Delay before typing the next word
  const waitingTime = 2000; // Waiting time after typing a word

  useEffect(() => {
    const type = () => {
      if (charIndex < wordsArray[wordIndex].length) {
        setCurrentWord((prev) => prev + wordsArray[wordIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (charIndex === wordsArray[wordIndex].length) {
        setIsWaiting(true);
        setTimeout(() => {
          setIsWaiting(false);
          setIsDeleting(true);
        }, waitingTime);
      }
    };

    const erase = () => {
      if (charIndex > 0) {
        setCurrentWord((prev) => prev.slice(0, prev.length - 1));
        setCharIndex((prev) => prev - 1);
      } else if (charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % wordsArray.length);
      }
    };

    const typingInterval = setInterval(
      () => {
        if (!isWaiting) {
          if (isDeleting) {
            erase();
          } else {
            type();
          }
        }
      },
      isDeleting ? erasingDelay : typingDelay
    );

    return () => clearInterval(typingInterval);
  }, [charIndex, wordIndex, isDeleting, isWaiting]);

  return (
    <div>
      <br />
      <h1>Typing Effect:</h1>
      <h4 style={{ fontSize: "24px" }}>
        My Name is Vijay Anand, I'm a
        <span style={{ color: "blue", fontSize: "24px" }}> {currentWord}</span>
      </h4>
      <br />
    </div>
  );
};
