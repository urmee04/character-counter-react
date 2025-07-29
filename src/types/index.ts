//TextInput component props
export interface TextInputProps {
  //required: gets called when text changes, passes the new text
  onTextChange: (text: string) => void;
  //optional: text shown when empty
  placeholder?: string;
  //optional: starting text value
  initialValue?: string;
}

//StatsDisplay interface and props

export interface TextStats {
  characterCount: number;
  wordCount: number;
  readingTime: number; // in minutes
}

export interface StatsDisplayProps {
  stats: TextStats;
  showReadingTime?: boolean;
  minWords?: number;
  maxWords?: number;
  targetReadingTime?: number;
}

//Caracter Counter Props
export interface CharacterCounterProps {
  minWords?: number;
  maxWords?: number;
  targetReadingTime?: number; // in minutes
}
