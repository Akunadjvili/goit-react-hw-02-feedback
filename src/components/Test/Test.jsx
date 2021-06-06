import React from 'react';
import PropTypes from 'prop-types';
import styles from './Test.module.css';

const Test = props => {
  return <div className={styles.test}>{console.log(props)}</div>;
};
Test.defaultProps = {};

Test.propTypes = {
  test: PropTypes.string.isRequired,
};

export default Test;
