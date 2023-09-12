import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { Coordinates } from '@/types'

export const useGeolocationStore = defineStore('geolocation', () => {
  const coords = ref<Coordinates>({ lat: 0, lng: 0 })

  const coordsArray = computed(() => Object.values(coords.value))

  const updateCoords = (newCoords: Coordinates) => {
    coords.value = newCoords
  }

  return { coords, updateCoords, coordsArray }
})
