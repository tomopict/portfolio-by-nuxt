import Vue from 'vue'
import CompositionApi from '@vue/composition-api'
import { shallowMount } from '@vue/test-utils'
import BaseInput from '@/components/Atmos/BaseInput'

Vue.use(CompositionApi)

const label = 'twitter'
const value = 'test is here'

const factory = () => {
  return shallowMount(BaseInput, {
    propsData: {
      label,
      value
    }
  })
}

describe('BaseInput', () => {
  it('rendering BaseInput', () => {
    const wrapper = factory()
    console.log(wrapper.html())
  })
  test('propsを受け取れること', () => {
    const wrapper = factory()
    expect(wrapper.props().label).toBe('twitter')
  })
  test('emitされること', () => {
    const wrapper = factory()

    wrapper.vm.$emit('foo')
    console.log(wrapper.vm.updateValue)
    wrapper.vm.updateValue({ target: { value: 'valueだよ' } })
    expect(wrapper.emitted('change-message')).not.toBeUndefined()
  })
})
