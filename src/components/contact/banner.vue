
<template>
  <div class="id-contact__banner" id="id-contact__banner">
    <img src="@/assets/images/id-contact__banner.png" alt="" class="id-banner__img">

    <div class="id-banner__text">
      <h1>Contact Us</h1>

      <div class="id-banner__text__breadcrumb container">
        <router-link to="/">Home</router-link> | <router-link to="/contact">Contact</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamBannerComponent',
  components: {
  }
}
</script>

<style lang="scss">
@import '@/styles.scss';

</style>
