<script setup lang="ts">
import { useMouseFollower } from '@/composables/mouse'
import { ref, watch } from 'vue'

const enabled = ref<boolean>(true)
const { x, y } = useMouseFollower()

watch(
  () => enabled.value,
  () => document.body.classList.toggle('cursor-enabled')
)
</script>

<template>
  <div
    v-if="enabled"
    :style="{
      position: 'absolute',
      backgroundColor: '#44bd87',
      borderRadius: '50%',
      opacity: '0.6',
      pointerEvents: 'none',
      width: '32px',
      height: '32px',
      left: '-16px',
      top: '-16px',
      transform: `translate(${x}px, ${y}px)`,
      zIndex: '90'
    }"
  ></div>

  <!-- <button @click="enabled = !enabled">
    {{ !enabled ? 'Activar' : 'Desactivar' }} efecto del ratón
  </button> -->
</template>

<style scoped>
button {
  height: 3rem;
  padding-inline: 1rem;
  padding-block: 0.25rem;
  border: none;
  background-color: hsla(160, 100%, 37%, 1);
  &:active {
    transform: translateY(2px);
  }
}

.cursor-enabled {
  cursor: none;
}
</style>
