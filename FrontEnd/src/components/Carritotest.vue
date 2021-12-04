<template>

    <div>
        <v-card-title><h1></h1></v-card-title>
        <div class="todo">
            <h1>Carrito de compra</h1>
            
            <div class="car_pro" v-for="item in items" :item="item" :key="item.id">
                <div class="imgsd"><img src="../assets/img/producto.jpg"></div>
                <div class="cuerpo">
                    <div class="nomc">{{item.nombre}} </div>
                    <br>
                    <div class="cant"> cantidad {{item.qty}}</div>
                </div>
<<<<<<< Updated upstream
                <div class="precio"> precio {{item.qty * item.precio}}</div>
            </div>
            
            <div class="total"> total {{total}}</div>
        </div>
=======
                <div class="precio"> Precio {{item.qty * item.precio}}</div>
            </div>   
            <div class="total"> Total {{total}}</div>     
      </div>
      <div class="my-2" v-if="total!=0">
      <v-row align="center">
        <button 
        color="success" 
        rounded
        x-large
        @click="handleSubmit">Comprar</button>
      </v-row>
      <!--v-col align="center" >
        <div title="tarjetadeCredito">
             <rebilly-form 
              @submit="submitHandler" 
              @error="onError">
              <input 
                data-rebilly="firstName" 
                placeholder="Nombre">
              <br />
              <input 
                data-rebilly="lastName"
                placeholder="Apellido">
                <br/>
              <rebilly-card></rebilly-card>

              <hr/> 

            </rebilly-form> 
          </div>
          <button type="submit">Submit</button>
      </v-col -->
>>>>>>> Stashed changes
    </div>
</template>
<script>
import logica from '../logica'
<<<<<<< Updated upstream
import _ from 'lodash'
    export default {
=======
import _ from "lodash"
import auth from "@/logic/auth";
    export default {
      /*components: {
            StripeCheckout
        },*/
        
>>>>>>> Stashed changes
        data(){
            return {
              items:logica.data.cart
            }
        },
        computed: {
           total(){
               return _.sumBy(this.items, function(it) {
                   return  (it.precio * it.qty)
                })
            },
        },
        methods:{
            test (value) {
                return _.isEmpty(value)
<<<<<<< Updated upstream
=======
            },
            async handleSubmit(e){
              e.preventDefault();
              const response =await axios.post('http://localhost:3001/orders',
              {
                cartDetail:this.item.nombre,
                cartTotal: this.total
              }
              )
>>>>>>> Stashed changes
            }
        }
    }
</script>
<style>
img {
    width:100%;
}
.imgsd {
      width:15%;  
}
.car_pro {
    display:flex;
    justify-content: space-between;
    padding: .8em;
    background-color: #fff;
    box-shadow: 0 0 10px gray;
    margin-top: .4em;
}
.todo h1 {
  text-align:center;
  background-color: #2c23aa;
  padding: .5em;
  margin:0;
  color:white;
}
.total{
    border: 1px solid black;
     padding: .5em;
}
  
</style>