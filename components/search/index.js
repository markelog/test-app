import React, { Component, PropTypes } from 'react';

import search from './index.scss';

/**
 * Class representing a Search component
 * @extends Component
 */
class Search extends Component {
  /**
   * PropTypes
   * @static
   * @type {Object}
   */
  static propTypes = {

    /**
     * Will be called if component receives new data
     * @type {Function}
     */
    notify: PropTypes.func.isRequired,
  };

  /**
   * API url
   * @static
   * @type {String}
   */
  static url = 'https://api.spotify.com/v1/search?type=artist&limit=50';

  /**
   * Construct component
   * @param {Object} props - component props
   */
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.error = this.error.bind(this);
  }

  /**
   * Handle keyUp event
   * @param {Event} event - DOM event object
   */
  handleKeyUp(event) {
    this.search(event.target.value);
  }

  /**
   * Error handling
   * @param {*} error - any type of error entity which will be passed to `console.error` method
   */
  error(error) {
    /* eslint "no-console": "off" */
    console.error('Error', error);
  }

  /**
   * Access remote spotify API and call associated `notify` method
   * @param {String} text - text to pass to the remote API
   */
  search(text) {
    const url = `${Search.url}&q=${text}`;

    // Since only Chrome is supported
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        this.props.notify('search', data.artists.items);
      }).catch(this.error);
  }

  /**
   * Render everything
   * @return {JSX}
   */
  render() {
    return (
      <div className={search.search}>
        <input
          type="search"
          placeholder="Type something..."
          className={search.input}
          onKeyUp={this.handleKeyUp}
        />
      </div>
    );
  }
}

export default Search;
