<template>
  <div>
    <template v-if="userLogged">
  <body> 
  <div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Bienvenido Administrador</h4>
</div>                          
</body> 
  </template>
  <template v-if!="userLogged">
  <body> 
  <div class="home">     
<div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="https://i.pinimg.com/originals/1b/e2/a0/1be2a05d05fe0d34781212bb9a8fc9bd.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Bienvenido al Rey del Crochet</h5>
        <p>Los mejores productos de lana</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000" style=" height:100v">
      <img src="http://www.10rowsaday.com/wp-content/uploads/2019/06/five-needles1.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
         <h5>Bienvenido al Rey del Crochet</h5>
        <p>Los mejores productos de lana</p>
      </div>
    </div>
    <div class="carousel-item" >
      <img src="https://st.depositphotos.com/1177973/4920/i/600/depositphotos_49204047-stock-photo-colorful-clews-and-crochet-hooks.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
         <h5>Bienvenido al Rey del Crochet</h5>
  
        <p>Los mejores productos de lana</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
 </div>
          <div class="position-absolute bottom-0 start-50 translate-middle-x">
             <div style="display: flex; justify-content: center; align-items: center;">
  <img src="data:image/png;base64,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">
  </div>
            </div>
                
</div>                             
</body> 
  </template>
    
  </div>
   
</template>

<script>

import auth from "@/logic/auth";
export default {
  name: "Home",
  computed: {
    userLogged() {
      return auth.getUserLogged();
    },
     getProducts(){
    return auth.get("products");
  },  
    
   methods: {
      // Log out with Userfront.logout()
      handleLogout() {
        auth.logout();
      },
    },
    
   
  

  }
  
};
</script>
<style> 
#app {
  background: url(https://img.freepik.com/foto-gratis/lana-amarilla-azul-espacio-abajo_23-2147691792.jpg?size=626&ext=jpg)
    no-repeat;
    background-position: fluided;
    background-size: cover;
}
.carousel-item  {
  height: 25rem;
  position:absolute;
 
}




</style>
