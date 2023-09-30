<template>
  <section class="section">
    <div class="container is-max-desktop">
      <Nuxt />
    </div>
  </section>
</template>

<script>
import { signInCheck } from '../firebase';

export default {
  created() {
    signInCheck()
  },
}

</script>