import { createLocalVue, mount } from '@vue/test-utils'
import Home from '@/components/Home.vue'
import Element from 'element-ui'

const localVue = createLocalVue()
localVue.use(Element)

describe('Home compnent', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Home, {
      localVue,
      data() {
        return {
          defaultDialog: true
        }
      },
      stubs: {
        NuxtLink: true
      }
    })
  })

  it('can see home page tile', () => {
    expect(wrapper.find('[data-test="title"]').text()).toContain('This is Home page')
  })

  it('Go to list page button is exist', () => {
    expect(wrapper.find('[data-test="goToListBtn"]').exists()).toBe(true)
  })

  it('Open dialog button is exist', () => {
    expect(wrapper.find('[data-test="openDialogBtn"]').exists()).toBe(true)
  })

  it('default dialog is open', () => {
    expect(wrapper.vm.defaultDialog).toBe(true)
    expect(wrapper.find('#defaultDialog').isVisible()).toBe(true)
  })

  it('defaultDialog change to false when user click close button, and change to true when click open button', async () => {
    const closebtn = wrapper.find('[data-test="closeBtn"]')
    await closebtn.trigger('click')
    
    expect(wrapper.vm.defaultDialog).toBe(false)

    const openbtn = wrapper.find('[data-test="openDialogBtn"]')
    await openbtn.trigger('click')
    
    expect(wrapper.vm.defaultDialog).toBe(true)
  })

})


