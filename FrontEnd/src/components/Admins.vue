<template>
  <div class="add">
    <h1 class="title">Agregar productos</h1>
    <form action class="form" @submit.prevent="add">
        <label class="form-label" for="#precio">Precio:</label>
      <input
        v-model="precio"
        class="form-input"
        type="precio"
        id="precio"
        required
        placeholder="Precio"
      > 
    <label class="form-label" for="#nombre">Nombre:</label>
      <input
        v-model="nombre"
        class="form-input"
        type="nombre"
        id="nombre"
        required
        placeholder="Nombre"
      > 
       <label class="form-label" for="#description">Descripcion:</label>
      <input
        v-model="description"
        class="form-input"
        type="description"
        id="description"
        placeholder="Descripcion"
      >
       <label class="form-label" for="#stock">Cantidad:</label>
      <input
        v-model="stock"
        class="form-input"
        type="stock"
        id="stock"
        required
        placeholder="Cantidad"
      >
      <label class="form-label" for="#ProductoID">ID:</label>
      <input
        v-model="ProductoID"
        class="form-input"
        type="ProductoID"
        id="ProductoID"
        required
        placeholder="ID"
      >
    <div class="form-label">
    <label for="#categories">Categoria</label>
    <select  class="form-control" v-model="categories"
    type="categories"
    id="categories" 
    placeholder="Ingrese la categoria">
      <option>1 </option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>

    </select>

    
  </div>
    <div class="form-group">
    <label for="img">Imagen</label>
    <input 
    v-modal="img"
    type="file"  
    class="form-control-file"
    accept="image/*"
    @change="uploadImage($event)"
    id="img"
    placeholder="img">
  </div>
     
      <button type="submit" class="btn btn-primary col-md-4">Ingresar producto</button>
      <div class="modal fade" id="modal" tabindex="-1"  aria-hidden="true" aria-label="modalTitle">
        <div class="modal-dialog">
          
          <div class="modal-header">
            <h5 class="modal-title" id="modalTitle">Producto agregado </h5>
            </div>
            <div class="modal-body">

            </div>
            <div class="modal-footer"></div>
          </div>

        
      </div>
      
    </form>
  </div>
</template>
<script>
import auth from "@/logic/auth";
import axios from "axios";


export default {

  data: () => ({
    selected: '',
    precio: "",
    nombre: "",
    description: "",
    stock: "",
    ProductoID: "",
    categories: this.categories.id,
    img: "",
    error: false
  }),
  methods: {
    async add() {
      try {
        await auth.add(this.precio,this.nombre,this.description,this.stock,this.ProductoID,this.categories,this.img);
        this.$router.go(0)
       
      } catch (error) {
        console.log(error);
      }
    },
    uploadImage(event) {
    const URL = 'http://localhost:3001/upload'; 
    let data = new FormData();
    data.append('name', 'my-picture');
    data.append('file', event.target.files[0]); 

    let config = {
      header : {
        'Content-Type' : 'image/jpg '
      }
    }
      axios.put(
      URL, 
      data,
      config
    ).then(
      response => {
        console.log('image upload response > ', response)
      }
    )
    }
  },
  computed:{

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


