<template>

    <div>
        
        <v-card-title><h1></h1></v-card-title>
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
                <div class="total"> Total {{total}}</div>
                <div><a class="button" href="https://sandbox-portal.secure-payments.app/checkout/ec8d98bb-bfea-4968-a556-763f19d4bec1/information">Comprar!</a></div>
                <div class="rebilly-instruments-summary"></div>
                <div class="rebilly-instruments"></div>
            </div>
                
            
        </div>
    </div>
</template>
<script>
import RebillyInstruments from '@rebilly/instruments';
import logica from '../logica'
import _ from 'lodash'
    export default {
    props:['producto'],
        data(){
            return {
              shared:logica.data,
            }
        },
        computed: {
            total(){
               return _.sumBy(this.items, function(it) {
                   return  (it.precio * it.qty)
                })
            }
        }
    }
RebillyInstruments.mount({
  publishableKey: 'sk_live_bcdRFSV_k0M7_Ayxu5CQuBjslrZgzqZmgXl2-gd',
  organizationId: '	rey-del-crochet',
  websiteId: 'reydelcrochet.cl',
  apiMode: 'sandbox',
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

// Optional

RebillyInstruments.on('instrument-ready', (instrument) => {

  console.info('instrument-ready', instrument);

});

RebillyInstruments.on('purchase-completed', (purchase) => {

  console.info('purchase-completed', purchase);

});
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
  
</style>