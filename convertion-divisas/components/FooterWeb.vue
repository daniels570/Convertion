<template>
  <!-- -----------------------------------------------
        Start Footer
  ----------------------------------------------- -->
  <v-footer class="footer">
    <v-container>
      <div class="footer-bottom-bar font-14">
        <div class="d-block d-md-flex align-center">
          <p>
            Todos los derechos de 
            <a href="#" class="link">Divisas</a>
          </p>
          <div class="ml-auto">
            <div class="d-flex align-center">
              <a href="/" class="link px-4">Condiciones de Uso</a>
              <a href="/" class="link px-4">Avisos Legales</a>
              <a href="/" class="link px-4">Politicas de Privacidad</a>
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </v-footer>
  <!-- -----------------------------------------------
        End Footer
  ----------------------------------------------- -->
</template>
<script>
export default {
    name: 'FooterWeb',
    data () {
        return {
            fixed: false,
        }
    }
}
</script>
<style lang="scss">
.footerClass {
  padding: 0px 0px 0px 0px;
}
</style>