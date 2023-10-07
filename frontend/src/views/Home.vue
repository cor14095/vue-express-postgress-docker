<template>
  <div class="container mx-auto px-4">
    <div class="flex flex-col p-8 justify-center">
      <input type="text" class="rounded border-2 border-gray-200 w-full" placeholder="Search states" />

      <div class="flex flex-row gap-4 py-4">
        <div class="basis-1/4 overflow-auto">
          <ScrollList :elements="states"/>
        </div>
        <div class="basis-1/4 overflow-auto">
          <ScrollList :elements="states"/>
        </div>
        <div class="basis-1/2 overflow-auto">
          <DetailView :element="selectedState"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axiosClient from '../axiosClient.js'
import ScrollList from '../components/ScrollList.vue';
import DetailView from '../components/DetailView.vue';

const states = ref([]);
const selectedState = ""

onMounted(async () => {
  const response = await axiosClient.get('/states')
  states.value = response.data.rows
})

</script>