<template>
  <div class="bg-stone-100 w-[80vw] h-[60vh] flex m-auto rounded border-2 border-vue-green grid grid-cols-2">
    <div class="flex">
      <div class="w-[70%] h-[70%] m-auto grid grid-rows-3">
        <div class="flex">
          <p class="text-8xl font-bold text-vue-blue mt-auto mb-auto pl-4">404</p>
        </div>
        <div class="flex">
          <div class="mt-auto mb-auto pl-4">
            <p class="text-vue-green text-2xl">Seems like you found Zoro!</p>
            <p class="text-vue-blue text-2xl font-bold">This is bad, you might be lost.</p>
          </div>
        </div>
        <div class="flex">
            <div
              class="flex mt-auto mb-auto ml-4 h-12 focus:outline-none text-white bg-vue-green hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-xl">
              <router-link :to="{ name: 'home' }" class="m-auto w-full h-full px-6 pt-2">
                Let's go Home!
              </router-link>
            </div>
        </div>
      </div>
    </div>
    <div class="bg-vue-green flex">
      <img src="../assets/lostZoro.png" class="m-w-full h-auto m-auto" alt="Lost Zoro" />
    </div>
  </div>
</template>