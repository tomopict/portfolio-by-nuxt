<template>
  <div class="about m-auto">
    <section class="text-center text-lg mb-10">
      <img src="~/assets/img/avatar.png" alt="" class="about_img m-auto mb-2" />
      <p>Author: Tomo</p>
    </section>
    <section class="skills mt-6 m-auto">
      <SkillLists :skill-lists="state.skills" :class="'mb-8'"
        >Language</SkillLists
      >
      <SkillLists :skill-lists="state.fw" :class="'mb-8'">FrameWork</SkillLists>
    </section>
  </div>
</template>

<script lang="ts">
import { reactive, createComponent } from '@vue/composition-api'
import { AUTHOR_SKILL, AUTHOR_FW } from '~/constants/authordata'
import SkillLists from '@/components/Molecules/SkillLists.vue'

export default createComponent({
  name: 'About',
  components: {
    SkillLists
  },
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
