import { ref, onMounted, onUnmounted } from 'vue'

export const useMouseFollower = () => {
  const x = ref(0)
  const y = ref(0)

  const handleMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event

    x.value = clientX
    y.value = clientY
  }

  onMounted(() => window.addEventListener('mousemove', handleMouseMove))
  onUnmounted(() => window.removeEventListener('mousemove', handleMouseMove))

  return { x, y }
}
