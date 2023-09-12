import { GEO_URL, WEATHER_URL, api } from '@/config'
import type { Weather } from '@/types/weather'
import type { City } from '@/types/city'

export default class WeatherApi {
  static async getCoordsByCityName(city: string) {
    const foundedCities = await api.get(GEO_URL, {
      params: {
        q: city,
        limit: 5,
        lang: 'es'
      }
    })
    const response = foundedCities.data as City[]
    return response
  }

  static async getWeatherInfo(coords: number[]) {
    const weather = await api.get(WEATHER_URL, {
      params: {
        lat: coords[0],
        lon: coords[1]
      }
    })
    return weather.data as Weather
  }
}
