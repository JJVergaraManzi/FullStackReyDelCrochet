<template>
  <div class="container">
   <h1>Bienvenido</h1>
   <div class="global">
 
    <div class="prod">
      <div v-for="dato in listadoDatos" :key="dato.id">
            {{ dato }}
    </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
    data() {
        return{
            listadoDatos: []
        }
    },
    mounted(){
        this.$store.dispatch('obtenerListadoDatos').then(response => {
            this.listadoDatos = response;
        });
    },
};
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