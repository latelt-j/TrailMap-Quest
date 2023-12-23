<template>
  <div class="nav-bar">
    {{ currentRouteName }}
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: 'NavBar',
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  },
})
</script>

<style scoped>
.nav-bar {
  height: 51px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 20px;
  color: #606c38;
  font-size: 1.2rem;
  font-family: 'Russo One', sans-serif;
  border-bottom: 1px solid #606c38;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 1px 6px;
}
</style>