//Import libraries and types
import React from "react";
import { type TextInputProps } from "../../types";
import "./TextInput.css";

//TextInput component with customizable area
export const TextInput: React.FC<TextInputProps> = ({
  onTextChange,
  placeholder = "Start typing...",
  initialValue = "",
}) => {
  return (
    <div className="text-input-container">
      <textarea
        className="text-area"
        placeholder={placeholder}
        defaultValue={initialValue}
        onChange={(e) => onTextChange(e.target.value)}
        rows={6}
      />
    </div>
  );
};
