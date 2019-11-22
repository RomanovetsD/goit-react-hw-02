/* import note-modules */
import React, { Component } from 'react';
import qs from 'query-string';
import PropTypes from 'prop-types';
import publications from '../../data/publications.json';

/* import component */
import Counter from '../Counter/Counter';
import Controls from '../Controls/Controls';
import Publication from '../Publication/Publication';

/* import CSS */
import styles from './Reader.module.css';

export default class Reader extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
      search: PropTypes.string.isRequired,
    }).isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
      replace: PropTypes.func.isRequired,
    }).isRequired,
  };

  // eslint-disable-next-line react/sort-comp
  state = {
    pageNumber: 3,
  };

  componentDidMount() {
    const { location, history } = this.props;
    const parsedQuery = qs.parse(location.search).item;
    if (
      parsedQuery < 1 ||
      parsedQuery > publications.length ||
      parsedQuery <= 0
    ) {
      history.replace({
        ...location,
        search: 'item=1',
      });
      return;
    }

    if (parsedQuery) {
      this.setState({
        pageNumber: Number(parsedQuery),
      });
    }
  }

  /* event handler */
  // eslint-disable-next-line react/sort-comp
  handleIncrement = () => {
    const { history } = this.props;
    const { pageNumber } = this.state;

    history.push({
      pathname: '/reader',
      search: `?item=${pageNumber + 1}`,
    });
    this.setState(prevState => ({ pageNumber: prevState.pageNumber + 1 }));
  };

  handleDecrement = () => {
    const { history } = this.props;
    const { pageNumber } = this.state;

    history.push({
      pathname: '/reader',
      search: `?item=${pageNumber - 1}`,
    });
    this.setState(prevState => ({ pageNumber: prevState.pageNumber - 1 }));
  };

  render() {
    const { pageNumber } = this.state;
    const { items } = this.props;
    const totalPublications = items.length;
    return (
      <div className={styles.reader}>
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          currentPage={pageNumber}
          lastPage={totalPublications}
        />
        <Counter lastPage={totalPublications} currentPage={pageNumber} />
        <Publication
          publication={items[pageNumber - 1]}
          currentPage={pageNumber}
        />
      </div>
    );
  }
}
