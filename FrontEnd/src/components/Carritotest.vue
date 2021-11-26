<template>

    <div>
        <v-card-title><h1></h1></v-card-title>
        <div class="todo">
            <h1>Carrito de compra</h1>
            <div class="car_pro" v-for="item in items" :item="item" :key="item.id">
                <div class="imgsd">
                    <img :src="`http://localhost:3001${item.img[0].url}`"
                        class="img-thumbnail img-fluid" 
                        alt="">
                </div>
                <div class="cuerpo">
                    <div class="nomc">{{item.nombre}} </div>
                    <br>
                    <div class="cant"> cantidad {{item.qty}}</div>
                </div>
                <div class="precio"> precio {{item.qty * item.precio}}</div>



            </div>
        </div> 
            <div class="total"> total {{total}}</div>
    </div>
</template>
<script>
import logica from '../logica'
import _ from 'lodash'
    export default {
        props:['producto'],
        data(){
            return {
              shared:logica.data,
              items:logica.data.cart

            }
        },
        computed: {
            total(){
               return _.sumBy(this.items, function(it) {
                   return  (it.precio * it.qty)
                })
            },
            qtyCart(){
                var busqueda = _.find(this.items.cart, ['id',this.item.id])
                if(typeof busqueda == 'object'){
                    return busqueda.qty
                }else{
                    return 0;
                }
            }
        },
        methods:{
            test (value) {
                return _.isEmpty(value)
            },
            addToCart(){
                logica.add(this.items)
            },
            inc(){
                logica.inc(this.items)
            },
            dec(){
                logica.dec(this.items)
            }
        }
    }
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