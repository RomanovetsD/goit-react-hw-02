/* import note-modules */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* import component */
import Counter from '../Counter/Counter';
import Controls from '../Controls/Controls';
import Publication from '../Publication/Publication';

/* import CSS */
import styles from './Reader.module.css';

export default class Reader extends Component {
  static propTypes = {
    pageNumber: PropTypes.number,
    items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  };

  static defaultProps = {
    pageNumber: 3,
  };

  state = {
    pageNumber: this.props.pageNumber,
  };

  /* event handler */

  handleIncrement = () => {
    this.setState(prevState => ({
      pageNumber: prevState.pageNumber + 1,
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      pageNumber: prevState.pageNumber - 1,
    }));
  };

  render() {
    const { pageNumber } = this.state;
    const { items } = this.props;
    return (
      <div className={styles.reader}>
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          currentPage={pageNumber}
          lastPage={items.length}
        />
        <Counter lastPage={items.length} currentPage={pageNumber} />
        <Publication
          currentPublication={items[pageNumber - 1]}
          currentPage={pageNumber}
        />
      </div>
    );
  }
}
