
import { useState, useEffect } from 'react';

export const useTypingEffect = (words: string[], typeSpeed = 100, deleteSpeed = 50, delay = 1500) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingTimeout, setTypingTimeout] = useState<number | undefined>(undefined);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        // Pause at end of word before starting to delete
        setTypingTimeout(window.setTimeout(() => setIsDeleting(true), delay));
      } else if (isDeleting && updatedText === '') {
        // Finished deleting, move to next word
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };
    
    // Set timeout for next character
    const timeout = setTimeout(handleTyping, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, words, typeSpeed, deleteSpeed, delay, loopNum]);

  return text;
};
