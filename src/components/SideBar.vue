<template>
    <header class="nav">
      <h1 class="logo mb-5">🏃‍♂️TrailMap Quest</h1>
      <NavItem v-for="item in navItems" :key="item.label" :label="item.label" :emoji="item.emoji" :route="item.route "/>
    </header>
</template>

<script lang="ts">
import NavItem from "@/components/NavItem.vue";
import {defineComponent} from "vue";
export default defineComponent({
  name: 'SideBar',
  components: { NavItem },
  data() {
    return {
      navItems: [
        { label: 'profile', emoji: '🫀', route: '/' }
      ]
    }
  }
})
</script>

<style scoped>
.logo {
  color: #283618;
  font-size: 1.4rem;
  font-family: 'Russo One', sans-serif;
  padding: 0px 20px;
}
.nav {
  padding: 1rem;
  width: 22rem;
  border-right: 1px solid #606c38;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 1px 6px;
}
@media (max-width: 1024px) {
  .nav {
    padding: 1rem;
    width: 5rem;
    border-right: 1px solid #606c38;
  }
  .logo {
    display: none;
  }
}
</style>