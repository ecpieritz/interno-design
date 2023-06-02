<template>
  <div class="id-home">
    <Banner />

    <div class="container">
      <Work />
    </div>
  </div>
</template>

<script>
import Banner from '@/components/home/banner.vue'
import Work from '@/components/home/work.vue'
export default {
  name: 'HomeView',
  components: {
    Banner, Work
  }
}
</script>

<style lang="scss">
</style>