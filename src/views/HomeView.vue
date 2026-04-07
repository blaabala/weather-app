<template>
  <div class="container py-5">
    <h1 class="text-center mb-4">Weather App</h1>

    <c-search-bar @search="handleSearch" />

    <c-loading-spinner v-if="loading" />
    <c-error-message v-if="error" :message="error" />
    <button v-if="weather" @click="toggleUnit" class="btn btn-outline-secondary mb-3">
        Switch to {{ isCelsius ? '°F' : '°C' }}
    </button>
    <c-weather-card v-if="weather" :weather="weather" :is-celsius="isCelsius" />
    <c-forecast-list v-if="forecast.length" :forecast="forecast" :is-celsius="isCelsius" />

    <div v-if="!weather && !loading && !error">
        <h4 class="mt-3">Check the weather</h4>
        <p class="text-muted">Search for a city to see the current weather and 5-day forecast</p>
    </div>
  </div>
</template>

<script>
import CSearchBar from '../components/SearchBar.vue'
import CWeatherCard from '../components/WeatherCard.vue'
import CForecastList from '../components/ForeCastList.vue'
import CForecastCard from '@/components/ForeCastCard.vue'
import CLoadingSpinner from '../components/LoadingSpinner.vue'
import CErrorMessage from '../components/ErrorMessage.vue'

import { getCurrentWeather, getForecast } from '@/services/weatherService'

export default {
    name: 'HomeView',
    components: {
        CSearchBar,
        CWeatherCard,
        CForecastList,
        CForecastCard,
        CLoadingSpinner,
        CErrorMessage,
    },
    data() {
        return {
            weather: null,
            forecast: [],
            loading: false,
            error: '',
            isCelsius: true
        }
    },
    methods: {
        async handleSearch(city) {
            this.loading = true
            this.error = ''
            this.weather = null
            this.forecast = []
            try {
                this.weather = await getCurrentWeather(city)
                this.forecast = await getForecast(city)
            } catch (error) {
                this.error = 'City not found. Please try again.'
            } finally {
                this.loading = false
            }
        },
        toggleUnit() {
            this.isCelsius = !this.isCelsius
        }
    }
}

</script>