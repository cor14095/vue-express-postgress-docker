
<template>
  <div>
    <div :if="selectedState.length"
      class="grid grid-cols-1 grid-rows-2 gap-1 overflow-auto w-full h-[40vh] overflow-y-auto rounded border-2 p-4">
      <div class="grid grid-rows-2 grid-cols-2 gap-2 h-full border-2 borde">
        <div class="flex flex-col hover:bg-green-200 p-2">
          <p class="mt-auto">State:</p>
          <p class="text-2xl">{{ selectedState.state || '------' }}</p>
        </div>
        <div class="flex flex-col hover:bg-green-200 p-2">
          <p class="mt-auto">Counties:</p>
          <p class="text-xl">{{ selectedState.counties || 0 }}</p>
        </div>
        <div class="flex flex-col hover:bg-green-200 p-2">
          <p class="mt-auto">Reported population:</p>
          <p class="text-xl" :class="{ 'text-red-600': stateCountiesPopulation !== selectedState.population }">{{ selectedState.population || 0 }}</p>
        </div>
        <div class="flex flex-col hover:bg-green-200 p-2">
          <p class="mt-auto">Sum of population:</p>
          <p class="text-xl" :class="{'text-red-600': stateCountiesPopulation !== selectedState.population}">{{ stateCountiesPopulation || 0 }}</p>
        </div>
      </div>
      <div class="grid grid-cols-1 w-full max-h-full overflow-y-auto">
        <div class="grid grid-cols-3 gap-1">
          <div class="flex border-b-2 border-r-2">
            <p class="m-auto">ID</p>
          </div>
          <div class="flex border-b-2 border-r-2 border-l-2">
            <p class="m-auto">County</p>
          </div>
          <div class="flex border-b-2 border-l-2">
            <p class="m-auto">Population</p>
          </div>
        </div>
        <div v-for="county of stateCounties" :key="county" :element="county" class="grid grid-cols-3 gap-1">
          <div class="flex border-b-2 border-r-2">
            <p class="m-auto">{{ county.id }}</p>
          </div>
          <div class="flex border-b-2 border-r-2 border-l-2">
            <p class="m-auto">{{ county.county }}</p>
          </div>
          <div class="flex border-b-2 border-l-2">
            <p class="m-auto">{{ county.population }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import store from '../store';

const selectedState = computed(() => store.state.stateDetail)
const stateCounties = computed(() => store.state.stateCounties)
const stateCountiesPopulation = computed(() => store.state.countyPopulation)

</script>
