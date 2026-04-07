<template>
  <div class="alert alert-danger mt-3" role="alert">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'CErrorMessage',
  props: {
    message: {
      type: String,
      required: true
    }
  }
}
</script>