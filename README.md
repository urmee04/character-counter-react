### Lab 9.2: States & Events

This lab is an interactive `character counter application` built with React and TypeScript. It allows users to input text and provides real-time statistics including character count, word count, and estimated reading time. The application also offers feedback on word count and reading time based on configurable targets.

#### Workplace Context

This application simulates a component for a content management system, designed to assist content writers in tracking their progress and adhering to content length and readability requirements. It demonstrates real-time feedback mechanisms essential for interactive web applications.

#### Objectives

**State Management**: Implements state management using the `useState` hook to handle text input and derived statistics.
**Event Handling**: Effectively handles user input events from the text area.
**UI Updates**: Builds components that dynamically update their UI in response to state changes.
**Component Communication (Callback Pattern)**: Utilizes the callback pattern for communication between parent (`CharacterCounter`) and child (`TextInput`) components.
**Responsive Interface**: Creates a user-friendly and responsive interface for tracking text statistics.

#### How to Clone and Run the Project

Follow these steps to get a local copy of the project up and running.

#### Prerequisites

- Node.js
- npm (comes with Node.js)

#### Cloning the Repository

To clone this repository, open terminal or command prompt and run the following command:

```bash
git clone https://github.com/urmee04/character-counter-react.git
cd character-counter
npm install
npm run dev
```

#### Project Structure

```bash
src/
  components/
    TextInput/
      TextInput.tsx       # Component for user text input
    StatsDisplay/
      StatsDisplay.tsx    # Component for displaying text statistics
    CharacterCounter/
      CharacterCounter.tsx # Main component orchestrating text input and stats display
  types/
    index.ts              # TypeScript type definitions
```

---

#### Reflection Questions:

**How did you handle state updates when the text changed?**

To handle state updates I used useState hook in the CharacterCounter component. The TextInput component uses an onChange event handler to capture the new value from the textarea and then calls the onTextChange prop, which is handleTextChange in the parent CharacterCounter component. handleTextChange then updates the text state using setText(newText). This causes the CharacterCounter component to re-render, recalculating stats and passing the updated stats to StatsDisplay.

**What considerations did you make when calculating reading time?**
The reading time calculation assumes an average reading speed of 200 words per minute. It handles the edge case of an empty string or no words by returning 0, preventing division by zero errors. The formatReadingTime helper function ensures the output is user-friendly (minutes:seconds) and correctly pads seconds with a leading zero if needed.

**How did you ensure the UI remained responsive during rapid text input?**
React's reconciliation process is efficient in updating the DOM. For rapid text input, the setText call triggers a re-render, but React only updates the necessary parts of the DOM. The calculations are simple and fast enough not to cause performance issues for typical text lengths. I used media queries that ensures the layout adapts gracefully to different screen sizes.

**What challenges did you face when implementing the statistics calculations?**
The core statistics (character and word count) are straightforward. The main consideration was handling the empty string case for word count to avoid incorrect calculations or errors. For reading time, the primary challenge was presenting it in a user-friendly format (minutes:seconds) rather than a raw decimal, which the formatReadingTime function addresses. Integrating the minWords, maxWords, and targetReadingTime for visual feedback was also a key addition to enhance the user experience.
