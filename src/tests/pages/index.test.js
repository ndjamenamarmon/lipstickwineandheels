import React from 'react'
import { shallow } from 'enzyme'
import RootIndex from '../../pages/index'
import data from '../fixtures/data'

test('should render index page correctly', () => {
  const wrapper = shallow(<RootIndex data={data.data} />)
  expect(wrapper).toMatchSnapshot()
})
