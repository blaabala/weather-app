<template>
    <h1>Weather App</h1>
    <c-search-bar @search="handleSearch" />
</template>

<script>
import CSearchBar from '../components/SearchBar.vue'
import CWeatherCard from '../components/WeatherCard.vue'
import CForeCastList from '../components/ForeCastList.vue'
import CForeCastCard from '../components/ForeCastCard.vue'
import CLoadingSpinner from '../components/LoadingSpinner.vue'
import CErrorMessage from '../components/ErrorMessage.vue'

import { getCurrentWeather, getForecast } from '@/services/weatherService'

export default {
    name: 'HomeView',
    components: {
        CSearchBar,
        CWeatherCard,
        CForeCastList,
        CForeCastCard,
        CLoadingSpinner,
        CErrorMessage,
        getCurrentWeather,
        getForecast
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
        handleSearch(city) {
            console.log('City Name:', city)
        }
    }
}

</script>