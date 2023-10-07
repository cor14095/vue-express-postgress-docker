import axiosClient from '../axiosClient';

export function searchStates({ commit }) {
  axiosClient.get('/states')
    .then(({ data }) => {
      commit('setStates', data.rows)
      commit('setFilteredStates', data.rows)
  })
}

export function searchStateDetail({ commit }, state) {
  axiosClient.get(`/states/${state}`)
    .then(({ data }) => {
      commit('setStateDetails', data.detail)
    })
}

export function searchStateCounties({ commit }, state) {
  axiosClient.get(`/states/${state}/detail`)
    .then(({ data }) => {
      commit('setStateCounties', data.stateCounties)
    })
}

export function searchStateCountiesPopulation({ commit }, state) {
  axiosClient.get(`/states/${state}/detail/sum`)
    .then(({ data }) => {
      commit('setStateCountiesPopulation', data.populationSum)
    })
}