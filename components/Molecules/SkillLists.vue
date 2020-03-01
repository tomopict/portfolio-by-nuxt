<template>
  <section>
    <h3 class="font-semibold mb-3 lazy"><slot></slot></h3>
    <ul class="lg:flex lg:flex-wrap lazy">
      <li v-for="s in skillLists" :key="s.label" class="mb-3 lg:w-1/2">
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
import { createComponent } from '@vue/composition-api'

export default createComponent({
  name: 'SkillLists',
  props: {
    skillLists: {
      type: Array,
      required: true
    }
  }
})
</script>
<style lang="scss" scoped></style>
