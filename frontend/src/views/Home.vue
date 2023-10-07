<template>
  <div class="container mx-auto px-4">
    <div class="flex flex-col p-8 justify-center">
      <SearchBar />

      <div class="flex flex-row gap-4 py-4">
        <div class="basis-1/4 overflow-auto">
          <ScrollList :elements="states"/>
        </div>
        <div class="basis-1/4 overflow-auto">
          <ScrollList :elements="filteredStates"/>
        </div>
        <div class="basis-1/2 overflow-auto">
          <DetailView />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import ScrollList from '../components/ScrollList.vue';
import DetailView from '../components/DetailView.vue';
import SearchBar from '../components/SearchBar.vue';
import store from '../store';

const states = computed(() => store.state.states)
const filteredStates = computed(() => store.state.filteredStates)

onMounted(() => {
  store.dispatch("searchStates")
})

</script>