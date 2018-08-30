import React from 'react'
import { shallow } from 'enzyme'
import TagIndex from '../../pages/tag'
import data from '../fixtures/data'

test('should render tag page correctly', () => {
  const wrapper = shallow(<TagIndex data={data.data} />)
  expect(wrapper).toMatchSnapshot()
})
