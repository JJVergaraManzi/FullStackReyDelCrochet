<template>
  <div class="container">
   <div class="global">
      <div class="carrito">
        <carrito-compra><producto class = "col-sm-4 mr-6" v-for="producto in listadoDatos" :producto="producto" :key="producto.id"></producto></carrito-compra>
      </div>
    </div>
  </div>
</template>

<script>
import CarritoCompra from './Carritotest.vue'
import producto from './Productotest.vue'
export default {
  components:{CarritoCompra, producto},
  data () {
      return{
        listadoDatos: []
      }
  },
  mounted(){
        this.$store.dispatch('obtenerListadoDatos').then(response => {
            this.listadoDatos = response;
        });
  }
}
</script>

<style>
body {
  background: #eee;
}
.global {
  display:flex;
  justify-content: space-between
}
.prod {
  width: 65%;
  display:flex;
  justify-content: space-between;
  flex-wrap:wrap
}
.carrito {
  width: 30%;
  background-color:#EEEEEE;
}
</style>