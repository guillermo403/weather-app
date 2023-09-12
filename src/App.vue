<script setup lang="ts">
import Home from './Home.vue'
import MouseFollower from './components/MouseFollower.vue'
import { useGeolocation } from './composables/geolocation'
useGeolocation()
</script>

<template>
  <MouseFollower />
  <Home />
</template>
