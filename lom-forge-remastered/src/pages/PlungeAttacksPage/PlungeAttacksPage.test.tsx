/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: Component: src/pages/PlungeAttacksPage/PlungeAttacksPage.test.tsx

Created with;
$ npx generate-react-cli component PlungeAttacksPage --type=page

*/

import React from 'react'
import { shallow } from 'enzyme'
import PlungeAttacksPage from './PlungeAttacksPage'

const routeComponentPropsMock = {
  history: {
    location: {
      pathname: '/PlungeAttacksPage'
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  location: {} as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  match: {} as any,
}
describe('<PlungeAttacksPage />', () => {
  let component

  beforeEach(() => {
    component = shallow(<PlungeAttacksPage {...routeComponentPropsMock} />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
