
<template>
  <div class="grid grid-cols-1 w-full h-[40vh] overflow-y-auto rounded border-2 p-4">
    <pre>{{ selectedState }}</pre>
  </div>
</template>

<script setup>
import store from '../store';

const selectedState = computed(() => store.state.stateDetail)

</script>
