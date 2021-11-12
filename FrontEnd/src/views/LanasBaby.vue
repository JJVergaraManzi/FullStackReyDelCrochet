<template>
  <div class="container">
   <h1 class = "title display 1">LanasBaby:</h1>
   <div class="global">
 
    <div class="prod">
      <div class = "row g-0 ">
        <producto class = "col-sm-4 mr-6" v-for="producto in listadoDatos" :producto="producto" :key="producto.id"></producto>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import producto from '../components/Productolanasbaby'
export default {
    components:{producto},
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
.title {
  margin: 100 px 0;
  text-align: center;

}
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
