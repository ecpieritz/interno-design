<template>
  <div class="id-home__work container" id="id-home__work">
    <div class="row">
      <div class="col-md-4 id-home__work__card">
        <h3>About Us</h3>
        <p>There are many variations of the passages of lorem Ipsum from available, majority.</p>
        <router-link class="btn text-btn" to="/about">Read More <font-awesome-icon :icon="['fas', 'arrow-right']" /></router-link>
      </div>
      <div class="col-md-4 id-home__work__card">
        <h3>Interior Services</h3>
        <p>There are many variations of the passages of lorem Ipsum from available, majority.</p>
        <router-link class="btn text-btn" to="/services">Read More <font-awesome-icon :icon="['fas', 'arrow-right']" /></router-link>
      </div>
      <div class="col-md-4 id-home__work__card">
        <h3>Project Plan</h3>
        <p>There are many variations of the passages of lorem Ipsum from available, majority.</p>
        <router-link class="btn text-btn" to="/projects">Read More <font-awesome-icon :icon="['fas', 'arrow-right']" /></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkComponent',
  components: {
  }
}
</script>

<style lang="scss">
@import '@/styles.scss';

.id-home{
  &__work{
    padding-top: 80px;


    &__card{
      text-align: center;
      p{
        width: 80%;
        margin: 20px auto 40px;
      }
    }
  }
}
</style>
