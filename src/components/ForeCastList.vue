<template>
  <div class="forecast-list mt-4">
    <h5 class="mb-3">5-Day Forecast</h5>
    <div class="row g-3">
      <div class="col-6 col-md-4 col-lg-2half" v-for="(item, index) in forecast" :key="index">
        <c-forecast-card :forecast="item" :is-celsius="isCelsius" />
      </div>
    </div>
  </div>
</template>

<script>
import CForecastCard from './ForeCastCard.vue'

export default {
  name: 'CForecastList',
  components: { CForecastCard },
  props: {
    forecast: {
      type: Array,
      required: true
    },
    isCelsius: { type: Boolean, required: true }

  }
}
</script>