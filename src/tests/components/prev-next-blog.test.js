import React from 'react'
import { shallow } from 'enzyme'
import PrevNextBlog from '../../components/prev-next-blog'
import data from '../fixtures/data'

test('should render article preview component correctly', () => {
  const wrapper = shallow(
    <PrevNextBlog
      prevPost={data.data.allContentfulBlog.edges[0]}
      nextPost={data.data.allContentfulBlog.edges[1]}
    />
  )
  expect(wrapper).toMatchSnapshot()
})
