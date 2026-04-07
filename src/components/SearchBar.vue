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

    <button @click="$emit('locate')" :disabled="loading" class="btn btn-outline-secondary px-3 d-flex align-items-center justify-content-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 0a.5.5 0 0 1 .5.5v.518A7 7 0 0 1 14.982 7.5h.518a.5.5 0 0 1 0 1h-.518A7 7 0 0 1 8.5 14.982v.518a.5.5 0 0 1-1 0v-.518A7 7 0 0 1 1.018 8.5H.5a.5.5 0 0 1 0-1h.518A7 7 0 0 1 7.5 1.018V.5A.5.5 0 0 1 8 0zm0 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2zm0 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/>
        </svg>
    </button>
    <button @click="handleSearch" :disabled="loading" class="btn btn-primary px-4">{{ loading ? 'Searching...' : 'Search' }}</button>
  </div>
</template>

<script>
export default {
    name: 'CSearchBar',
    emits: ['search', 'locate'],
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