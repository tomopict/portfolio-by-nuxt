<template>
  <div class="chart-container">
    <template v-if="chartType === 'line'">
      <ChartLine
        :chart-data="chartData"
        :options="chratOptions"
        :styles="chartStyles"
      />
    </template>
    <template v-if="chartType === 'radar'">
      <ChartRadar
        :chart-data="chartData"
        :options="chratOptions"
        :styles="chartStyles"
      />
    </template>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import { ChartData, ChartOptions } from 'chart.js'
import ChartLine from '~/components/Molecules/ChartLine.vue'
import ChartRadar from '~/components/Molecules/ChartRadar.vue'

export default createComponent({
  components: {
    ChartLine,
    ChartRadar
  },
  props: {
    chartType: {
      type: String
    },
    chartData: {
      type: Object as () => ChartData
    },
    chratOptions: {
      type: Object as () => ChartOptions
    }
  },
  setup() {
    // グラフ用のデータ
    const chartOption: ChartOptions = {
      // アスペクト比を固定しないように変更
      maintainAspectRatio: false
    }

    const chartStyles = {
      height: '100%',
      width: '100%'
    }

    return {
      chartOption,
      chartStyles
    }
  }
})
</script>
<style lang="scss">
.chart-container {
  /**
   * vue-chartjsで生成する<canvas>がabsoluteのため、
   * relateveを設定
   */
  position: relative;

  /**
   * chartStylesを設定しているので、
   * height/wightが有効になる
   */
  height: 40vh;
  width: 80vw;
  margin: 0 auto;
}
</style>
