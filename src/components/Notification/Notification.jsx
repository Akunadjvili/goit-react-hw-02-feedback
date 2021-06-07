import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Notification.module.css';

class Notification extends Component {
  static defaultProps = { message: '(empty)' };
  static propTypes = { message: PropTypes.string.isRequired };
  render() {
    const { message } = this.props;

    return (
      <div className={styles.Notification}>
        <p className={styles.Notification__title}>{message}</p>
      </div>
    );
  }
}

export default Notification;
