const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
const BASE_URL = 'https://api.openweathermap.org/data/2.5'


export const getCurrentWeather = async (city) => {
  const response = await fetch(`${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`)
  if (!response.ok) {
    throw new Error('Failed to fetch weathers')
  }
  return response.json()
}

export const getForecast = async (city) => {
  const response = await fetch(`${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`)
  if (!response.ok) {
    throw new Error('Failed to fetch weathers')
  }
  const data = await response.json();
  console.log(data);
  return data.list.filter(item => item.dt_txt.includes('12:00:00'))
}