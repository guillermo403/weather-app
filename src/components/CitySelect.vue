<script setup lang="ts">
import WeatherApi from '@/services/weatherApi'
import { useGeolocationStore } from '@/stores/geolocation'
import type { City } from '@/types/city'
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

const geolocationStore = useGeolocationStore()

const citySelect = ref(null)

const input = ref('')
const cities = ref<City[]>([])
const showSelect = ref<boolean>(false)

const handleInput = async () => {
  if (input.value.trim() === '') return (showSelect.value = false)

  const response = await WeatherApi.getCoordsByCityName(input.value)
  cities.value = response

  if (cities.value.length < 1) return (showSelect.value = false)
  else return (showSelect.value = true)
}

onClickOutside(citySelect, () => (showSelect.value = false))
</script>

<template>
  <div :style="{ position: 'relative', height: '90%' }">
    <input @input="handleInput" autofocus placeholder="Bilbao" type="text" v-model="input" />
    <div class="city-select" v-if="showSelect" ref="citySelect">
      <div
        v-for="(city, index) in cities"
        :key="index"
        @click="
          () => {
            geolocationStore.updateCoords({ lat: city.lat, lng: city.lon })
            showSelect = false
          }
        "
      >
        <h1>{{ city.name }}</h1>
        <p>{{ city.country }} - {{ city.state }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '../assets/base.css';

input {
  height: 2.4rem;
  width: 15rem;
  padding-inline-start: 1rem;
  outline: none;
  background-color: transparent;
  border: 1px solid hsla(160, 100%, 37%, 1);
  color: hsla(160, 100%, 37%, 1);
  font-size: large;
}

.city-select {
  position: absolute;
  top: 2.5rem;
  background-color: rgb(68, 68, 68);
  width: 100%;
  height: 100%;
  overflow-y: auto;
}

.city-select > div {
  cursor: pointer;
  padding-block: 1rem;
  padding-inline: 1.5rem;
  border-block-end: 1px solid rgb(49, 49, 49);
  &:hover {
    background-color: #333;
  }
}
</style>
