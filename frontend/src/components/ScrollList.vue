<template>
  <div>
    <div v-if="elements.length" class="grid grid-cols-1 w-full max-h-[40vh] overflow-y-auto rounded border-2 p-4">
      <div v-for="element of elements" :key="element" :element="element" 
        :class="{'bg-vue-green': store.state.highlitedStates.includes(element)}">
        <p class="hover:bg-green-200" @click="clickCount"> {{ element }}</p>
      </div>
    </div>
    <div v-if="!elements.length" class="grid grid-cols-1 w-full max-h-[40vh] overflow-y-auto rounded border-2 p-4 justify-center text-gray-600 p-8">
      There are no elements
    </div>
  </div>
</template>

<script setup>
import store from '../store';

const { elements } = defineProps({
  elements: {
    required: true,
    type: Array,
  }
})

const delay = 500 // ms to trigger double click.
var clicks = 0 // clicks counter
var timer = null // timer object

function selectElement(selectedState) {
  if (selectedState !== "") {
    store.dispatch('searchStateDetail', selectedState)
    store.dispatch('searchStateCounties', selectedState)
    store.dispatch('searchStateCountiesPopulation', selectedState)
  } else {
    store.commit('setStateDetails', [])
    store.commit('setStateCounties', [])
    store.commit('setStateCountiesPopulation', 0)
  }
}

// This is a weird function to determine if an element is single or double clicked
function clickCount(event) {
  clicks++;
  const selectedState = String(event.target.innerText)
  if (clicks === 1) {
    // Single click after 'delay' pass.
    timer = setTimeout(() => {
      selectElement(selectedState)
      clicks = 0
    }, delay);
  } else {
    // Double click in 'delay' span.
    clearTimeout(timer);
    store.commit('addDeleteHighlitedState', selectedState)
    clicks = 0;
  }
}

</script>