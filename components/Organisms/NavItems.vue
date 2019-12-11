<template>
  <div class="navitem fixed top-0 right-0">
    <nav>
      <ul class="navitem_lists flex p-2">
        <li class="navitem_list p-2">
          <nuxt-link class="navitem_link p-2 block relative" to="/"
            ><span class="relative">Top</span></nuxt-link
          >
        </li>
        <li class="navitem_list p-2">
          <nuxt-link class="navitem_link p-2 block relative" to="/about"
            ><span class="relative">About</span></nuxt-link
          >
        </li>
        <li class="navitem_list p-2">
          <nuxt-link class="navitem_link p-2 block relative" to="/qiita"
            ><span class="relative">Qiita</span></nuxt-link
          >
        </li>
        <li class="navitem_list p-2">
          <nuxt-link class="navitem_link p-2 block relative" to="/blog"
            ><span class="relative">Blog</span></nuxt-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { reactive } from '@vue/composition-api'

export default Vue.extend({
  name: 'NavItem',
  setup() {
    const state = reactive({
      aa: ''
    })
    return { state }
  }
})
</script>
<style lang="scss" scoped>
.navitem {
  &_lists {
  }
  &_list {
    background-color: #fff;
  }
  &_link {
    &:hover {
    }
    span {
      &:after {
        content: '';
        display: inline-block;
        width: 100%;
        height: 1px;
        background: #000;
        bottom: -5px;
        left: 0;
        position: absolute;
      }
    }
  }
}
</style>
