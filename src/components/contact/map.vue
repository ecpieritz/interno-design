
<template>
  <div class="id-contact__map" id="id-contact__map">
    <div class="container">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8698.535130846873!2d-46.639353637663774!3d-23.558259270702756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59af4b308c59%3A0xea89ed27441be1ef!2sAv.%20da%20Liberdade%20-%20Liberdade%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2012240-550!5e0!3m2!1spt-BR!2sbr!4v1686245552603!5m2!1spt-BR!2sbr" width="100%" height="600" style="border:0; border-radius: 20px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactMapComponent',
  components: {
  }
}
</script>

<style lang="scss">
@import '@/styles.scss';

.id-contact {
  &__map {
    margin: 80px 0;
  }
}
</style>
