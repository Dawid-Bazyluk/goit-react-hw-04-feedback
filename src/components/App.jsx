import { useState } from "react";

import Statistics from "./Statistics";
import Section from "./Section";
import FeedbackOptions from "./FeedbackOptions";

const App = ({ step = 1 }) => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleLeaveFeedback = (e) => {
    const { name } = e.currentTarget;
    if (name.toLowerCase() === "good") {
      setGood((prevGood) => prevGood + step);
    } else if (name.toLowerCase() === "neutral") {
      setNeutral((prevNeu) => prevNeu + step);
    } else if (name.toLowerCase() === "bad") {
      setBad((prevBad) => prevBad + step);
    }
  };

  const total = good + neutral + bad;

  const positivePercentage = () => {
    const percentage = total === 0 ? 0 : Math.round((good / total) * 100);
    return percentage;
  };

  return (
    <div>
      <Section title="Please leave feedback"></Section>
      <FeedbackOptions
        options={["good", "neutral", "bad"]}
        onLeaveFeedback={handleLeaveFeedback}></FeedbackOptions>

      <Section title="Statistics">
        {total === 0 ? (
          <p>There is no feedback</p>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage()}
          />
        )}
      </Section>
    </div>
  );
};

export default App;
