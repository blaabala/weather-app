<template>
  <div class="forecast-card card p-3 text-center">
    <p class="fw-bold">{{ day }}</p>
    <img :src="`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`" :alt="forecast.weather[0].description" />
    <p>{{ Math.round(forecast.main.temp) }}°C</p>
    <p class="text-capitalize small">{{ forecast.weather[0].description }}</p>
  </div>
</template>

<script>
export default {
  name: 'CForecastCard',
  props: {
    forecast: {
      type: Object,
      required: true
    }
  },
  computed: {
    day() {
      const date = new Date(this.forecast.dt_txt)
      return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
    }
  }
}
</script>