import { useState, useEffect } from 'react';

const TypeWriter = ({ texts, speed = 100, deleteSpeed = 50, pauseTime = 2000 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timeout;
    const currentFullText = texts[currentTextIndex];

    if (!isDeleting && displayText === currentFullText) {
      // Pause at the end of typing
      setIsPaused(true);
      timeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting && displayText === '') {
      // Move to next text
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    } else if (!isPaused) {
      // Type or delete
      timeout = setTimeout(() => {
        if (isDeleting) {
          setDisplayText(currentFullText.substring(0, displayText.length - 1));
        } else {
          setDisplayText(currentFullText.substring(0, displayText.length + 1));
        }
      }, isDeleting ? deleteSpeed : speed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, isPaused, currentTextIndex, texts, speed, deleteSpeed, pauseTime]);

  return (
    <span className="gradient-text">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypeWriter;
