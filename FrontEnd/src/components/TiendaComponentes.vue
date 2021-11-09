<template>
  <div class="container">
   <h1 class = "title display 1">Bienvenido</h1>
   <div class="global">
 
    <div class="prod">
      <div class = "row g-0 ">
                <div class = "col-sm-4 mr-6" v-for="dato in listadoDatos" :key="dato.id">
                <div class="card mb-3" style="width: 18rem;" >
                   <div class="col-md-26"> <!--tamaño imagen -->
                  <img 
                        :src="`http://localhost:1337${dato.imagen[0].url}`"
                        class="img-thumbnail" 
                        alt=""
                        />   <!--Imagen de strapi -->
                   </div>
                    <div class="card-body">
                        <h5 class="card-title">{{dato.title}}</h5>
                        <p class="card-text">{{dato.description}}</p>
                        <p class="card-text">Unidades disponibles: {{dato.qty}}</p>
                        
                        <div class=" d-flex justify-content-between">
                          <a href="#" class="p-1 mb-2 bg-dark text-white aling-items-center">Agregar al carro</a>                          
                          <div> <strong> Precio: </strong> ${{dato.price}}</div>
                        </div> 
                      </div>
                      <!-- Aquí empieza la cabecera de la web -->                
                      <!--  dato -->
                      <!-- Fin de la cabecera -->
                    </div>
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