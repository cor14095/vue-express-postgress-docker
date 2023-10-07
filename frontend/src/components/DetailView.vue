
<template>
  <div class="grid grid-cols-1 w-full h-[40vh] overflow-y-auto rounded border-2 p-4">
    Lorem ipsum
  </div>
</template>

<script setup>

const { element } = defineProps({
  element: {
    required: true,
    type: String,
  }
})

</script>
