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
        placeholder="precio"
      > 
    <label class="form-label" for="#nombre">Nombre:</label>
      <input
        v-model="nombre"
        class="form-input"
        type="nombre"
        id="nombre"
        required
        placeholder="nombre"
      > 
       <label class="form-label" for="#description">Descripcion:</label>
      <input
        v-model="description"
        class="form-input"
        type="description"
        id="description"
        placeholder="description"
      >
       <label class="form-label" for="#stock">Cantidad:</label>
      <input
        v-model="stock"
        class="form-input"
        type="stock"
        id="stock"
        required
        placeholder="stock"
      >
      <label class="form-label" for="#ProductoID">ID:</label>
      <input
        v-model="ProductoID"
        class="form-input"
        type="ProductoID"
        id="ProductoID"
        required
        placeholder="ProductoID"
      >
     
      <button type="submit" class="btn btn-primary col-md-4">Ingresar producto</button>
    </form>
  </div>
</template>
<script>
import auth from "@/logic/auth";
export default {
  data: () => ({
    precio: "",
    nombre: "",
    description: "",
    stock: "",
    ProductoID: "",
    error: false
  }),
  methods: {
    async add() {
      try {
        await auth.add(this.precio,this.nombre,this.description,this.stock,this.ProductoID);
        this.$router.push("/")
      } catch (error) {
        console.log(error);
      }
    }
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

