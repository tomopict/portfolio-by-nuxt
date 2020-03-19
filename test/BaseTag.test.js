import { shallowMount } from '@vue/test-utils'
import BaseTag from '@/components/Atmos/BaseTag'

const tag = 'JavaScript'
const url = 'https://qiita.com/tags/javascript'
const tagClass = 'inline-block'

const factory = () => {
  return shallowMount(BaseTag, {
    propsData: {
      tag,
      url,
      tagClass
    }
  })
}

describe('BaseTag', () => {
  it('rendering BaseTag', () => {
    const wrapper = factory()
    console.log(wrapper.html())
  })
})
