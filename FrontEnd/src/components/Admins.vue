<template>
  <form>
  <div class="form-row">
    <h1>Ingrese su producto</h1>
    <div class="form-group col-md-3">
      <label for="inputName">nombre</label>
      <input type="text" class="form-control" id="nombre">
    </div>
    <div class="form-group col-md-3">
      <label for="inputStock">Cantidad</label>
      <input type="number" class="form-control" id="stock">
    </div>
  </div>
  <div class="form-group col-md-3">
    <label for="inputPrice">Precio</label>
    <input type="number" class="form-control" id="price" >
  </div>
  <div class="form-group col-md-3">
    <label for="inputDate">Fecha de ingreso</label>
    <input type="date" class="form-control" id="creationDate" placeholder="1234 Main St">
  </div>
  <div class="form-group">
    <label for="InputImage">Imagen</label>
    <input type="file" class="form-control-file" id="img">
  </div>
  <div class="form-group">
    <div class="form-group col-md-3">
      <label for="inputDescription">Descripción</label>
      <input type="text" class="form-control" id="description" rows="3">
    </div>
    <div class="form-group col-md-3">
      <label for="inputIdProduct">Id del producto</label>
      <input type="text" class="form-control" id="productoID">
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
        export default {
            name: 'admin',
            data() {
                return {
                    accessLevel:"authenticatedAdmin",
                    nombre:'',
                    stock:'',
                    price:'',
                    creationDate:'',
                    img:'',
                    description:'',
                    productoID:'',
                    categoria:'',
                    error: false,
                    errorMsg: `Uno de los campos esta incompleto, intentelo de nuevo.`
                }
            },
            methods: {
                async register(e) {
                    try {
                        e.preventDefault()
                            await this.axios.post(`http://localhost:3001/auth/local/admin`, {
                            name: this.name,
                            password: this.password,
                            email: this.email,
                            username: this.username
                        })
                        this.$router.push('admin')
                    } catch(e) {
                        this.error = true
                        this.email = ''
                    } 
                }
            }
        }
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