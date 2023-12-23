<template>
  <div class="root">
    <SideBar />
    <div class="w-full">
      <NavBar />
      <RouterView />
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import SideBar from "@/components/SideBar.vue";
import NavBar from "@/components/NavBar.vue";

export default defineComponent({
  name: 'App',
  components: { SideBar, NavBar }
})
</script>

<style scoped>

.root {
  height: 100vh;
  background-color: #fffcf2;
  display: flex;
  flex-direction: row;
}
</style>
