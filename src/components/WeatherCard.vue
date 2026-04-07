<template>
  <div class="weather-card card p-4 mb-4">
    <div class="row">
      <div class="col-12 col-md-6">
        <h2>{{ weather.name }}, {{ weather.sys.country }}</h2>
        <h1 class="display-1">{{ Math.round(weather.main.temp) }}°C</h1>
        <p class="text-capitalize">{{ weather.weather[0].description }}</p>
        <img :src="`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`" :alt="weather.weather[0].description" />
      </div>
      <div class="col-12 col-md-6">
        <div class="details mt-3">
          <p>Feels like: {{ Math.round(weather.main.feels_like) }}°C</p>
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
    }
  }
}
</script>