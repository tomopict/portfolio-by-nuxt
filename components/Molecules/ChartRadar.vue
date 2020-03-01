<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator'
import Chart from 'chart.js'
import { Radar, mixins } from 'vue-chartjs'

@Component({})
export default class RadarChartComponent extends Mixins(
  Radar,
  mixins.reactiveProp
) {
  @Prop({ default: {} }) chartData: Chart.ChartData
  @Prop({ default: {} }) options: Chart.ChartOptions

  public mounted() {
    this.renderChart(this.chartData, this.options)
  }
}
</script>
