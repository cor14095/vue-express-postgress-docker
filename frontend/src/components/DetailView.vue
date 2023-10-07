
<template>
  <div class="grid grid-cols-1 w-full h-[40vh] overflow-y-auto rounded border-2 p-4">
    <pre>{{ selectedState }}</pre>
    <pre>{{ stateCounties }}</pre>
    <pre>{{ stateCountiesPopulation }}</pre>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import store from '../store';

const selectedState = computed(() => store.state.stateDetail)
const stateCounties = computed(() => store.state.stateCounties)
const stateCountiesPopulation = computed(() => store.state.countyPopulation)

</script>
