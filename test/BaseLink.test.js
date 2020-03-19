import { mount, RouterLinkStub } from '@vue/test-utils'
import BaseLink from '@/components/Atmos/BaseLink'

const link = 'https://www.google.com/'
const factory = () => {
  return mount(BaseLink, {
    propsData: {
      link
    },
    stubs: {
      NuxtLink: RouterLinkStub
    }
  })
}

describe('BaseLink', () => {
  it('rendering BaseLink', () => {
    const wrapper = factory()
    console.log(wrapper.html())
  })
  test('linkprop', () => {
    const wrapper = factory()
    expect(wrapper.find(RouterLinkStub).props().to).toBe(
      'https://www.google.com/'
    )
  })
})
