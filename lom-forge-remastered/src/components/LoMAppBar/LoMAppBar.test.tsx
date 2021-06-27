/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/LoMAppBar/LoMAppBar.test.tsx
*/

import React from 'react'
import { shallow } from 'enzyme'
import LoMAppBar from './LoMAppBar'

describe('<LoMAppBar />', () => {
  let component

  beforeEach(() => {
    component = shallow(<LoMAppBar />)
  });

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
