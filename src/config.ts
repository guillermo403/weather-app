import axios from 'axios'

export const API_KEY = 'a865a5090b52802b05698ba9c1a0301e'
const BASE_URL = `https://api.openweathermap.org`

export const WEATHER_URL = '/data/2.5/weather'
export const GEO_URL = '/geo/1.0/direct'

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  params: {
    appid: API_KEY
  }
})
