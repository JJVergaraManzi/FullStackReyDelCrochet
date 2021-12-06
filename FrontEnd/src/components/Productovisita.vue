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
                            <div> <strong> Precio: </strong> ${{producto.precio}} </div>
                            <ul class="col mr-1 row justify-content-center ">
                                <li class=" col mr-2 categoriaxd-item badge text-light " style=""
                                v-for="categoriaxd in producto.categories"
                                :key="categoriaxd.id" >

                                 <div class="mr-2">{{categoriaxd.name}} </div>
                                </li>
                            </ul>   

                    </div>   
                <ul class="col mr-1 row justify-content-center ">
                <li class=" col mr-2 text-light " style="">
                <div class="botones justify-end" v-if="editggg==false">
                    <button class="botones btns btn-lg" @click="borrar" ><p class="p-2 mb-2 bg-danger text-white aling-items-center">Eliminar</p></button>
                    <button class="botones btns btn-lg" v-on:click="editggg = true" ><p class="p-2 mb-2 bg-warning text-white aling-items-center">Editar</p></button>
                </div>
                </li>
                </ul>
                <div v-if="editggg==true">

                        <div class="add">
                          <form action class="form" @submit.prevent="add">
                          <label class="form-label" for="#precio">Precio:</label>
                              <input
                                  v-model="precio2"
                                  class="form-input"
                                  type="precio"
                                  id="precio"
                                  placeholder="precio"
                              > 
                          <label class="form-label" for="#nombre">Nombre:</label>
                              <input
                                  v-model="nombre2"
                                  class="form-input"
                                  type="nombre"
                                  id="nombre"
                                  placeholder="nombre"
                              > 
                          <label class="form-label" for="#description">Descripcion:</label>
                              <input
                                  v-model="description2"
                                  class="form-input"
                                  type="description"
                                  id="description"
                                  placeholder="description"
                              >
                          <label class="form-label" for="#stock">Cantidad:</label>
                              <input
                                  v-model="stock2"
                                  class="form-input"
                                  type="stock"
                                  id="stock"
                                  placeholder="stock"
                              >
                              
                         <!-- <div class="form-label">
                              <label for="inputCategory">Categoria</label>
                                  <select  class="form-control" v-model="categories2"
                                      id="categories" 
                                      placeholder="Ingrese la categoria">
                                      <option>Accesorios</option>
                                      <option>Crochet</option>
                                      <option>Lanas</option>
                                      <option>Lanas baby</option>
                                      <option>Palillos</option>
                                      <option>Tijeras</option>
                                      <option>Trapillos</option>
                                  </select>
                          </div>-->

     
                          <button class="d-flex justify-content-center botones btns btn-lg" @click="editar"><p class="p-2 mb-2 bg-success text-white aling-items-center">Actualizar producto</p></button>
                          </form>
                        </div>

                           
                      </div>
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
            precio2: "",
            nombre2: "",
            description2: "",
            stock2: "",
            ProductoID2: this.producto.ProductoID,
            categories2: this.producto.categories,
            img2: this.producto.img,
            error: false,
            editggg: false,
        }
    },
    computed: {
        
    },
    methods: {
    verificar(){
        if(this.precio2===""){
          console.log(this.producto.precio);
          this.precio2===this.producto.precio;
          console.log(this.precio2);
        }
        if(this.nombre2===""){
          console.log(this.producto.nombre);
          this.nombre2===this.producto.nombre;
          console.log(this.nombre2);
        }
        if(this.description2===""){
          console.log(this.producto.description);
          this.description2===this.producto.description;
          console.log(this.description2);
        }
        if(this.stock2===""){
          console.log(this.producto.stock);
          this.stock2===this.producto.stock;
          console.log(this.stock2);
        } 
    },
    async borrar(){
      this.verificar();
      try {
        await auth.borrar(this.productoide);
        this.$router.go(0)
      } catch (error) {
        console.log(error);
      }
    },
    async editar() {
      try {
        await auth.editar(this.productoide,this.precio2,this.nombre2,this.description2,this.stock2,this.ProductoID2,this.categories2, this.img2);
        this.$router.go(0)
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
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}
input[type=number] {
  -moz-appearance: textfield;
}
</style>

<style lang="scss" scoped>
.agregar {
  padding: 2rem;
}
.title {
  text-align: center;
}
.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 350px;
  max-width: 100%;
  background: rgba(19, 35, 47, 0.9);
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}
.form-label {
  margin-top: 2rem;
  color: white;
  margin-bottom: 0.5rem;
  &:first-of-type {
    margin-top: 0rem;
  }
}
.form-input {
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid white;
  color: white;
  &:focus {
    outline: 0;
    border-color: #1ab188;
  }
}
.form-submit {
  background: #1ab188;
  border: none;
  color: white;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #0b9185;
  }
}
.error {
  margin: 1rem 0 0;
  color: #ff4a96;
}   
</style>