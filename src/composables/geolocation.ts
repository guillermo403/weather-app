import { useGeolocationStore } from '@/stores/geolocation'

export const useGeolocation = async () => {
  if (!('navigator' in window) || !('geolocation' in window.navigator)) return { lat: 0, lon: 0 }

  const geolocationStore = useGeolocationStore()

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  }

  const success = (position: GeolocationPosition) => {
    const { coords } = position
    geolocationStore.updateCoords({ lat: coords.latitude, lng: coords.longitude })
  }

  const error = () => {}

  window.navigator.geolocation.getCurrentPosition(success, error, options)
}
