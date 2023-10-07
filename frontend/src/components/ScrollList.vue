<template>
  <div>
    <div v-if="elements.length" class="grid grid-cols-1 w-full max-h-[40vh] overflow-y-auto rounded border-2 p-4">
      <div v-for="element of elements" :key="element" :element="element">
        <p class="hover:bg-green-200" @click="selectElement"> {{ element }}</p>
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

function selectElement(e) {
  const selectedDtate = String(e.target.innerText)
  if (selectedDtate !== "") {
    store.dispatch('searchStateDetail', selectedDtate)
  } else {
    store.commit('setStateDetails', [])
  }
}

</script>