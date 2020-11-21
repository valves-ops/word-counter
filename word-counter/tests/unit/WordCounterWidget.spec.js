import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import WordCounterWidget from '@/components/WordCounterWidget.vue'
// import vuetify from '../../src/plugins/vuetify'

describe('WordCounterWidget.vue', () => {
  let localVue
  let wrapper
  let vuetify
  beforeEach(() => {
    localVue = createLocalVue()
    vuetify = new Vuetify()
    wrapper = mount(WordCounterWidget, localVue, vuetify)
  })
  it('initializes with wordCount set to 0', () => {
    expect(wrapper.vm.$data.wordCount).toBe(0)
  })

  it('counts word', async () => {
    const textInput = wrapper.find('#text-input-field')
    textInput.element.value = 'I like programming!'
    textInput.trigger('input')
    wrapper.find('#count-button').trigger('click')
    expect(wrapper.vm.wordCount).toBe(3)
  })
})
