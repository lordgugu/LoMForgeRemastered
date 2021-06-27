/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/Drawer/Drawer.test.tsx
*/

import React from 'react'
import { shallow } from 'enzyme'
import Drawer from './LoMDrawer'

describe('<Drawer />', () => {
  let component

  beforeEach(() => {
    component = shallow(<Drawer />)
  });

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
