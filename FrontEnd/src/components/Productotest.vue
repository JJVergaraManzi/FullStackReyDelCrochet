<template>
 <div class="container">
    <div class="global">
    <div class="producto">
            <div class="card mb-3" style="width: 18rem;"> <!--tamaño imagen -->
                <div class="col-md-26">
                  <img 
                        :src="`http://localhost:3001${producto.img[0].url}`"
                        class=" w-75 mx-auto d-block img-thumbnail" 
                        alt=""
                        />   <!--Imagen de strapi -->
                </div>
                <div class="row py-3">
                            <h5 class="card-title">{{producto.nombre}}</h5>
                            <p class="card-text">{{producto.description}}</p>
                            <p class="card-text">Unidades disponibles: {{producto.stock}}</p>
                            <ul class="col mr-1 row justify-content-center ">
                                <li class=" col mr-2 categoriaxd-item badge text-light " style=""
                                v-for="categoriaxd in producto.categories"
                                :key="categoriaxd.id" >

                                 <div class="mr-2">{{categoriaxd.name}} </div>
                                </li>
                            </ul>
                            <span class=" qty" v-if="qtyCart>0">Cantidad {{qtyCart}}</span>
                
                
                    <div>
                        <div class=" col row justify-content-center"> <strong> Precio: ${{producto.precio}}  </strong></div>
                        <button class="btn" v-if="qtyCart===0" @click="addToCart"><a href="#" class="p-1 mb-2 bg-dark text-white aling-items-center">Agregar al carro</a> </button>
                        <div class="botones justify-end" v-else>
                            <div v-if="producto.stock!==qtyCart">
                                <button class="botones btns" @click="inc"><p class="p-2 mb-3 bg-success text-white aling-items-center">+</p></button>
                            </div>
                                <button class="botones btns" @click="dec"><p class="p-2 mb-3 bg-danger text-white aling-items-center">-</p></button>
                            
                        </div>

                    </div>   
                </div>
                
            </div>
        
    </div>
    </div>
 </div>
</template>
<script>
import _ from 'lodash'
import logica from '../logica'

export default {
    props:['producto'],
    data(){
        return {
            shared:logica.data
        }
    },
    computed: {
        qtyCart(){
            var busqueda = _.find(this.shared.cart, ['id',this.producto.id])
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
            logica.add(this.producto)
        },
        inc(){
            logica.inc(this.producto)
        },
        dec(){
            logica.dec(this.producto)
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