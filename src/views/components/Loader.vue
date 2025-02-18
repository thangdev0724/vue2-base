
<template>
  <div>
    <div v-if="loading" class="loader">
      <div class="loader__spinner"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Loader',
    props: {
      loading: {
        type: Boolean,
        default: false
      }
    },
    
  }
</script>

<style lang="scss" scoped>

</style>