<template>
  <div class="id-services">
    <Banner />
    <div class="container">
      <WeWork />
      <Contact />
    </div>
  </div>
</template>

<script>
import Banner from '@/components/services/banner.vue'
import WeWork from '@/components/services/weWork.vue'
import Contact from '@/components/contact.vue'

export default {
  name: 'ServicesView',
  components: {
    Banner, WeWork, Contact
  }
}
</script>

