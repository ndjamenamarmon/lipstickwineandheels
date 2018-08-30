import React from 'react'
import { shallow } from 'enzyme'
import PageTemplate from '../../templates/page'
import data from '../fixtures/data'

test('should render page template correctly', () => {
  const wrapper = shallow(<PageTemplate data={data.data} />)
  expect(wrapper).toMatchSnapshot()
})
