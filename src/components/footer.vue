
<template>
  <div class="id-footer container" id="id-footer">
    <div class="row">
      <div class="col-md-3">
        <img src="@/assets/images/id-logo.png" alt="">
      </div>
      <div class="col-md-6">
        <h4>Made with 💙 by Emilyn C. Pieritz</h4>
      </div>
      <div class="col-md-3 id-footer__socials">
        <a class="btn img-btn gold" href="https://www.linkedin.com/in/ecpieritz/" target="_blank" rel="noopener noreferrer"><font-awesome-icon :icon="['fab', 'linkedin']" /></a>
        <a class="btn img-btn gold" href="https://github.com/ecpieritz" target="_blank" rel="noopener noreferrer"><font-awesome-icon :icon="['fab', 'github']" /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterComponent',
  components: {
  }
}
</script>

<style lang="scss">
@import '@/styles.scss';

.id-footer {
}
</style>
