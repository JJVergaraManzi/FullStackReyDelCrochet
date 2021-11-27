<template>
  <body>     
        <v-col
            class="text-center"
            cols="12">
            <div class="title">
            <div class="position-absolute top-0 start-50 translate-middle-x"><h1 class="bg secundary"> <!--cambiar el color lugar y forma del inicio -->
            El Rey Del Crochet 
            </h1>
            <h2>Bienvenido Comprador: {{name}}</h2></div>
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
        </v-list-item>
            <v-list-item  href="#" v-on:click="logout" >
                <v-list-item-icon>
                    <i class="fa fa-window-close" aria-hidden="true"></i>
                </v-list-item-icon>
                <v-list-item-title>Salir sesión</v-list-item-title>
            </v-list-item>
            </div>         
            </v-col>
            <div>
                <v-list-item  href="#" v-on:click="logout" >
                     <v-list-item-icon>
                        <i class="fa fa-window-close" aria-hidden="true"></i>
                     </v-list-item-icon>
                    <v-list-item-title>Salir sesión</v-list-item-title>
                </v-list-item>    
            </div> 
  </body>     
</template>
  
<script>
    import Cookies from "js-cookie";
    export default {
        data() {
            return {
                name:'',
                acceso: true
            }
        },
        computed: {
            userLogged() {
            return this.getUserLogged();
            },
        },
    async mounted(){
        await fetch('http://localhost:3001/api/users/user', {
                    method: 'GET',
                    headers: {
                        'Accept' : 'application/json',
                        'Content-type':'application/json',
                        token : this.getUserLogged()
                        }
        })
        .then(res => res.json())
        .then(data => {
        this.name = data.user.name
        console.log("El usuario es admin si o no: ",data.user.acceso)
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

