import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import WordCounterWidget from '@/components/WordCounterWidget.vue'
import axios from 'axios'
import Vue from 'vue'

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

  it('counts words', async () => {
    const textInput = wrapper.find('#text-input-field')
    textInput.element.value = 'I like programming!'
    textInput.trigger('input')
    await Vue.nextTick()
    wrapper.find('#count-button').trigger('click')

    expect(wrapper.vm.$data.wordCount).toBe(3)
  })

  it('counts lorem ipsum', async () => {
    let wordCount = 1 + Math.floor(99 * Math.random())
    let response = await axios.get('http://www.randomtext.me/api/lorem/p-1/' + wordCount)
    let text = response.data.text_out.replace('<p>', '').replace('</p>', '')

    const textInput = wrapper.find('#text-input-field')
    textInput.element.value = text
    textInput.trigger('input')
    await Vue.nextTick()

    wrapper.find('#count-button').trigger('click')
    expect(wrapper.vm.wordCount).toBe(wordCount)
  })

  it('shall tell some text input is required', async () => {
    wrapper.find('#count-button').trigger('click')
    await Vue.nextTick()
    expect(wrapper.find('div.v-messages').text()).toBe('Type some text.')
  })
})
