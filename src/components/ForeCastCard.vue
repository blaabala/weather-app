<template>
  <div class="forecast-card card p-3 text-center">
    <p class="fw-bold">{{ day }}</p>
    <img :src="`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`" :alt="forecast.weather[0].description" />
    <p>{{ displayTemp }}</p>
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
    },
    isCelsius: { type: Boolean, required: true }
  },
  computed: {
    day() {
      const date = new Date(this.forecast.dt_txt)
      return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
    },
    displayTemp() {
        const temp = this.forecast.main.temp
        if (this.isCelsius) {
        return Math.round(temp) + '°C'
        } else {
        return Math.round(temp * 9/5 + 32) + '°F'
        }
    }
    }
}
</script>