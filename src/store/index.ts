import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import _ from 'lodash'
import { CompanieState } from './types'

Vue.use(Vuex)

const urlApi = '/api/companies'

export default new Vuex.Store({
  state: {
    movedItem: {},
    initCompanies: [] as CompanieState[],
    companies: [] as CompanieState[][]
  },
  mutations: {
    moveItem (state) {
      const item = state.companies[0].pop()
      if (item) {
        state.movedItem = item
        if (state.companies.length > 1) {
          state.companies[1].push(item)
        } else {
          state.companies.push([item])
        }
      }
    },
    setInitCompanies (state, payload) {
      state.initCompanies = _.clone(payload)
      if (state.companies.length === 0) {
        state.companies.push(payload)
      } else {
        state.companies[0] = payload
      }
    }
  },
  actions: {
    async setInitCompanies (state) {
      const res = await axios
        .get(urlApi)
        .then(res => res.data[0].companies)
        .catch(err => err)
      state.commit('setInitCompanies', res)
    },
    moveItem (state) {
      state.commit('moveItem', state)
    }
  },
  getters: {
    getMovedItem: state => state.movedItem,
    getCompanies: (state) => state.companies,
    getInitCompanies: state => state.initCompanies
  }
})
