<template>
  <div class="navitem fixed top-0 right-0">
    <nav>
      <ul class="navitem_lists flex">
        <li class="navitem_list relative">
          <nuxt-link class="navitem_link text-center p-4 block relative" to="/"
            ><span class="relative">Top</span></nuxt-link
          >
        </li>
        <li class="navitem_list relative">
          <nuxt-link
            class="navitem_link text-center p-4 block relative"
            to="/about"
            ><span class="relative">About</span></nuxt-link
          >
        </li>
        <li class="navitem_list relative">
          <nuxt-link
            class="navitem_link text-center p-4 block relative"
            to="/qiita"
            ><span class="relative">Qiita</span></nuxt-link
          >
        </li>
        <li class="navitem_list relative">
          <nuxt-link
            class="navitem_link text-center p-4 block relative"
            to="/blog"
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
  &_list {
    color: #fff;
    overflow: hidden;
    width: 100px;
    position: relative;
  }
  &_link {
    &:hover {
      span {
        &:after {
          background: #1e9600; /* fallback for old browsers */
          background: -webkit-linear-gradient(
            to right,
            #ff0000,
            #fff200,
            #1e9600
          ); /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(
            to right,
            #ff0000,
            #fff200,
            #1e9600
          ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
          opacity: 1;
          width: 70px;
        }
        &:before {
          width: 70px;
        }
      }
    }
    span {
      &:after,
      &:before {
        transition: all 0.25s ease-in;
        content: '';
        display: inline-block;
        width: 30px;
        height: 1px;
        background: #efefef;
        bottom: -5px;
        left: 0;
        position: absolute;
      }
      &:after {
        opacity: 0;
      }
    }
  }
}
</style>
