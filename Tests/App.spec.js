
import 'react-native'
import React from 'react'

import renderer from 'react-test-renderer'

import App from '../src/App'

describe('App', () => {
  test('renders as expected', () => {
    const tree = renderer.create(
      <App />
    ).toJSON()

    expect(tree).toMatchSnapshot();
  })
})
