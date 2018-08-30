import React from 'react'
import { shallow } from 'enzyme'
import TagTemplate from '../../templates/tag'
import data from '../fixtures/data'

test('should render tag template correctly', () => {
  const wrapper = shallow(<TagTemplate data={data.data} />)
  expect(wrapper).toMatchSnapshot()
})
