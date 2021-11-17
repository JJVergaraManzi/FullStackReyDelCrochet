<template>
  <body>     
    
      <img class="bg-img fluid" src="../assets/lanafondo3.jpg">  
          <v-col
            class="text-center"
            cols="12">
            <div class="title">
            <div class="position-absolute top-0 start-50 translate-middle-x"><h1 class="bg secundary"> <!--cambiar el color lugar y forma del inicio -->
            El Rey Del Crochet 
            </h1>
            <h2>Bienvenido Administrador: {{name}}</h2></div>
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
                accessLevel: true
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
        console.log("El usuario es admin si o no: ",data.user.esadmin)
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
      this.accessLevel = null;
    }
  }
}
</script>

