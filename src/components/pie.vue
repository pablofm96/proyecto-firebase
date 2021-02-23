<template lang="html">

  <section class="pie mt-4">
    <footer class="bg-dark text-center text-white">
  <!-- Grid container -->
  <div class="container p-4">
    <!-- Section: Social media -->
    <section class="mb-4">

      <!-- Linkedin -->
      <a class="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/pablo-ferres-546242205/" role="button"> 
        <font-awesome-icon :icon="['fab', 'linkedin']" />
      </a>

      <!-- Github -->
      <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/pablofm96" role="button">
        <font-awesome-icon :icon="['fab', 'github']" />
      </a>
    </section>
    <!-- Section: Social media -->
  </div>
  <!-- Grid container -->

  <!-- Copyright -->
  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    © 2021 Copyright:
    <p>Pablo Ferres Maldonado 2ºDAW</p>
  </div>
  <!-- Copyright -->
</footer>
<!-- Footer -->

  </section>

</template>

<script lang="js">

  export default  {
    name: 'pie',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .pie {

  }
</style>
