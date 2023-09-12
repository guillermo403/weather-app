<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import MapFrame from './components/MapFrame.vue'
import CitySelect from './components/CitySelect.vue'
</script>

<template>
  <main>
    <section class="weather-section">
      <CitySelect />
    </section>

    <section class="map-section">
      <MapFrame />
    </section>
  </main>
</template>

<style scoped>
main {
  display: grid;
  grid-auto-flow: column;
  column-gap: 1rem;
  width: 100%;
}
.weather-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid #222;
  padding: 2rem;
  width: auto;
}

@media (width < 1100px) {
  main {
    grid-auto-flow: row;
    row-gap: 1rem;
  }
}
</style>
