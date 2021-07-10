import { createLocalVue, shallowMount } from '@vue/test-utils'
import ListItem from '@/components/ListItem.vue'
import Element from 'element-ui'

const localVue = createLocalVue()
localVue.use(Element);

const playerData = {
  "first_name": "Ike",
  "last_name": "Anigbogu",
  "like": false
}

describe('List Item component', () => {
  const wrapper = shallowMount(ListItem, {
    localVue,
    propsData: {
      item: playerData,
      index: 0
    }
  })
  it('name should be Ike', () => {
    expect(wrapper.find('.uniName').text()).toBe('Ike  Anigbogu')
  })

  it('text on like button shoule be "Like"', () => {
    expect(wrapper.find('.likeBtn').text()).toBe('Like')
  })

})