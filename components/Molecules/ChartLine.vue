<script lang="ts">
// import { onMounted, createComponent } from '@vue/composition-api'

// export default createComponent({
//   name: 'Chrtjs',
//   extends: Line,
//   props: {
//     chartdata: {
//       type: Object,
//       default: null
//     },
//     chartOptions: {
//       type: Object,
//       default: null
//     }
//   },
//   setup(props, context) {
//     onMounted(() => {
//       console.log(
//         'mounted!',
//         context.root.$vuechartjs.generateChart().methods.renderChart()
//       )
//       //  context.root.$vuechartjs.generateChart().methods.renderChart()(this.chartdata, this.chartOptions)
//     })
//   }
// })

import { Component, Prop, Mixins } from 'vue-property-decorator'
import Chart from 'chart.js'
import { Line, mixins } from 'vue-chartjs'

@Component({})
export default class LineChartComponent extends Mixins(
  Line,
  mixins.reactiveProp
) {
  @Prop({ default: {} }) chartData!: Chart.ChartData
  @Prop({ default: {} }) options?: Chart.ChartOptions

  public mounted() {
    this.renderChart(this.chartData, this.options)
  }
}
</script>
