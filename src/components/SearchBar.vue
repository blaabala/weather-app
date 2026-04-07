<template>
    <div class="search-bar">
        <input v-model="textInput" @keyup.enter="handleSearch" type="text" placeholder="Search for a city... (e.g., Kuala Lumpur)" />
        <button @click="handleSearch">Search</button>
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
            if(this.textInput.trim()) {
                this.$emit('search', this.textInput.trim())
                this.textInput = ''
            }
        }
    }
}
</script>

<style scoped>

</style>