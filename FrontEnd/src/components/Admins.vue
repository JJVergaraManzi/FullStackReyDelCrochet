<template>
  <form>
  <v-card width="800px" class="mx-3 m-5 p-3 ">
    <div class="form-row">
      <h1>Ingrese su producto</h1>
    <div class="form-group col-md-3">
      <label for="inputName">nombre</label>
      <input type="text" class="form-control" id="nombre">
    </div>
    <div class="form-group col-md-3">
      <label for="inputStock">Cantidad</label>
      <input type="number" v-model="stock" class="form-control" id="stock">
    </div>
  </div>
  <div class="form-group col-md-3">
    <label for="inputPrice">Precio</label>
    <input type="number" v-model="price" class="form-control" id="price" >
  </div>
  <div class="form-group col-md-3">
    <label for="inputDate">Fecha de ingreso</label>
    <input type="date" v-model="creationDate" class="form-control" id="creationDate" placeholder="1234 Main St">
  </div>
  <div class="form-group">
    <label for="InputImage">Imagen</label>
    <input 
    type="file"  
    class="form-control-file"
    accept="image/"
    @change="uploadImage($event)"
    id="img">
  </div>
  <div class="form-group">
    <div class="form-group col-md-3">
      <label for="inputDescription">Descripción</label>
      <input type="text" v-model="description" class="form-control" id="description" rows="3">
    </div>
    <div class="form-group col-md-3">
      <label for="inputIdProduct">Id del producto</label>
      <input type="text" v-model="productoID" class="form-control" id="productoID">
    </div>
  </div>
  
  <div class="form-group col-md-4">
    <label for="inputCategory">Categoria</label>
    <select  class="form-control" v-model="categoria" id="categoria" placeholder="Ingrese la categoria">
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
  </v-card>
</form>
</template>

<script>
        export default {
            name: 'admin',
            data() {
                return {
                    accessLevel:true,
                    nombre:'',
                    stock:'',
                    price:'',
                    creationDate:'',
                    img:'',
                    description:'',
                    productoID:'',
                    categoria:'',
                    error: false,
                    imagePreview: null,
                    errorMsg: `Uno de los campos esta incompleto, intentelo de nuevo.`
                }
            },
            methods: {
              uploadImage(e){
                const image = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload= e=>{
                  this.previewImage = e.target.result;
                  console.log(this.imagePreview);
                };
              },
                async upload(e) {
                    try {
                        e.preventDefault()
                            await this.axios.post(`http://localhost:3001/products`, {
                            nombre: this.nombre,
                            stock: this.stock,
                            price: this.price,
                            creationDate: this.creationDate,
                            img: this.img,
                            description: this.description,
                            productoID: this.productoID,
                            categoria: this.categoria,
                            password: this.password,
                        })
                        this.$router.push('admin')
                    } catch(e) {
                        this.error = true
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