import { createLocalVue, shallowMount } from '@vue/test-utils'
import ListItem from '@/components/ListItem.vue'
import Element from 'element-ui'

const localVue = createLocalVue()
localVue.use(Element);

const uniData = {
  "domains":[
    "auckland.ac.nz",
    "aucklanduni.ac.nz"
  ],
  "like": false,
  "web_pages":[
    "http://www.auckland.ac.nz/"
  ],
  "name":"University of Example",
  "alpha_two_code":"NZ",
  "state-province":null,
  "country":"New Zealand"
}

describe('List Item component', () => {
  const wrapper = shallowMount(ListItem, {
    localVue,
    propsData: {
      university: uniData,
      index: 0
    }
  })
  it('name should be University of Example', () => {
    expect(wrapper.find('.uniName').text()).toBe('University of Example')
  })

  it('text on like button shoule be "Like"', () => {
    expect(wrapper.find('.likeBtn').text()).toBe('Like')
  })

})