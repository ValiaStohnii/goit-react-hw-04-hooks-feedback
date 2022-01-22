import { useState } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = { good, neutral, bad };

  const onLeaveFeedback = name => {
    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = state => {
    const values = Object.values(state);
    let total = 0;
    for (let value of values) {
      total = total + value;
    }
    return total;
  };

  const countPositiveFeedbackPercentage = state => {
    let a = good;
    let total = countTotalFeedback(state);
    let b = (a * 100) / total;
    return b;
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={onLeaveFeedback} options={Object.keys(options)} />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback(options)}
          positivePercentage={countPositiveFeedbackPercentage(options)}
        />
      </Section>
    </div>
  );
}
