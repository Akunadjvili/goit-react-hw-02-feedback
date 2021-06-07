import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

class Statistics extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };
  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <div className={styles.Statistic}>
        <ul className={styles.Statistic__data}>
          <li className={styles.Statistic__item}>Good: {good}</li>
          <li className={styles.Statistic__item}>Neutral: {neutral}</li>
          <li className={styles.Statistic__item}>Bad: {bad}</li>
          <li className={styles.Statistic__item}>Total: {total}</li>
          <li className={styles.Statistic__item}>
            Positive feedback: {positivePercentage}%
          </li>
        </ul>
      </div>
    );
  }
}

export default Statistics;
