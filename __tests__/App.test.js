import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';

it('works', () => {
  expect(1).toBe(1);
});

describe('<App />', () => {
  it('has 2 child', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(2);
  });
});