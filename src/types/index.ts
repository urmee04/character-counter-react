//TextInput component props
export interface TextInputProps {
  //required: gets called when text changes, passes the new text
  onTextChange: (text: string) => void;
  //optional: text shown when empty
  placeholder?: string;
  //optional: starting text value
  initialValue?: string;
}

//StatsDisplay interface and pops

export interface TextStats {
  characterCount: number;
  wordCount: number;
  readingTime: number; // in minutes
}

export interface StatsDisplayProps {
  stats: TextStats;
  showReadingTime?: boolean;
}
