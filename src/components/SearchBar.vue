<template>
  <div class="search-bar d-flex gap-2 mb-4">
    <input
      v-model="textInput"
      @keyup.enter="handleSearch"
      type="text"
      class="form-control"
      placeholder="Search for a city... (e.g., Kuala Lumpur)"
    />
    <button @click="handleSearch" class="btn btn-primary px-4">Search</button>
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