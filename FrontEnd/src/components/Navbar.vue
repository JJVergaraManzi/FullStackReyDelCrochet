<template>
    <v-navigation-drawer 
    permanent floating dark app src="https://blog.tejeme.com/wp-content/uploads/2019/10/orgu.jpg" >
    <v-list>
      <a class="navbar-brand" href="/">
      <img src="../assets/logo.jpg" alt="" height="200">
    </a> 
        <v-list-item router to="/">
          <v-list-item-icon>
            <v-icon>fas fa-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Inicio  </v-list-item-title>
        </v-list-item>
        <p v-if="userLogged == null" >
        <v-list-item router to="/Login">
          <v-list-item-icon>
            <i class="far fa-address-card"></i>
          </v-list-item-icon>
          
          <v-list-item-title>Ingreso de Administrador </v-list-item-title>
        </v-list-item>
          
        <v-list-item  router to="/contacto">
          <v-list-item-icon>
            <v-icon>fas fa-phone-alt</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Contacto</v-list-item-title>
        </v-list-item>
         
        <v-list-item router to="/tienda">
            <v-list-group
              :value="false"
              prepend-icon="fas fa-store">

              <template v-slot:activator>
                <v-list-item-title>Tienda</v-list-item-title>
              </template>
              

                <v-list-item router to="/agujas">
                  <v-list-item-icon>
                    <v-icon>fas fa-caret-right</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Agujas</v-list-item-title>
                </v-list-item>

                <v-list-item router to="/accesorios">
                  <v-list-item-icon>
                    <v-icon>fas fa-caret-right</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Accesorios</v-list-item-title>
                </v-list-item>

                <v-list-item router to="/crochet">
                  <v-list-item-icon>
                    <v-icon>fas fa-caret-right</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Crochet</v-list-item-title>
                </v-list-item>

                <v-list-item router to="/lanas">
                  <v-list-item-icon>
                    <v-icon>fas fa-caret-right</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Lanas</v-list-item-title>
                </v-list-item>

                <v-list-item router to="/lanasbaby">
                  <v-list-item-icon>
                    <v-icon>fas fa-caret-right</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>LanasBaby</v-list-item-title>
                </v-list-item>

                <v-list-item router to="/palillos">
                  <v-list-item-icon>
                    <v-icon>fas fa-caret-right</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Palillos</v-list-item-title>
                </v-list-item>
                
                <v-list-item router to="/tijeras">
                  <v-list-item-icon>
                    <v-icon>fas fa-caret-right</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Tijeras</v-list-item-title>
                </v-list-item>

                <v-list-item router to="/trapillo">
                  <v-list-item-icon>
                    <v-icon>fas fa-caret-right</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Trapillo</v-list-item-title>
                </v-list-item>
                
            </v-list-group>
            <v-container fluid>
        <v-row>
          <v-col        
          cols="12"
          sm="12"
          md="6"
          offset-md="3">
            <v-card
            >
                <v-fab-transition>
                  <v-btn router to="/carritojaja" color="cyan accent-3"
                  dark
                  absolute
                  top
                  right
                  fab>
                    <v-icon dark>
                      fa fa-shopping-cart
                    </v-icon>
                  </v-btn>               
                </v-fab-transition>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
        </v-list-item></p>
        <p v-if="userLogged" >
                  <v-list-item router to="/Admin">
                  <v-list-item-icon>
                    <i class="far fa-address-card"></i>
                  </v-list-item-icon>
                  <v-list-item-title>Ingreso de productos</v-list-item-title>
                </v-list-item>
                <v-list-item router to="/register">
                  <v-list-item-icon>
                    <i class="far fa-address-card"></i>
                  </v-list-item-icon>
                  <v-list-item-title>Agregar usuario</v-list-item-title>
                </v-list-item>
                 <v-list-item router to="/Visita">
                  <v-list-item-icon>
                    <i class="far fa-address-card"></i>
                  </v-list-item-icon>
                  <v-list-item-title>Ver productos </v-list-item-title>
                </v-list-item>
           <v-list-item class="mb-8">
                    <v-list-item-action >
                        <button @click="logout"><v-icon>fas fa-sign-out-alt</v-icon></button>
                    </v-list-item-action>
                </v-list-item>
        </p>
      </v-list>
      
    </v-navigation-drawer>
    
</template>

<script>
import Cookies from "js-cookie";
export default {
    data() {
        return {
            acceso: null,
        }
    },
    computed: {
        userLogged() {
        return this.getUserLogged();
    },
    },
    async mounted(){
        await fetch(`http://localhost:3001/users`, {
                    method: 'GET',
                    headers: {
                        'Accept' : 'application/json',
                        'Content-type':'application/json',
                        token : this.getUserLogged()
                        }
        })
        .then(res => res.json())
        .then(data => {
        this.acceso = data.users.acceso
        });
  },  
  methods: {
    getUserLogged() {
      return Cookies.get("userLogged");
    },
    deleteUserLogged() {
      Cookies.remove('userLogged');
    },
    logout() {
      localStorage.clear();
      this.deleteUserLogged()
      this.$router.push('/login');
      this.acceso = null;
    }
  }
}
</script>