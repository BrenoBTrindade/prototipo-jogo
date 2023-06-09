"use client"
import { useState } from 'react';

export default function Home() {
  const [selectedWordIndex, setSelectedWordIndex] = useState(-1);
  const words = ['azul', 'vermelho', 'verde'];

  function shuffleArray<T>(array: T[]): T[] {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }

  const newWords = shuffleArray(words);

  const handleButtonClick = (index: number) => {
    setSelectedWordIndex(index);
  };

  return (
    <main className="flex justify-around">
      {newWords.map((word, i) => (
        <button
          className={`mt-10 w-[200px] h-[200px] bg-red-700 text-white text-4xl transition-all duration-300 ${
            selectedWordIndex === i ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => handleButtonClick(i)}
          key={i}
        >
          {word}
        </button>
      ))}
    </main>
  );
}