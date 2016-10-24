import React, { Component, PropTypes } from 'react';

import artists from './index.scss';
import noImage from './no-image.png';

/**
 * Class representing an artist list
 * @extends Component
 */
class Artists extends Component {
  /**
   * PropTypes
   * @static
   * @type {Object}
   */
  static propTypes = {
    artists: PropTypes.array.isRequired,
  };

  /**
   * Render artist list
   * @return {Array}
   */
  renderList() {
    const list = [];

    for (let i = 0; i < this.props.artists.length; i++) {
      const artist = this.props.artists[i];

      list.push(
        <li key={artist.id} className={artists.item}>
          {this.renderArtist(artist)}
        </li>
      );
    }

    return list;
  }

  /**
   * Render Artist image or no image picture
   * @param {Array} images - array of images object (see spotify API)
   * @return {JSX}
   */
  renderImage(images) {
    let url = noImage;

    if (images.length > 0) {
      url = images[0].url;
    }

    return <div style={{ backgroundImage: `url(${url})` }} className={artists.img} />;
  }

  /**
   * Render Artist element (image, link, caption)
   * @param {Object} artist - artist object (see spotify API)
   * @return {JSX}
   */
  renderArtist(artist) {
    const href = artist.external_urls.spotify;

    return (
      <a href={href} className={artist.link} alt={artist.name}>
        <figure className={artists.figure}>
          {this.renderImage(artist.images)}
          <figcaption className={artists.caption}>{artist.name}</figcaption>
        </figure>
      </a>
    );
  }

  /**
   * Render component
   * @return {JSX}
   */
  render() {
    return (
      <div className={artists.artists}>
        <ul className={artists.list}>
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

export default Artists;
