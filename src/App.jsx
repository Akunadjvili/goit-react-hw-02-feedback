import React, { Component } from 'react';

import Section from './components/Section';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notification';

import styles from './App.module.css';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateFeedback = event => {
    const { name } = event.currentTarget;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    return values.reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const positive = this.state['good'];
    return Math.round((positive / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const options = Object.keys(this.state);
    return (
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.updateFeedback}
        />
        <h2 className={styles.App__title}>Statistics</h2>
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message={'No feedback given'} />
        )}
      </Section>
    );
  }
}

export default App;
