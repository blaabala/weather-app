<template>
  <div class="search-bar d-flex gap-2 mb-4">
    <input
      v-model="textInput"
      @keyup.enter="handleSearch"
      type="text"
      class="form-control"
      :disabled="loading" 
      placeholder="Search for a city... (e.g., Kuala Lumpur)"
    />
    <button @click="handleSearch" :disabled="loading" class="btn btn-primary px-4">{{ loading ? 'Searching...' : 'Search' }}</button>
  </div>
</template>

<script>
export default {
    name: 'CSearchBar',
    emits: ['search'],
    data() {
        return {
            textInput: ''
        }
    },
    props: {
        loading: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleSearch() {
            if (this.textInput.trim()) {
            this.$emit('search', this.textInput.trim())
            this.textInput = ''
            }
        }
    }
}
</script>