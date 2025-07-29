import { useState } from "react";

import "./App.css";
import { TextInput } from "./components/TextInput/TextInput";

function App() {
  const [text, setText] = useState("");
  return <TextInput onTextChange={(newText) => setText(newText)} />;
}

export default App;
