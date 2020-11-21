import { mount } from '@vue/test-utils'
import WordCounterWidget from '@/components/WordCounterWidget.vue'

describe('WordCounterWidget.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(WordCounterWidget)
  })
  it('initializes with wordCount set to 0', () => {
    expect(wrapper.vm.$data.wordCount).toBe(0)
  })
})
