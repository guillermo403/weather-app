<script setup lang="ts">
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { onMounted, watch, ref, computed } from 'vue'
import { useGeolocationStore } from '@/stores/geolocation'

const map = ref()

const geolocationStore = useGeolocationStore()
const coords = computed(() => geolocationStore.coords)

watch(
  () => coords.value,
  () => {
    map.value.setView(coords.value, 11)
    L.marker(coords.value).addTo(map.value)
  }
)

onMounted(() => {
  map.value = L.map('map', {
    center: coords.value,
    zoom: 11,
    minZoom: 1
  })
  L.tileLayer(
    'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
    {}
  ).addTo(map.value)
})
</script>

<template>
  <div id="map"></div>
</template>

<style scoped>
#map {
  width: 600px;
  height: 500px;
}
</style>
