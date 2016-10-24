/* global describe, it, expect */
/* eslint no-unused-expressions: "off", require-jsdoc: "off"*/

import renderer from 'react-test-renderer';

import React from 'react';
import Artists from '..';

describe('<Artists />', () => {
  it('should set no-image url if artists array is empty', () => {
    const data = [{
      external_urls: {
        spotify: 'https://open.spotify.com/artist/3aQeKQSyrW4qWr35idm0cy',
      },
      followers: {
        href: null,
        total: 488487,
      },
      genres: ['pop'],
      href: 'https://api.spotify.com/v1/artists/3aQeKQSyrW4qWr35idm0cy',
      id: '3aQeKQSyrW4qWr35idm0cy',
      images: [],
      name: 'T-Pain',
      popularity: 78,
      type: 'artist',
      uri: 'spotify:artist:3aQeKQSyrW4qWr35idm0cy',
    }];

    const tree = renderer.create(
      <Artists artists={data} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render artists', () => {
    const data = [{
      external_urls: {
        spotify: 'https://open.spotify.com/artist/3aQeKQSyrW4qWr35idm0cy',
      },
      followers: {
        href: null,
        total: 488487,
      },
      genres: ['pop'],
      href: 'https://api.spotify.com/v1/artists/3aQeKQSyrW4qWr35idm0cy',
      id: '3aQeKQSyrW4qWr35idm0cy',
      images: [{
        height: 639,
        url: 'https://i.scdn.co/image/e54d88a2ba7ffdac8f6271de0c21d24b20b6a729',
        width: 640,
      }, {
        height: 320,
        url: 'https://i.scdn.co/image/ff86a8fae2633f504069c6ee24b8d63c216302c2',
        width: 320,
      }, {
        height: 160,
        url: 'https://i.scdn.co/image/9def66ba2fac6a56e390fd44249b78546c17ad36',
        width: 160,
      }],
      name: 'T-Pain',
      popularity: 78,
      type: 'artist',
      uri: 'spotify:artist:3aQeKQSyrW4qWr35idm0cy',
    }];

    const tree = renderer.create(
      <Artists artists={data} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
