<template>
  <div class="container">
   <h1>Bienvenido</h1>
   <div class="global">
 
    <div class="prod">
      <div class = "row">
                <div class="card" style="width: 18rem" v-for="dato in listadoDatos" :key="dato.id">
                    <img src=" " class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">{{dato.title}}</h5>
                        <p class="card-text">{{dato.price}}$</p>
                        <p class="card-text">{{dato.description}}
                        </p>
                        <p class="card-text">unidades disponibles: {{dato.qty}}</p>
                        <a href="#" class="btn btn-primary">Comprar</a>
                      </div>
                      <!-- Aquí empieza la cabecera de la web -->                
                      <!--  dato -->
                      <!-- Fin de la cabecera -->
                    </div>
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