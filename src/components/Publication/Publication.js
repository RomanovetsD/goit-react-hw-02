import React from 'react';
import PropTypes from 'prop-types';
import styles from './Publications.module.css';

const Publication = ({ currentPublication, currentPage }) => (
  <article className={styles.publication}>
    <h2>
      {currentPage}.{currentPublication.title}
    </h2>
    <p>{currentPublication.text}</p>
  </article>
);

Publication.propTypes = {
  currentPublication: PropTypes.objectOf(PropTypes.string).isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Publication;
