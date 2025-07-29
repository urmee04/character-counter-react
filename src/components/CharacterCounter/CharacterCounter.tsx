import { useState } from "react";
import { TextInput } from "../TextInput/TextInput";
import { StatsDisplay } from "../StatsDisplay/StatsDisplay";
import { type TextStats, type CharacterCounterProps } from "../../types";
import "./CharacterCounter.css";
//defines the CharacterCounter functional component, accepting optional props for word limits and target reading time.
const CharacterCounter: React.FC<CharacterCounterProps> = ({
  minWords = 25,
  maxWords = 100,
  targetReadingTime = 0.5,
}) => {
  //declares a state variable `text` to store the input text, initialized as an empty string.
  const [text, setText] = useState<string>("");
  //function to calculate text statistics (character count, word count, reading time) from an input string.
  const calculateStats = (inputText: string): TextStats => {
    //counts all characters in the input text.
    const characterCount = inputText.length;
    //calculates word count, trims leading/trailing spaces, then splits by one or more whitespace characters.

    const wordCount =
      inputText.trim() === "" ? 0 : inputText.trim().split(/\s+/).length;
    //estimates reading time based on 200 words per minute.
    const readingTime = wordCount / 200;
    return { characterCount, wordCount, readingTime }; //returns an object with the calculated stats.
  };
  //calculates the statistics for the current text state
  const stats = calculateStats(text);

  return (
    <div className="counter-container">
      <div className="counter-box">
        <h1 className="counter-heading">Character Counter</h1>
        <TextInput onTextChange={setText} />
        <StatsDisplay
          stats={stats}
          minWords={minWords}
          maxWords={maxWords}
          targetReadingTime={targetReadingTime}
        />
      </div>
    </div>
  );
};

export default CharacterCounter;
