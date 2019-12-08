import dayjs from 'dayjs'
import 'dayjs/locale/ja'

import relativeTime from 'dayjs/plugin/relativeTime'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
import weekday from 'dayjs/plugin/weekday'

dayjs.locale('ja')
dayjs.extend(weekday)
dayjs.extend(relativeTime)
dayjs.extend(LocalizedFormat)

export default (context, inject) => {
  context.$dayjs = dayjs
  inject('dayjs', dayjs)
}
