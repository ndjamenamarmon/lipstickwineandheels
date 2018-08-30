import React from 'react'
import { shallow } from 'enzyme'
import Navigation from '../../components/navigation'

test('should render navigation component correctly', () => {
  const wrapper = shallow(<Navigation />)
  expect(wrapper).toMatchSnapshot()
})
