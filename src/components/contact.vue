
<template>
  <div class="id-contact container" id="id-contact">
    <h2>Wanna join the interno?</h2>
    <p>It is a long established fact  will be distracted.</p>
    <router-link to="/contact" class="btn gold-btn">Contact With Us <font-awesome-icon :icon="['fas', 'arrow-right']" /></router-link>
  </div>
</template>

<script>
export default {
  name: 'ContactComponent',
  components: {
  }
}
</script>

<style lang="scss">
@import '@/styles.scss';

.id-contact {
    margin-top: 160px ;
}
</style>
