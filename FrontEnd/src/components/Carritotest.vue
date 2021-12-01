<template>

    <div>      
      <div class="todo">
            <h1>Carrito de compras</h1>
            <div class="car_pro" v-for="item in items" :item="item" :key="item.id">
                <div class="imgsd">
                    <img :src="`http://localhost:3001${item.img[0].url}`"
                        class="img-thumbnail img-fluid" 
                        alt="">
                </div>
                <div class="cuerpo">
                    <div class="nomc">{{item.nombre}} </div>
                    <br>
                    <div class="cant"> Cantidad {{item.qty}}</div>
                </div>
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
        @click="handleSubmit"></button>
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
    </div>
  </div>
</template>
<script>
import logica from '../logica'
import _ from "lodash"
    export default {
      /*components: {
            RebillyForm,
            RebillyCard,
        },*/
        
        data(){
            return {
              items: logica.data.cart
            }
        },
        computed: {
            total(){
               return _.sumBy(this.items, function(it) {
                   return  (it.precio * it.qty)
                })
            }
        },
        methods:{
            test (value) {
                return _.isEmpty(value)
            },
            async handleSubmit(e){
              e.preventDefault();
              /*const response = await this.$http.$post(
                `http://localhost:3001/orders`,{

                }
              )*/
            }
    }

    }
/*RebillyInstruments.mount({
  publishableKey: 'sk_live_bcdRFSV_k0M7_Ayxu5CQuBjslrZgzqZmgXl2-gd',
  organizationId: '	rey-del-crochet',
  websiteId: 'reydelcrochet.cl',
  apiMode: 'sandbox',
  money:{
    amount: (logica.data.cart.qty * logica.data.cart.precio),
    currency: 'CLP',
  },
  paymentInstruments: {
    address: {
      name: 'combined',
      region: 'split',
    }
  },
  items: [
    {
      planId: 'my-plan-id',
      quantity: 1
    },

  ]

});
const configuration = {
    publishableKey: 'sk_live_bcdRFSV_k0M7_Ayxu5CQuBjslrZgzqZmgXl2-gd',
    injectStyle: true,
};
Vue.use(FramePay, configuration);

// Optional

RebillyInstruments.on('instrument-ready', (instrument) => {

  console.info('instrument-ready', instrument);

});

RebillyInstruments.on('purchase-completed', (purchase) => {

  console.info('purchase-completed', purchase);

});*/
</script>
<style>
img {
    width:100%;
}
.imgsd {
      width:25%;  
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
.title {
  margin: 100 px 0;
  text-align: center;

}
body {
  background: rgb(248, 7, 7);
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
.btns {
    width:50%;
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
.ingresar {
    position: relative;
    border: none;
    padding: 8px 16px;
    color: #FFF;
    margin: 0 auto;
    border-radius: 8px;
    background: #1abc9c;
    font-size: 18px;
    text-align: center;
    font-style: normal;
    width: 100%;
    box-shadow: 0 10px 30px 0 rgba(26, 188, 156, 0.5);
    transition: all 0.4s;
}
input {
  background-color: #fff;
  height: 36px;
  padding: 0 8px;
  width:100%;
  display: block;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px 0 rgba(161,178,193,.3);
  border: 1px solid #c4ced8;
  transition: border .15s ease,-webkit-box-shadow .15s ease;
  transition: border .15s ease,box-shadow .15s ease;
  transition: border .15s ease,box-shadow .15s ease,-webkit-box-shadow .15s ease;
  box-sizing: border-box;
  position: relative;
  outline: 0;
  color: #0d2b3e;
  font-family: Roboto,sans-serif;
  font-size: 16px;
  background-color: transparent;
  color: #000;
}

button {
    position: relative;
    border: none;
    padding: 8px 16px;
    color: #FFF;
    margin: 0 auto;
    border-radius: 8px;
    background: #1abc9c;
    font-size: 18px;
    text-align: center;
    font-style: normal;
    width: 100%;
    box-shadow: 0 10px 30px 0 rgba(26, 188, 156, 0.5);
    transition: all 0.4s;
}

button:hover {
    background: #000000;
    box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
}
  
</style>