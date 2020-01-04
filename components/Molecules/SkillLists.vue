<template>
  <section>
    <h3 class="font-semibold mb-3"><slot></slot></h3>
    <ul class="lg:flex lg:flex-wrap">
      <li v-for="s in state.lists" :key="s.label" class="mb-3 lg:w-1/2 lazy">
        <h4>{{ s.label }}</h4>
        <div class="about-star flex">
          <span v-for="n in s.star" :key="n">
            <base-icon
              :icotype="'fas'"
              :name="'star'"
              :style="{ color: 'orange' }"
          /></span>
        </div>
        <p class=" text-sm lg:w-11/12">
          {{ s.term }}<br />
          {{ s.text }}
        </p>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { createComponent, reactive } from '@vue/composition-api'

export default createComponent({
  name: 'SkillLists',
  props: {
    skillLists: {
      type: Object,
      required: true
    }
  },
  setup({ skillLists }) {
    const state = reactive({
      lists: skillLists
    })
    return { state }
  }
})
</script>
<style lang="scss" scoped></style>
