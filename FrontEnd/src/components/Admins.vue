<template>
  <form>
  <div class="form-row">
    <div class="form-group col-md-3">
      <label for="inputName">nombre</label>
      <input type="text" class="form-control" id="nombre">
    </div>
    <div class="form-group col-md-3">
      <label for="inputStock">Cantidad</label>
      <input type="number" class="form-control" id="Stock">
    </div>
  </div>
  <div class="form-group col-md-3">
    <label for="inputPrice">Precio</label>
    <input type="number" class="form-control" id="Price" >
  </div>
  <div class="form-group col-md-3">
    <label for="inputDate">Fecha de ingreso</label>
    <input type="date" class="form-control" id="inputPrice" placeholder="1234 Main St">
  </div>
  <div class="form-group">
    <label for="InputImage">Imagen</label>
    <input type="file" class="form-control-file" id="img">
  </div>
  <div class="form-row">
    <div class="form-group col-md-3">
      <label for="inputDescription">Descripción</label>
      <input type="text" class="form-control" id="description" rows="3">
    </div>
    <div class="form-group col-md-3">
      <label for="inputIdProduct">Id del producto</label>
      <input type="text" class="form-control" id="inputZip">
    </div>
  </div>
  
  <div class="form-group col-md-4">
    <label for="inputCategory">Categoria</label>
    <select  class="form-control" id="categoria" placeholder="Ingrese la categoria">
      <option>Accesorios</option>
      <option>Crochet</option>
      <option>Lanas</option>
      <option>Lanas baby</option>
      <option>Palillos</option>
      <option>Tijeras</option>
      <option>Trapillos</option>
    </select>
  </div>
  <button type="submit" class="btn btn-primary col-md-4">Ingresar producto</button>
</form>
</template>

<script>
/*import producto from '../components/Productovisita'
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
};*/
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