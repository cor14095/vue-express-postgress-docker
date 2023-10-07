export function setStates(state, states) {
  state.states = states || []
}

export function setFilteredStates(state, states) {
  state.filteredStates = states || []
}

export function setStateDetails(state, detail) {
  state.stateDetail = detail || []
}

export function setStateCounties(state, counties) {
  state.stateCounties = counties || []
}

export function setStateCountiesPopulation(state, population) {
  state.countyPopulation = population || 0
}