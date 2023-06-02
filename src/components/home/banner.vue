<template>
  <div class="id-home__banner">
    <div class="id-home__banner__text">
      <h1>Let Your Home Be Unique</h1>
      <p>There are many variations of the passages of lorem Ipsum fromavailable,variations of the passages.</p>
      <a href="#id-home__work" class="btn dark-btn">
        Get Started 
        <font-awesome-icon :icon="['fas', 'arrow-right']" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerComponent',
  components: {
  }
}
</script>

<style lang="scss">
@import '@/styles.scss';

.id-home{
  &__banner{
    padding: 40px 0 60px;
    margin-bottom: 40px;
    height: 90vh;

    background-image: url(@/assets/images/id-home__banner-img.png);
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;

    &__text{
      width: 35%;
      margin-left: 20%;
      h1{
        font-size: 85px;
      }
      p{
        margin-bottom: 60px;
      }
    }
  }
}
</style>
