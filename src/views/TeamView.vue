<template>
  <main class="id-team">
    <Banner />

    <div class="container">
      <TeamCards />
    </div>
  </main>
</template>

<script>
import Banner from '@/components/team/banner.vue'
import TeamCards from '@/components/team/teamCards.vue'
export default {
  name: 'DefaultBannerView',
  components: {
    Banner, TeamCards
  }
}
</script>

<style lang="scss">
</style>