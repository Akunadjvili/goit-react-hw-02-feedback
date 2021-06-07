import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <div className={styles.FeedbackOptions}>
        {options.map(option => {
          return (
            <button
              key={option}
              className={styles.FeedbackOptions__button}
              onClick={onLeaveFeedback}
              name={option}
            >
              {option}
            </button>
          );
        })}
      </div>
    );
  }
}

export default FeedbackOptions;
