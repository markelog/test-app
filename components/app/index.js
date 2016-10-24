import React, { Component } from 'react';

import app from './index.scss';

import Artists from '../artists';
import Search from '../search';

/**
 * Class representing an App
 * @extends Component
 */
class App extends Component {
  /**
   * Construct component
   * @param {Object} props - component props
   */
  constructor(props) {
    super(props);

    this.state = {
      search: [],
    };

    this.notify = this.notify.bind(this);
  }

  /**
   * Implementing mediator design pattern in order to communicate with
   * child components without flux architecture
   * @param {String} name - name of the component
   * @param {*} data - component associated data
   */
  notify(name, data) {
    this.setState({
      [name]: data,
    });
  }

  /**
   * Render Everything
   * @return {JSX}
   */
  render() {
    return (
      <div className={app.app}>
        <Search notify={this.notify} />
        <Artists artists={this.state.search} />
      </div>
    );
  }
}

export default App;
