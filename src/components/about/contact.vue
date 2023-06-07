
<template>
  <div class="id-about__contact" id="id-about__contact">
    <h2>Creative project? Let's have a productive talk.</h2>

    <form class="id-about__contact__form">
      <div class="form-row">
        <div class="col-md-6 mb-3">
          <label for="aboutNameValidation">Your name</label>
          <input type="text" class="form-control" id="aboutNameValidation" value="Text your name here" required>
        </div>
        <div class="col-md-6 mb-3">
          <label for="aboutEmailValidation">Your E-mail</label>
          <input type="email" class="form-control" id="aboutEmailValidation" value="your@mail.com" required>
        </div>
      </div>
      <div class="form-group">
        <label for="aboutMessageValidation">What are you interested in?</label>
    <textarea class="form-control" id="aboutMessageValidation" rows="5"></textarea>
      </div>
      <button class="btn dark-btn" type="submit">
        Send Now
        <font-awesome-icon :icon="['fas', 'arrow-right']" />
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AboutContactComponent',
  components: {
  }
}
</script>

<style lang="scss">
@import '@/styles.scss';

.id-about {
  &__contact{
    margin: 80px 0 160px ;

    h2{
      text-align: center;
      margin-bottom: 40px;
    }

    &__form{
      width: 70%;
      margin: auto;

      .dark-btn{
        float:right;
        margin: 40px 0;
      }
    }
  }
}
</style>
