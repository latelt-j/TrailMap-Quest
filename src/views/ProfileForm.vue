<template>
  <div class="flex items-center justify-center flex-col h-full">
    <label for="email" class="sub-title block text-sm font-medium leading-6 text-gray-900">Combien de km as-tu parcourus cette année ?</label>
    <div class="mt-5 w-1/3">
      <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="qu'est-ce que tu as dans le ventre...?" required>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: 'ProfileForm'
})
</script>

<style scoped>
.sub-title {
  font-size: 2rem;
  color: #606c38;
  font-family: 'Russo One', sans-serif;
}
.answer {
  font-size: 1.3rem;
}
</style>