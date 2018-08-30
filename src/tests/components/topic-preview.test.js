import React from 'react'
import { shallow } from 'enzyme'
import TopicPreview from '../../components/topic-preview'
import data from '../fixtures/data'

test('should render article preview component correctly', () => {
  const wrapper = shallow(<TopicPreview topic={data.data.contentfulTag} />)
  expect(wrapper).toMatchSnapshot()
})
