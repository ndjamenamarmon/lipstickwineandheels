import React from 'react'
import { shallow } from 'enzyme'
import BlogPostTemplate from '../../templates/blog-post'
import data from '../fixtures/data'

test('should render blog post template correctly', () => {
  const wrapper = shallow(<BlogPostTemplate data={data.data} />)
  expect(wrapper).toMatchSnapshot()
})
