import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css';

class Section extends Component {
  static defaultProps = { title: '(empty)' };
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.element),
  };
  render() {
    const { title, children } = this.props;

    return (
      <section className={styles.Section}>
        <h1 className={styles.Section__title}>{title}</h1>
        {children}
      </section>
    );
  }
}

export default Section;
