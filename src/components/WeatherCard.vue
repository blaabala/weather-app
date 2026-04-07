<template>
  <div class="weather-card card p-4 mb-4">
    <div class="row">
      <div class="col-12 col-md-6">
        <h2>{{ weather.name }}, {{ weather.sys.country }}</h2>
        <h1 class="display-1">{{ displayTemp }}</h1>
        <p class="text-capitalize">{{ weather.weather[0].description }}</p>
        <img :src="`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`" :alt="weather.weather[0].description" />
      </div>
      <div class="col-12 col-md-6">
        <div class="details mt-3">
            <p>Feels like: {{ isCelsius ? Math.round(weather.main.feels_like) + '°C' : Math.round(weather.main.feels_like * 9/5 + 32) + '°F' }}</p>
            <p>Humidity: {{ weather.main.humidity }}%</p>
            <p>Wind: {{ weather.wind.speed }} m/s</p>
            <p>Min: {{ Math.round(weather.main.temp_min) }}°C / Max: {{ Math.round(weather.main.temp_max) }}°C</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CWeatherCard',
  props: {
    weather: {
      type: Object,
      required: true
    },
    isCelsius: { type: Boolean, required: true }
  },
    computed: {
        displayTemp() {
            const temp = this.weather.main.temp
            if (this.isCelsius) {
            return Math.round(temp) + '°C'
            } else {
            return Math.round(temp * 9/5 + 32) + '°F'
            }
        }
    }
}
</script>