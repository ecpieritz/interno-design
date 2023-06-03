
<template>
  <div class="id-home__call-us container" id="id-home__call-us">
    <div class="row">
      <div class="col-md-5 id-home__call-us__text">
        <h2>We Create The Art Of Stylish Living Stylishly</h2>
        <p>It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.</p>

        <div class="id-home__call-us__text__phone">
          <font-awesome-icon :icon="['fas', 'phone']" />
          <p><strong>+55 47 98765-4321<br/></strong>Call Us Anytime</p>
        </div>
        <router-link to="/contact" class="btn dark-btn">Get Free Estimate <font-awesome-icon :icon="['fas', 'arrow-right']" /></router-link>
      </div>

      <div class="col-md-7 id-home__call-us__img">
        <img src="@/assets/images/id-home__call-us.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CallUsComponent',
  components: {
  }
}
</script>

<style lang="scss">
@import '@/styles.scss';

.id-home{
  &__call-us{
    padding-top: 80px;
    &__text{
      padding-top: 80px;
      &__phone{
        display: flex;
        flex-direction: row;
        margin: 30px 0;
        svg{
          color: $id-gold;
          padding: 30px;
          background-color: $id-light;
          border-radius: 50%;
          margin-right: 20px;
        }
      }
    }
  }
}
</style>
