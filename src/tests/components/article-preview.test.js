import React from 'react'
import { shallow } from 'enzyme'
import ArticlePreview from '../../components/article-preview'
import data from '../fixtures/data'

test('should render article preview component correctly', () => {
  const wrapper = shallow(<ArticlePreview article={data.data.contentfulBlog} />)
  expect(wrapper).toMatchSnapshot()
})
