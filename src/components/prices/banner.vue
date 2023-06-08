
<template>
  <div class="id-prices__banner" id="id-prices__banner">
    <img src="@/assets/images/id-prices__banner.jpg" alt="" class="id-banner__img">

    <div class="id-banner__text">
      <h1>Prices & Plan</h1>

      <div class="id-banner__text__breadcrumb container">
        <router-link to="/">Home</router-link> | <router-link to="/prices">Prices</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PricesBannerComponent',
  components: {
  }
}
</script>

<style lang="scss">
@import '@/styles.scss';

.id-prices {
  &__banner {
    &__img {
      width: 100%;
    }

    &__text {
      margin-top: 60px;
      width: auto;
      text-align: center;
      z-index: 2;

      &__breadcrumb {
        text-align: left;

        a {
          color: $id-gray;

          &:hover {
            text-decoration: none;
            color: $id-gold;
          }
        }
      }
    }
  }
}
</style>
