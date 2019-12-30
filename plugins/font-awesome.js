import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faStar } from '@fortawesome/free-solid-svg-icons'
import {
  faTwitter,
  faInstagram,
  faLine
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlus, faStar)
library.add(faTwitter, faInstagram, faLine)

Vue.component('fa-icon', FontAwesomeIcon)

Vue.config.productionTip = false
