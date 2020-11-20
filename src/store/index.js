import Vue from 'vue'
import Vuex from 'vuex'

import { dentist } from './dentist.module'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        dentist
    }
})