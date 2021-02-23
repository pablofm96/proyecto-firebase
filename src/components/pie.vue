<template lang="html">

  <section class="pie mt-4">
    <footer class="text-center coloresPie">

  <div class="container p-4">
    <section class="mb-4">
      <a class="btn btn-outline-light btn-floating m-1 icon-button linkedin" href="https://www.linkedin.com/in/pablo-ferres-546242205/" role="button"> 
        <font-awesome-icon :icon="['fab', 'linkedin']" />
      </a>

      <a class="btn btn-outline-light btn-floating m-1 icon-button github" href="https://github.com/pablofm96" role="button">
        <font-awesome-icon :icon="['fab', 'github']" />
      </a>

       <a class="btn btn-outline-light btn-floating m-1 icon-button instagram" href="https://www.instagram.com/" role="button"> 
        <font-awesome-icon :icon="['fab', 'instagram']" />
      </a>

      <a class="btn btn-outline-light btn-floating m-1 icon-button twitter" href="https://www.twitter.com/" role="button"> 
        <font-awesome-icon :icon="['fab', 'twitter']" />
      </a>
    </section>
  </div>

  <div class="text-center p-3">
    © 2021 Copyright:
    <p class="coloresPie">Pablo Ferres Maldonado 2ºDAW</p>
  </div>
</footer>


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

<style scoped lang="scss">
  .pie {
    font-family: $fuentecabecerapie;
  }

  .coloresPie{
    background-color: color(primary);
    color: color(tertiary);
  }
 
  .icon-button{
    @include iconos
  }

  .linkedin:hover {
    @include iconosHover(#0073a4)
  }

  .github:hover {
      @include iconosHover(#5a32a3)
  }


  .instagram:hover {
      @include iconosHover(#e64a41)
  }

  .twitter:hover {
      @include iconosHover(#00aced)
  }
</style>
