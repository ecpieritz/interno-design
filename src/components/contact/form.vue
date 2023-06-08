
<template>
  <div class="id-contact__form" id="id-contact__form">
    <div class="container">
      <div class="row">
        <div class="col-md-4 id-contact__form__contacts">
          <div class="item"><font-awesome-icon :icon="['fas', 'envelope']" /> info@internodesign.com</div>
          <div class="item"><font-awesome-icon :icon="['fab', 'whatsapp']" /> +55 11 98765-4321</div>
          <div class="item"><font-awesome-icon :icon="['fas', 'globe']" /> www.yoursite.com</div>
          <div class="links">
            <a class="btn img-btn gold" href="https://www.linkedin.com/in/ecpieritz/" target="_blank"
              rel="noopener noreferrer"><font-awesome-icon :icon="['fab', 'linkedin']" /></a>
            <a class="btn img-btn gold" href="https://github.com/ecpieritz" target="_blank"
              rel="noopener noreferrer"><font-awesome-icon :icon="['fab', 'github']" /></a>
          </div>
        </div>
        <div class="col-md-8"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactFormComponent',
  components: {
  }
}
</script>

<style lang="scss">
@import '@/styles.scss';

.id-contact {
  &__form {
    margin: 80px 0;

    &__contacts{
      background-color: $id-light;
      border-radius: 20px;
      padding: 60px 40px;
      .item{
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        font-size: 20px;
        svg{
          color: $id-gold;
          width: 35px;
          height: 35px;
          margin-right: 20px;
        }
      }
      .links{
        margin-top: 40px;
        display: flex;
        justify-content: center;
        .btn{
          svg{
            margin-left: 0;
          }
          &:last-child{
            margin-left: 30px;
          }
        }
      }
    }
  }
}
</style>
