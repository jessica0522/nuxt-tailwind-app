import { createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'
import List from '@/components/List.vue'
import Element from 'element-ui'

const localVue = createLocalVue()
localVue.use(Element)
localVue.use(Vuex)

describe('List compnent', () => {
  //mock up mutations
  const mutations = {
    'list/setLists': jest.fn(),
    'list/changeListLike': jest.fn()
  }
  it('when has university list in store', async () => {
    //mock up has value getters
    const getters = {
      'list/getLists': () => [
        {
          "first_name": "Ike",
          "last_name": "Anigbogu",
          "like": false
        }
      ]
    }

    const store = new Vuex.Store({
      getters,
      mutations
    })

    //spy on method changeLike
    const changeLike = jest.spyOn(List.methods, 'changeLike')

    const wrapper = mount(List, {
      localVue,
      store,
      stubs: {
        NuxtLink: true
      }
    })
    //the computed list is equal to list in store
    expect(wrapper.vm.lists).toEqual(getters['list/getLists']())

    //the text like button is 'Like'
    const likeBtn = wrapper.find('li button')
    expect(likeBtn.text()).toBe('Like')

    //call method changeLike when click on the button
    await likeBtn.trigger('click')
    expect(changeLike).toHaveBeenCalled()
  })

  it('when no university list in store', async () => {
    //mock up has value getters
    const getters = {
      'list/getLists': () => []
    }

    const store = new Vuex.Store({
      getters,
      mutations
    })

    const queryList = jest.spyOn(List.methods, 'queryList')

    const wrapper = mount(List, {
      localVue,
      store,
      stubs: {
        NuxtLink: true
      }
    })

    //call methos queryList
    expect(queryList).toHaveBeenCalled()
  })

})
