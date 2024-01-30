
<template>
  <v-app id="inspire">
      <RouterView />

      <Footer></Footer>
  </v-app>
</template>

<script>

import Footer from '@/components/Footer.vue';

export default {
  components: {
    Footer
  },
};

</script>
