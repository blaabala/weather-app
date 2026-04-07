<template>
  <div class="container py-5">
    <h1 class="text-center mb-4">Weather App</h1>

    <c-search-bar @search="handleSearch" />

    <c-loading-spinner v-if="loading" />
    <c-error-message v-if="error" :message="error" />
    <c-weather-card v-if="weather" :weather="weather" />
    <c-forecast-list v-if="forecast.length" :forecast="forecast" />
  </div>
</template>

<script>
import CSearchBar from '../components/SearchBar.vue'
import CWeatherCard from '../components/WeatherCard.vue'
import CForecastList from '../components/ForeCastList.vue'
import CForeCastCard from '@/components/ForecastCard.vue'
import CLoadingSpinner from '../components/LoadingSpinner.vue'
import CErrorMessage from '../components/ErrorMessage.vue'

import { getCurrentWeather, getForecast } from '@/services/weatherService'

export default {
    name: 'HomeView',
    components: {
        CSearchBar,
        CWeatherCard,
        CForecastList,
        CForeCastCard,
        CLoadingSpinner,
        CErrorMessage,
    },
    data() {
        return {
            weather: null,
            forecast: [],
            loading: false,
            error: '',
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
        }
    }
}

</script>