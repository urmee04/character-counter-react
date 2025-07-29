//import types and libraries
import "tailwindcss";
import React from "react";
import { type StatsDisplayProps } from "../../types";
//StatsDisplay component
export const StatsDisplay: React.FC<StatsDisplayProps> = ({
  stats,
  showReadingTime = true,
}) => {
  //Format(Helper function) the reading time into minutes:seconds
  const formatReadingTime = (minutes: number) => {
    const mins = Math.floor(minutes);
    const secs = Math.round((minutes - mins) * 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex justify-between max-w-[600px] mx-auto p-2.5 border-b border-gray-200 font-sans">
      <div className="text-center flex-1">
        <div className="font-bold mb-1">Characters</div>
        <div>{stats.characterCount}</div>
      </div>

      <div className="text-center flex-1">
        <div className="font-bold mb-1">Words</div>
        <div>{stats.wordCount}</div>
      </div>
      {/* Conditional rendering of reading time */}
      {showReadingTime && (
        <div className="text-center flex-1">
          <div className="font-bold mb-1">Reading Time</div>
          <div>{formatReadingTime(stats.readingTime)}</div>
        </div>
      )}
    </div>
  );
};
