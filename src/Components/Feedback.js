import React from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    const name = e.target.name;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = state => {
    const values = Object.values(state);
    let total = 0;
    for (let value of values) {
      total = total + value;
    }
    return total;
  };

  countPositiveFeedbackPercentage = state => {
    let a = this.state.good;
    let total = this.countTotalFeedback(state);
    let b = (a * 100) / total;
    return b;
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            key={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
            options={Object.keys(this.state)}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback(this.state)}
            positivePercentage={this.countPositiveFeedbackPercentage(this.state)}
          />
        </Section>
      </div>
    );
  }
}
export default Feedback;
