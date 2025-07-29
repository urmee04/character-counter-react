import { useState } from "react";
import "./App.css";
import { TextInput } from "./components/TextInput/TextInput";
import { StatsDisplay } from "./components/StatsDisplay/StatsDisplay";

function App() {
  //state to manage the text input
  const [text, setText] = useState("");

  //function to calculate statistics based on the current text
  const calculateStats = (text: string) => {
    //count all characters (including spaces)
    const characterCount = text.length;
    //count words (split by whitespace, handle empty string case)
    const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
    //average reading speed (words per minute)
    const wordsPerMinute = 200;
    //calculate reading time in minutes
    const readingTime = wordCount / wordsPerMinute;

    return {
      characterCount,
      wordCount,
      readingTime,
    };
  };

  //get current stats whenever text changes
  const stats = calculateStats(text);

  //handler for text changes from TextInput component
  const handleTextChange = (newText: string) => {
    setText(newText);
  };

  return (
    //main container with responsive max-width and padding
    <div className="max-w-2xl mx-auto p-4">
      {/*text input component with change handler */}
      <TextInput onTextChange={handleTextChange} />
      {/*stats display showing calculated statistics */}
      <StatsDisplay stats={stats} />
    </div>
  );
}

export default App;
