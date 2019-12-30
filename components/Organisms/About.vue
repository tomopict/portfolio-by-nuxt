<template>
  <div class="about m-auto">
    <section class="text-center text-lg mb-10">
      <img src="~/assets/img/avatar.png" alt="" class="about_img m-auto mb-2" />
      <p>Author: Tomoki Nakama</p>
    </section>
    <section class="skills lg:w-1/2 mt-6 m-auto">
      <section class="mb-8">
        <h3 class=" font-semibold mb-3">Language</h3>
        <ul class="lg:flex lg:flex-wrap">
          <li v-for="s in state.skills" :key="s.label" class="mb-3 lg:w-1/2">
            <h4>{{ s.label }}</h4>
            <div class="about-star flex">
              <span v-for="n in s.star" :key="n">
                <base-icon :name="'star'" :style="{ color: 'orange' }"
              /></span>
            </div>
            <p class=" text-sm lg:w-11/12">
              {{ s.term }}<br />
              {{ s.text }}
            </p>
          </li>
        </ul>
      </section>
      <section>
        <h3 class=" font-semibold mb-3">FrameWork</h3>
        <ul class="lg:flex lg:flex-wrap">
          <li v-for="s in state.fw" :key="s.label" class="mb-3 lg:w-1/2">
            <h4>{{ s.label }}</h4>
            <div class="about-star flex">
              <span v-for="n in s.star" :key="n">
                <base-icon :name="'star'" :style="{ color: 'orange' }"
              /></span>
            </div>
            <p class=" text-sm lg:w-11/12">
              {{ s.term }}<br />
              {{ s.text }}
            </p>
          </li>
        </ul>
      </section>
    </section>
  </div>
</template>

<script lang="ts">
import { reactive, createComponent } from '@vue/composition-api'
import { AUTHOR_SKILL, AUTHOR_FW } from '~/constants/skill'

export default createComponent({
  name: 'About',
  setup() {
    const state = reactive({
      skills: AUTHOR_SKILL,
      fw: AUTHOR_FW
    })
    return { state }
  }
})
</script>

<style scoped lang="scss">
.about {
  .skills {
    > section {
      flex-basis: 48%;
    }
  }
  &_img {
    width: 120px;
    height: 120px;
    border: 3px solid #fff;
    border-radius: 50%;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  }
}
</style>
