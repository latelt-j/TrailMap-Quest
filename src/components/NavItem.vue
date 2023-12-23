<template>
  <RouterLink class="nav-item" :class="{ 'is-active': isActive }" to="">
    <span>{{ emoji }}</span>
    <span class="ml-2 nav-label">{{ label }}</span>
  </RouterLink>
</template>

<script lang="ts">
import {RouterLink} from "vue-router";
import {defineComponent} from "vue";
export default defineComponent({
  name: 'NavItem',
  components: { RouterLink },
  props: {
    label: {
      type: String,
      default: ''
    },
    emoji: {
      type: String,
      default: ''
    },
    route: {
      type: String,
      default: ''
    }
  },
  computed: {
    isActive() {
      console.log(this.$route);
      return this.$route.name === this.label;
    }
  }
})
</script>

<style scoped lang="css">
.is-active {
  padding: 10px 20px;
  border-radius: 22px;
  background-color: #606c38;
  color: #fefae0 !important;
  font-style: initial;
}
.nav-item {
  color: #283618;
  font-size: 1.2rem;
  font-family: 'Russo One', sans-serif;
}
@media (max-width: 1024px) {
  .nav-label {
    display: none;
  }
  .is-active {
    display: flex;
    width: 35px;
    height: 35px;
    border-radius: 25px;
    padding: 5px;
    align-items: center;
    justify-content: center;
    background-color: #606c38;
    color: #fefae0 !important;
    font-style: initial;
  }
}
</style>