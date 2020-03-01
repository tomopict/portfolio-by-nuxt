<template>
  <div class="about m-auto">
    <section class="text-center text-lg mb-10">
      <img src="~/assets/img/avatar.png" alt="" class="about_img m-auto mb-2" />
      <p>Author: Tomo</p>
    </section>
    <section class="skills mt-6 m-auto">
      <div class="lg:flex">
        <SkillLists :skill-lists="state.skills" :class="'mb-8 lg:w-2/3'"
          >Language</SkillLists
        >
        <ChartWrapper
          :chart-type="'radar'"
          :chart-data="chartAuthorData"
          :chrat-options="chartOptions"
          :chart-styles="chartStyles"
          :class="'lg:w-1/3'"
        ></ChartWrapper>
      </div>
      <div class="lg:flex">
        <SkillLists :skill-lists="state.fw" :class="'mb-8 lg:w-2/3'"
          >FrameWork</SkillLists
        >
        <ChartWrapper
          :chart-type="'radar'"
          :chart-data="chartFrameworkData"
          :chrat-options="chartOptions"
          :chart-styles="chartStyles"
          :class="'lg:w-1/3'"
        ></ChartWrapper>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { computed, reactive, createComponent } from '@vue/composition-api'

// chart
import { ChartData, ChartOptions } from 'chart.js'
import SkillLists from '@/components/Molecules/SkillLists.vue'
import ChartWrapper from '@/components/Organisms/ChartWrapper.vue'

import { AUTHOR_SKILL, AUTHOR_FW } from '~/constants/authordata'

export default createComponent({
  name: 'About',
  components: {
    SkillLists,
    ChartWrapper
  },
  setup() {
    const authorData = reactive({
      LanguageSkillStar: computed(() => AUTHOR_SKILL.map(s => s.star)),
      LanguageSkillLabel: computed(() => AUTHOR_SKILL.map(s => s.label)),
      FrameworkSkillStar: computed(() => AUTHOR_FW.map(s => s.star)),
      FrameworkSkillLabel: computed(() => AUTHOR_FW.map(s => s.label))
    })

    const chartStyles = {
      height: 'auto',
      width: '95%'
    }
    const chartAuthorData: ChartData = {
      labels: authorData.LanguageSkillLabel as Array<string>,
      datasets: [
        {
          label: 'Language',
          data: authorData.LanguageSkillStar as Array<number>,
          backgroundColor: 'rgba(255, 99, 132, .2)'
        }
      ]
    }

    const chartFrameworkData: ChartData = {
      labels: authorData.FrameworkSkillLabel as Array<string>,
      datasets: [
        {
          label: 'FrameWork',
          data: authorData.FrameworkSkillStar as Array<number>,
          backgroundColor: 'rgba(255, 99, 132, .2)'
        }
      ]
    }

    const chartOptions: ChartOptions = {
      scale: {
        ticks: {
          min: 0,
          max: 5,
          stepSize: 1
        }
      },
      maintainAspectRatio: false
    }

    const state = reactive({
      skills: AUTHOR_SKILL,
      fw: AUTHOR_FW
    })
    return {
      authorData,
      state,
      chartStyles,
      chartAuthorData,
      chartFrameworkData,
      chartOptions
    }
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
