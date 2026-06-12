import { useEffect, useState } from 'react';

export default function TypingEffect() {
  const strings = [
    'Robotics Engineer',
    'AI Enthusiast',
    'Drone Pilot',
    'Automation Specialist'
  ];

  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [typeSpeed, setTypeSpeed] = useState(70);

  useEffect(() => {
    let timer;

    const currentString = strings[stringIndex];

    const type = () => {
      if (isDeleting) {
        setText(currentString.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        setTypeSpeed(35);
      } else {
        setText(currentString.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        setTypeSpeed(70);
      }

      if (!isDeleting && charIndex === currentString.length) {
        setTypeSpeed(2000);
        setIsDeleting(true);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setStringIndex((prev) => (prev + 1) % strings.length);
        setTypeSpeed(400);
      }
    };

    timer = setTimeout(type, typeSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, stringIndex, typeSpeed]);

  return (
    <>
      <span id="typing-text">{text}</span>
      <span className="typing-cursor"></span>
    </>
  );
}
