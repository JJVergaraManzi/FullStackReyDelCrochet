<template>
    <div>
        <div class="flex items-center justify-center h-screen">
            <div class="hidden sm:block w-1/2 bg-cover h-screen" style='background: url(newFood.png)'>
                <div class="bg-blue-800 w-full h-screen bg-opacity-20">
                </div>
            </div>
            <div class="sm:w-1/2">
                <div class="p-5 w-4/5 mx-auto text-left font-raleway">
                    <v-card width="700px" class="mx-3 m-5 p-3 "> 
                        <router-link to="/login">
                            <font-awesome-icon class="mr-5" :icon="['fas', 'arrow-left']" /> Login
                        </router-link> 
                    </v-card>
                        
                    <h1 class="font-bold text-left font-montserrat text-4xl sm:text-6xl mb-10">
                        Ingrese su contraseña
                    </h1>
                        <p v-show="error" class="text-sm text-red-500">Ha ocurrido un error, intentelo de nuevo</p>
                    <v-card width="700px" class="mx-3 m-5 p-3 " >
                        <div class="my-5">
                            <h1 class="text-left font-bold mb-5 font-montserrat">Contraseña</h1>
                        <input type="password" v-model="password" class="text-sm outline-none pb-5 w-4/5 bg-transparent border-b hover:border-blue-700 focus:border-blue-700">
                        </div>
                        <div class="my-5">
                            <h1 class="text-left font-bold mb-5 font-montserrat">Confirme la contraseña</h1>
                            <input type="password" 
                            v-model="confirmPassword" 
                            class="text-sm outline-none pb-5 w-4/5 bg-transparent border-b hover:border-blue-700 focus:border-blue-700">
                        </div>
                        <v-btn 
                        rounded
                        color="blue lighten-3 "
                        :disabled="password.length < 3 || password !== confirmPassword"
                        @submit="resetPassword" 
                        class="bg-green-400 p-5 text-black">
                            Reiniciar contraseña <font-awesome-icon class="ml-3" :icon="['fas', 'arrow-right']" /> 
                        </v-btn>
                    </v-card>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
        
        export default {
            name: 'ResetPassword',
            data() {
                return {
                    password: '',
                    confirmPassword: '',
                    done: false,
                    error: false,
                }
            },
            methods: {
                async resetPassword(e) {
                    e.preventDefault()
                    this.axios.post(`http://localhost:1337/auth/reset-password`, {
                        code: this.$route.query.code,
                        password: this.password,
                        passwordConfirmation: this.confirmPassword
                    })
                    .then(() => {
                        this.done = true
                        this.$router.push("login")
                    })
                    .catch(e => {
                        e;
                        this.error = true
                    })
                }
            },
        }
</script>
<style scoped>
</style>
