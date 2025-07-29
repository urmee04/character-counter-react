//import libraries and props
import React from "react";
import { type StatsDisplayProps } from "../../types";
import "./StatsDisplay.css";
//defines the StatsDisplay functional component, accepting props for displaying text statistics.
export const StatsDisplay: React.FC<StatsDisplayProps> = ({
  stats,
  showReadingTime = true,
  minWords,
  maxWords,
  targetReadingTime,
}) => {
  //helper function to format reading time from minutes (decimal) into "MM:SS" string.
  const formatReadingTime = (minutes: number) => {
    const mins = Math.floor(minutes);
    const secs = Math.round((minutes - mins) * 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const getWordCountClass = () => {
    if (minWords !== undefined && stats.wordCount < minWords) return "text-red";
    if (maxWords !== undefined && stats.wordCount > maxWords) return "text-red";
    //if both min/max are defined and word count is within range, return "text-green".
    if (
      minWords !== undefined &&
      maxWords !== undefined &&
      stats.wordCount >= minWords &&
      stats.wordCount <= maxWords
    )
      return "text-green";
    return "text-default";
  };
  //provides feedback on reading time relative to a target reading time.
  const getReadingTimeFeedback = () => {
    if (targetReadingTime !== undefined) {
      if (stats.readingTime < targetReadingTime * 0.9)
        return <span className="feedback-blue">(Too short)</span>;
      if (stats.readingTime > targetReadingTime * 1.1)
        return <span className="feedback-red">(Too long)</span>;
      return <span className="feedback-green">(On target)</span>; //If within 10% of target, show "On target".
    }
    return null; //return null if no target reading time is provided
  };

  return (
    <div className="stats-container">
      {/*Character Count Display*/}
      <div className="stat-box">
        <div className="label">Characters</div>
        <div className="value">{stats.characterCount}</div>
      </div>
      {/*Word Count Display*/}
      <div className="stat-box">
        <div className="label">Words</div>
        {/*applies dynamic class based on word count validation*/}
        <div className={`value ${getWordCountClass()}`}>{stats.wordCount}</div>
        {/*displays min/max word count range if either is provided*/}
        {(minWords || maxWords) && (
          <div className="word-range">
            {minWords && `Min: ${minWords}`} {minWords && maxWords && " | "}
            {maxWords && `Max: ${maxWords}`}
          </div>
        )}
      </div>
      {/*reading Time Display; conditionally rendered*/}
      {showReadingTime && (
        <div className="stat-box">
          <div className="label">Reading Time</div>
          <div className="value">{formatReadingTime(stats.readingTime)}</div>
          {/*displays reading time feedback if a target is set*/}
          {getReadingTimeFeedback()}
        </div>
      )}
    </div>
  );
};
