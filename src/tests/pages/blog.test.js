import React from 'react'
import { shallow } from 'enzyme'
import BlogIndex from '../../pages/blog'
import data from '../fixtures/data'

test('should render blog page correctly', () => {
  const wrapper = shallow(<BlogIndex data={data.data} />)
  expect(wrapper).toMatchSnapshot()
})
