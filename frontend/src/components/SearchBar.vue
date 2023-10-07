<template>
  <input 
    type="text"
    v-model="keyword"
    class="rounded border-2 border-gray-200 w-full" 
    placeholder="Search states"
    @keyup="filterElements" 
  />
</template>

<script setup>
import store from '../store';
import { ref } from 'vue';

const keyword = ref("");

function filterElements() {
  if (keyword.value) {
    store.commit('setFilteredStates', store.state.states.filter(item => {
      return String(item).includes(keyword.value)
    }))
  } else {
    store.commit('setFilteredStates', store.state.states)
  }
}

</script>