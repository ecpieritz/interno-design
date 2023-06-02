<template>
  <header class="id-header">
    <div class="container">
      <router-link to="/">
        <img src="@/assets/images/id-logo.png" alt="Interno Design logo" class="id-header__logo">
      </router-link>
      <nav class="id-header__nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/services">Services</router-link>
        <router-link to="/prices">Prices</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/team">Team</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>

    </div>
  </header>

  <main>
    <div class="container">
      <router-view/>
    </div>
  </main>
</template>

<style lang="scss">
@import '@/styles.scss';

.id-header{
  .container{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__logo{
    width: 300px;
  }
}
</style>
