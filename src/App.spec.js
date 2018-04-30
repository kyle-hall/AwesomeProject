
/**
 * @jest-environment node
 */

import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

import App from './App'
import Home from './Screens/Home'

Enzyme.configure({adapter: new Adapter()})

describe('App', () => {

  let app

  beforeEach(() => {
    app = shallow(<App />)
  })

  test('renders as expected', () => {
    expect(app).toBeTruthy()
  })
})
