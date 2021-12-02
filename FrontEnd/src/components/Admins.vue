<template>
  <form>
  <v-card width="800px" class="mx-3 m-5 p-3 ">
    <div class="form-row">
    <h1>Ingrese su producto</h1>
    <div class="form-group col-md-3">
      <label for="inputprecio">Precio</label>
      <input 
      type="number" 
      v-model="precio"
      class="form-control" 
      id="precio" >
    </div>
    <div class="form-group col-md-3">
      <label for="inputName">Nombre</label>
      <input 
      type="text" 
      class="form-control" 
      id="nombre">
    </div>
    <div class="form-group">
    <div class="form-group col-md-3">
      <label for="inputDescription">Descripción</label>
      <input 
      type="text" 
      v-model="description"
      class="form-control" 
      id="description" 
      rows="3">
    </div>
    <div class="form-group col-md-3">
      <label for="inputStock">Cantidad</label>
      <input 
      type="number" 
      v-model="stock"
      class="form-control" 
      id="stock">
    </div>
  </div>
  
  <div class="form-group col-md-3">
    <label for="inputDate">Fecha de ingreso</label>
    <input 
    type="date" 
    v-model="creationDate"
    class="form-control" 
    id="creationDate"                                                                                                                                                                                                             
    placeholder="Ingrese su  fecha">
  </div>
  <div class="form-group col-md-3">                                 
      <label for="inputIdProduct">Id del producto</label>
      <input 
      type="text" 
      v-model="productoID"                                                                                                                                                                                                                                                                                                     
      class="form-control" 
      id="productoID">
    </div>
  </div>
  <div class="form-group col-md-4">
    <label for="inputCategory">Categoria</label>
    <select  class="form-control" v-model="categories"
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
  
    
  
  <button type="submit" class="btn btn-primary col-md-4">Ingresar producto</button>
  </v-card>
</form>
</template>

<script>
        import auth from "@/logic/auth";
        export default {
            data:() =>( {
                    precio:'',
                    nombre:'',
                    description:'',
                    stock:'',                    
                    creationDate:'',
                    productoID:'',
                    categories:'',
                    img:'',                
                    error: false,
                    Rules:[
                        value => !!value || "Por favor, ingrese los datos."
                     ],
                    errorMsg: "Uno de los campos esta incompleto, intentelo de nuevo."
            }),
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
                async agregar() {
                    try {
                            await auth.agregar(this.precio,this.nombre,this.description,this.stock,this.creationDate, this.ProductoID, this.categories, this.img);
                            const prod = { 
                              precio: this.precio,
                              nombre: this.nombre,
                              description: this.description,
                              stock: this.stock,
                              creationDate: this.creationDate,
                              productoID: this.ProductoID,
                              categories: this.categories,
                              img: this.img,
                            };                       
                            
                              auth.agregar(prod);         
                              this.$router.push("/");
                            } catch(error) {
                              console.log(error);
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