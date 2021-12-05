<template>
 <div class="container">
    <div class="global">
    <div class="producto">
            <div class="card mb-3" style="width: 18rem;"> <!--tamaño imagen -->
                <div class="col-md-26">
                  <img 
                        :src="`http://localhost:3001${producto.img[0].url}`"
                        class=" w-75 mx-auto d-block img-thumbnail" 
                        alt=""
                        />   <!--Imagen de strapi -->
                </div>
                <div class="row py-3">
                            <h5 class="card-title">{{producto.nombre}}</h5>
                            <p class="card-text">{{producto.description}}</p>
                            <p class="card-text">Unidades disponibles: {{producto.stock}}</p>
                            <ul class="col mr-1 row justify-content-center ">
                                <li class=" col mr-2 categoriaxd-item badge text-light " style=""
                                v-for="categoriaxd in producto.categories"
                                :key="categoriaxd.id" >

                                 <div class="mr-2">{{categoriaxd.name}} </div>
                                </li>
                            </ul>   
                            <h5 class="card-title">{{producto.id}}</h5> 

                    </div>   
                <ul class="col mr-1 row justify-content-center ">
                <li class=" col mr-2 text-light " style="">
                <div class="botones justify-end">
                    <button class="botones btns btn-lg" @click="borrar"><p class="p-2 mb-2 bg-danger text-white aling-items-center">Eliminar</p></button>
                    <button class="botones btns btn-lg" @click="editar"><p class="p-2 mb-2 bg-warning text-white aling-items-center">Editar</p></button>
                </div>
                </li>
                </ul>
            </div>
            </div>
        
    </div>
    </div>
</template>
<script>
import auth from "@/logic/auth";

export default {
    props:['producto'],
    data(){
        return {
            productoide: this.producto.id,
        }
    },
    computed: {
        
    },
    methods: {
    async borrar(){
      try {
        await auth.borrar(this.productoide);
        
      } catch (error) {
        console.log(error);
      }
    },
    async editar() {
      try {
        await auth.editar(this.precio,this.nombre,this.description,this.stock,this.ProductoID,this.categories,this.img);
        this.$router.push("/")
      } catch (error) {
        console.log(error);
      }
    },
     uploadImage(e){
                const image = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload= e=>{
                  this.previewImage = e.target.result;
                  console.log(this.imagePreview);
                };
              },
  }
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
.btns {
    width:50%;
}
.btn {
    background-color:#42B992;
    width:100%;
    border:none;
    color:white;
    padding: .5em;
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
.botones {
    display:flex;
}
.carrito {
  width: 30%;
  background-color:#EEEEEE;
}
.producto {
    background: white;
    margin: 0 .5em;
    text-align:center;
    margin-bottom : 1em;
}
.productos-categrias {
    display: flex;
}
.categoriaxd-item {
    margin: 5px;
}
.li {
    list-style: none;
}
.ul{
    margin: 0;
    padding: 0;
}
.badge{
    background: blueviolet;
}
    
</style>