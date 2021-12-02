<template>
  <body>
      <div class="title">
        <div class="position-absolute top-0 start-50 translate-middle-x">
          <h1 class="bg secundary"> El Rey Del Crochet </h1>
              <h2>Bienvenido Administrador: {{data.user.name}}</h2>
        </div>
            <div class="menu">
                <v-list-item v-if="acceso== 2" router to="/Admin">
                  <v-list-item-icon>
                    <i class="far fa-address-card"></i>
                  </v-list-item-icon>
                  <v-list-item-title>Ingreso de productos</v-list-item-title>
                </v-list-item>
                <v-list-item  href="#" v-on:click="logout" >
                  <v-list-item-icon>
                      <i class="fa fa-window-close" aria-hidden="true"></i>
                  </v-list-item-icon>
                  <v-list-item-title>Salir sesión</v-list-item-title>
                </v-list-item>
            </div>
      </div>       
  </body> 
        
</template>
  
<script>
    import Cookies from "js-cookie";
    export default {
        data() {
            return {
                name:'',
                acceso: "2"
            }
        },
        computed: {
            userLogged() {
            return this.getUserLogged();
            },
        },
    async mounted(){
        await fetch('http://localhost:3001/users', {
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
<style >
.title {
  display:flex;
}
.menu {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 350px;
  max-width: 100%;
  background: rgba(19, 35, 47, 0.9);
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}
.v-list-item{
justify-content: center;
text-align: left;
display: grid;
}
</style>
