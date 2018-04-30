
/**
 * @jest-environment node
 */

import React from "react"
import { ScrollView } from 'react-native'
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

import Home from './Home'

Enzyme.configure({adapter: new Adapter()})

describe('Home Screen', () => {
  let homeScreen

  beforeEach(() => {
    homeScreen = shallow(<Home />)
  })

  test('should render without crashing', () => {
    expect(homeScreen).toBeTruthy()
  })

  test('should contain a scroll view for content', () => {
    expect(homeScreen.find(ScrollView).length).toEqual(3)
  })
})