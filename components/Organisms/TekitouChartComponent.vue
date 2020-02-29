<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import Chart from 'chart.js'
import { Line, mixins } from 'vue-chartjs'

@Component({})
export default class LineChartComponent extends Mixins(
  Line,
  mixins.reactiveProp
) {
  // グラフ用のデータ
  private chartData: Chart.ChartData = {
    labels: ['1月', '2月', '3月', '4月', '5月'],
    datasets: [
      {
        type: 'line',
        label: '花粉だめーじ',
        data: [20, 10, 30, 40, 30, 20],
        fill: true,
        borderColor: '#AAFFAA'
      }
    ]
  }

  // 表示オプションなど(今回は空
  private chartOptions?: Chart.ChartOptions

  public mounted() {
    this.renderChart(this.chartData, this.chartOptions)
  }
}
</script>
