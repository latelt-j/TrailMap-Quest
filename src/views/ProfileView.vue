<template>
    <div class="h-full">
      <ProfileForm />
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import ProfileForm from "@/views/ProfileForm.vue";

export default defineComponent({
  name: 'ProfileView',
  components: { ProfileForm }
})
</script>


<style scoped>
</style>
