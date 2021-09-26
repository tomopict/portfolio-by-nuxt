import Vue from 'vue'
import Vuex from 'vuex'

import { getModule } from 'vuex-module-decorators'
import { Qiita } from '@/store/modules/qiita'

Vue.use(Vuex)

export type State = {
  qiita: Qiita
}

export const store = new Vuex.Store<State>({
  modules: {
    qiita: Qiita
  }
})

export const qiitaModule = getModule(Qiita, store)
