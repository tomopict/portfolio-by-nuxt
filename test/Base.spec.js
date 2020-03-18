import { shallowMount } from '@vue/test-utils'
import BaseIcon from '@/components/Atmos/BaseIcon'

const name = 'twitter'
const icotype = 'fab'

const factory = propsData => {
  return shallowMount(BaseIcon, {
    propsData: {
      name,
      icotype,
      ...propsData
    }
  })
}

describe('BaseIcon', () => {
  it('renders a BaseIcon', () => {
    const wrapper = factory()
    console.log(wrapper.html())
  })
  test('is a Vue instance', () => {
    const wrapper = factory()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
