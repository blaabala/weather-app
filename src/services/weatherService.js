const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
const BASE_URL = 'https://api.openweathermap.org/data/2.5'


export const getCurrentWeather = async (city) => {
  const response = await fetch(`${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`)
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('City not found')
    } else {
      throw new Error('Network error')
    }
  }
  return response.json()
}

export const getForecast = async (city) => {
  const response = await fetch(`${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`)
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('City not found')
    } else {
      throw new Error('Network error')
    }
  }
  const data = await response.json();
  return data.list.filter(item => item.dt_txt.includes('12:00:00'))
}