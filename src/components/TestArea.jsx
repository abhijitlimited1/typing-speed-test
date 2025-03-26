import { useState, useEffect, useRef, useCallback } from "react";
import { sampleTexts } from "../data/sampleTexts";

const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
};

const TestArea = ({ selectedTime, language, onComplete }) => {
  const [words, setWords] = useState("");
  const [input, setInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(selectedTime);
  const [isTypingStarted, setIsTypingStarted] = useState(false);
  const inputRef = useRef(null);

  const generateNewWords = useCallback(() => {
    const timeFactor = selectedTime / 60;
    const paragraphs = sampleTexts[language]
      .split(/[.!?]/)
      .filter((p) => p.trim().length > 0);

    if (paragraphs.length === 0) {
      paragraphs.push("Start typing to begin the test...");
    }

    let selectedText = [];
    let targetLength = timeFactor * 300;

    while (
      selectedText.join(" ").length < targetLength &&
      selectedText.length < 50
    ) {
      const randomIndex = Math.floor(Math.random() * paragraphs.length);
      const newParagraph = paragraphs[randomIndex].trim();
      selectedText.push(newParagraph);
    }

    setWords(selectedText.join(" ").slice(0, targetLength));
    setInput("");
    setTimeLeft(selectedTime);
    setIsTypingStarted(false);
    inputRef.current?.focus();
  }, [language, selectedTime]);

  useEffect(() => {
    generateNewWords();
  }, [language, selectedTime, generateNewWords]);

  useEffect(() => {
    let timer;
    if (isTypingStarted && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isTypingStarted, timeLeft]);

  useEffect(() => {
    if (timeLeft === 0 || (isTypingStarted && input === words)) {
      handleComplete();
    }
  }, [timeLeft, input, words, isTypingStarted]);

  const handleComplete = () => {
    if (!isTypingStarted) return;

    const wordsTyped = input.trim().split(/\s+/).length;
    const charactersTyped = input.length;
    const correctCharacters = input
      .split("")
      .filter((char, i) => char === words[i]).length;

    onComplete({
      wpm: Math.round((wordsTyped / (selectedTime / 60)) * 100) / 100,
      accuracy: Math.round((correctCharacters / charactersTyped) * 100) || 0,
      totalWords: wordsTyped,
      mistakes: charactersTyped - correctCharacters,
    });
  };

  const handleInput = (e) => {
    if (!isTypingStarted) {
      setIsTypingStarted(true);
    }
    const newInput = e.target.value;
    setInput(newInput);

    if (newInput === words) {
      generateNewWords();
    }
  };

  const getCharStyle = (index) => {
    if (index >= input.length) return "text-gray-400";
    return input[index] === words[index]
      ? "text-green-400"
      : "text-red-400 bg-red-900/20";
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-8">
        <div className="text-5xl font-bold text-blue-400 mb-2">{timeLeft}</div>
        <div className="text-gray-400">seconds remaining</div>
      </div>

      <div
        onClick={() => inputRef.current?.focus()}
        className="bg-gray-800 rounded-xl p-6 mb-6 shadow-lg border border-gray-700 
        cursor-text h-64 overflow-y-auto relative"
      >
        <div className="text-2xl leading-relaxed tracking-wide font-mono break-words">
          {words.split("").map((char, i) => (
            <span key={i} className={getCharStyle(i)}>
              {char}
            </span>
          ))}
        </div>

        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={handleInput}
          className="absolute top-0 left-0 w-full h-full opacity-0 cursor-text"
          enterKeyHint="done"
          autoFocus
        />
      </div>

      <div className="flex justify-center mt-6 gap-4">
        <button
          onClick={generateNewWords}
          className="px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors 
          flex items-center text-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
              clipRule="evenodd"
            />
          </svg>
          Restart
        </button>
      </div>
    </div>
  );
};

export default TestArea;
