<template>
  <main class="id-prices">
    <Banner />

    <div class="container">
      <Plans />
    </div>
  </main>
</template>

<script>
import Banner from '@/components/prices/banner.vue'
import Plans from '@/components/prices/plans.vue'
export default {
  name: 'DefaultBannerView',
  components: {
    Banner, Plans
  }
}
</script>

<style lang="scss">
</style>