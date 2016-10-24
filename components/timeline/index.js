import React, { Component, PropTypes } from 'react';
import v4 from 'node-uuid';

import timeline from './index.scss';

/**
 * Class representing a timeline
 * @extends Component
 */
class Timeline extends Component {
  /**
   * PropTypes
   * @static
   * @type {Object}
   */
  static propTypes = {
    pm: PropTypes.array.isRequired,
    am: PropTypes.array.isRequired,
  };

  /**
   * Render timeline list
   * @param {Array} positions - first element "from what", second element "until what"
   * @param {Object} params - additional params
   * @return {Array}
   */
  renderItems(positions, params) {
    const list = [];

    let pointer = positions[0];
    const end = positions[1] + 1;

    do {
      let halftime = (<p className={timeline.halftime}>{pointer}:30</p>);

      if (pointer + 1 === end && params.cut === true) {
        halftime = '';
      }

      list.push(
        <li className={timeline.item} key={v4()}>
          <p className={timeline.pointer}>
            <span className={timeline.bold}>{pointer}:00</span>
            <span className={timeline.suffix}>{params.suffix}</span>
          </p>

          {halftime}
        </li>
      );

      pointer++;
    } while (pointer !== end);

    return list;
  }

  /**
   * Render unified timeline list
   * @return {Array}
   */
  renderList() {
    const am = this.renderItems(this.props.am, { suffix: 'am' });
    const pm = this.renderItems(this.props.pm, { suffix: 'pm', cut: true });

    return am.concat(pm);
  }

  /**
   * Render component
   * @return {JSX}
   */
  render() {
    return (
      <ul className={timeline.timeline}>
        { this.renderList() }
      </ul>
    );
  }
}

export default Timeline;
