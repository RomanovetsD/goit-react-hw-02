import React from 'react';
import PropTypes from 'prop-types';
import styles from './Publications.module.css';

const Publication = ({ publication, currentPage }) => (
  <article className={styles.publication}>
    <h1>
      {currentPage}.{publication.title}
    </h1>
    <p>{publication.text}</p>
  </article>
);

Publication.propTypes = {
  currentPage: PropTypes.number.isRequired,
  publication: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Publication;
