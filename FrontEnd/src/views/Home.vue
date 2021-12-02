<template>
  <body> 
<div class="home">
  <p v-if="userLogged" >User loggued: {{userLogged}}</p>
     
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
            <div style ="display: flex; justify-content: center; aling-items: center;">
              <img src ="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAYAAAB1PADUAAAAAklEQVR4AewaftIAAAUCSURBVO3BQY4cSRLAQDJQ//8yV0c/JZCo6F5p4Gb2B2tdcljrosNaFx3Wuuiw1kWHtS46rHXRYa2LDmtddFjrosNaFx3Wuuiw1kWHtS46rHXRYa2LPnxJ5TdVTCpTxaQyVUwqU8XfROU3VXzjsNZFh7UuOqx10YfLKm5SeVIxqUwVP0llqniiMlW8UXGTyk2HtS46rHXRYa2LPvwwlTcqvlExqUwVU8WkMlVMKk9UpoonKlPFGypvVPykw1oXHda66LDWRR/+cSpPKt6omFTeqJhUnlT8lxzWuuiw1kWHtS768B9T8YbKGxWTyqTypGJSmSr+ZYe1LjqsddFhrYs+/LCKv4nKVDGpPFGZKp6oTCo3VfxNDmtddFjrosNaF324TOVvojJVTCpTxaQyVUwqU8WTiknlDZW/2WGtiw5rXXRY66IPX6r4m6hMFT+pYlJ5o+JJxb/ksNZFh7UuOqx10YcvqUwVb6hMFZPKGxXfUHmi8kbFpDJVTCo3VTxRmSq+cVjrosNaFx3WuujDD1N5UvGkYlKZKiaVqeKNiptUpopJZaqYVL6h8psOa110WOuiw1oXffhSxaTyhsobFd9QmSomlTcqJpU3KiaVqWJSmSq+oXLTYa2LDmtddFjrog9fUnlSMalMFZPKVPFE5YnKVDGpPKmYVCaVn6QyVUwqU8UTlZ90WOuiw1oXHda66MOXKiaVJxVPKiaVNyomlScVk8qTiicqU8U3Kp5UfKPipsNaFx3Wuuiw1kX2B19QeaNiUnlSMak8qXiiMlVMKk8qJpU3KiaVqWJS+UbFpPKk4huHtS46rHXRYa2L7A8uUpkqvqHypOL/SWWqmFSmit+kMlVMKlPFNw5rXXRY66LDWhfZH/wglScVk8pUMak8qZhU3qiYVKaKJypTxU0qU8UbKk8qvnFY66LDWhcd1rrI/uALKlPFE5Wp4onKVDGpvFHxROWmikllqphUpoo3VKaKSWWquOmw1kWHtS46rHXRhx+mMlVMKlPFVDGpTBVPVCaVJxU3qUwVk8oTlTcq3lCZKr5xWOuiw1oXHda66MOXKn6SyhOVJxVvqLxRMam8UTGpPKmYVCaVJxWTyk2HtS46rHXRYa2LPvywijdUpopJ5RsqU8WTikllUnlS8UbFE5Wp4g2Vn3RY66LDWhcd1rrow5dUnlQ8qXii8kbFk4pvVDxReUPlGypPKqaKSeWmw1oXHda66LDWRR++VPGTKp6oTCpTxROVJypTxaQyVUwqU8WTijdUpor/p8NaFx3Wuuiw1kUfvqTymyqeVHyj4hsqU8Wk8obKVPFE5UnFTzqsddFhrYsOa1304bKKm1SeVEwqb1Q8UZkqpopJZVKZKiaVJxXfqJhUftJhrYsOa110WOuiDz9M5Y2KN1Smikllqnii8kTlScWkMqk8UfmXHda66LDWRYe1Lvrwj6v4hspU8Q2VNyomlaniJ1XcdFjrosNaFx3WuujDf4zKGxWTylQxqUwVU8WkMlVMKlPFb1KZKr5xWOuiw1oXHda66MMPq/hNFZPKpDJVTBVvqEwVU8Wk8obKVDGpPKn4TYe1LjqsddFhrYs+XKbym1SmiqliUnmiMlVMFb+pYlKZKiaVNypuOqx10WGtiw5rXWR/sNYlh7UuOqx10WGtiw5rXXRY66LDWhcd1rrosNZFh7UuOqx10WGtiw5rXXRY66LDWhcd1rrofwAUWUxDAVkLAAAAAElFTkSuQmCC">   
            </div> 
            </div>
</div>    
</body> 

</template>

  
<script>

import auth from "@/logic/auth";
export default {
  name: "Home",
   methods: {
      // Log out with Userfront.logout()
      handleLogout() {
        auth.logout();
      },
    },
   computed: {
    userLogged() {
      return auth.getUserLogged();
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
