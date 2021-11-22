<template>
        <div>
            <div class="flex items-center justify-center h-screen">
                <div class="hidden sm:block w-1/2 bg-cover h-screen" style='background: url(newFood.png)'>
                    <div class="bg-blue-800 w-full h-screen bg-opacity-20">
                    </div>
                </div>
                <div class="sm:w-1/2">
                    <div class="p-5 w-4/5 mx-auto text-left font-raleway">
                        <v-card width="250px" class="mx-3 m-5 p-3 "> 
                            <router-link to="/login">
                                <font-awesome-icon class="mr-5" :icon="['fas', 'arrow-left']" /> Ingreso de usuario
                            </router-link> 
                        </v-card>
                        
                        <h1 class="font-bold text-left font-montserrat text-4xl sm:text-6xl mb-10">
                            Recupere su contraseña
                        </h1>
                        <p v-show="done" class="text-sm text-green-500">Password reset link has been sent to {{ email }}</p>
                        <p v-show="error" class="text-sm text-red-500">An error occurred</p>
                        <v-card width="700px" class="mx-3 m-5 p-3 "> 
                            <v-text-field >
                                <h1 class="text-left font-bold mb-5 font-montserrat">Email</h1>
                                <v-text-field 
                                class="mx-auto"
                                type="email" 
                                v-model="email"
                                label="Ingrese su correo electronico" 
                                ></v-text-field>
                            </v-text-field>
                            
                            <v-btn 
                            rounded
                            color="blue lighten-3 "
                            width="200px" 
                            @submit="forgotPassword"
                            class="bg-green-400 p-5 text-black">
                                Envia link al E-mail
                                <v-icon right> fas fa-arrow-right </v-icon> 
                            </v-btn>
                        </v-card > 
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
export default {
    name: 'ForgotPassword',     
    data() {
        return {
            email: '',
            done: false,
            error: false,
        }   
    },    
methods: {
    async forgotPassword(e) {
        e.preventDefault()
            this.done = false;
            this.error = false;
            this.axios.post(`http:/localhost:1337/admin/plugins/users-permissions/auth/reset-password`, {
                email: this.email
            })
            .then(() => {
                this.done = true
                console.log("Mail enviado ");
            })
            .catch(e => {
                e;
                this.error = true
                console.log();
                console.log("No se logró enviar");
            })    
        }
    }
}
</script>
<style scoped>
</style>
