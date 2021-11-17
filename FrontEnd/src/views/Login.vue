<template>
        <div>
            <div class="flex items-center justify-center h-screen">
                <div class="hidden sm:block w-1/2 bg-cover h-screen" >
                    <div class="bg-blue-800 w-full h-screen bg-opacity-20">
                    </div>
                </div>
                <div class="sm:w-1/2">
                    <div class="p-5 w-4/5 mx-auto text-left font-raleway">
                        <div class="text-left mb-10"> 
                            <router-link to="/">
                                <font-awesome-icon class="mr-5" :icon="['fas', 'arrow-left']" /> Inicio
                            </router-link> 
                        </div>
                  <v-card width="800px" class="mx-3 m-5 p-3 " 
                    >
                         <h5 class="font-weight-regular"  >
                            Ingrese a 
                        </h5>
                        <h1  class="font-italic">
                            El Rey del Crochet
                        </h1>
                        <p v-show="error" class="text-sm text-red-500">{{ errorMsg }}</p>
                             <v-text-field
                               v-model="email"
                               :rules="emailRules"
                                label="Correo Electrónico"
                                required
                            ></v-text-field>
                            <v-text-field
                               v-model="password"
                               :rules="rulesPassword"
                                label="Contraseña"

                            >
                            <input type="hidden"></v-text-field>
                        
                         <v-btn 
                                class="mx-auto"
                                rounded
                                color="blue lighten-3 "
                                width="200px"
                                @click="login">
                                Iniciar Sesión
                        <v-icon right> fas fa-arrow-right </v-icon>
                        </v-btn>
                            <p class="my-2">
                                <router-link to="/Register" >¿No tiene cuenta? ¡Registrese!</router-link>
                            </p>
                    </v-card>

                

                                
                            <!--- p class="my-2">
                                <router-link to="/Forgottenpassword" >¿Olvidó su contraseña?</router-link>
                            </p--->

                            
                    
                    </div>
                </div>
            </div>
        </div>
</template>

<script>

    export default {
            name: 'Login',
            
            data() {
                return {
                    email: '',
                    password: '',
                    accessLevel: null,
                    error: false,
                    emailRules:[
                        value => !!value || 'Por favor, ingresar un correo.',
                        value => (value && value.length >=3) || 'El correo requiere al menos 3 caracteres.'
                     ],
                    rulesPassword:[
                        value => !!value || 'Por favor, ingresar contraseña.',
                        value => (value && value.length >=6) || 'La contraseña requiere al menos 6 caracteres.'
                    ],
                   
                }
            },
            methods: {
                async login(e) {
                    e.preventDefault()
                    try {
                        const res = await this.axios.post("http://localhost:3001/auth/local/", {
                            identifier: this.email,
                            password: this.password
                        });
                        
                        const { jwt, user } = res.data
                        window.localStorage.setItem('jwt', jwt)
                        window.localStorage.setItem('userData', JSON.stringify(user))
                        this.accessLevel = this.user.esadmin
                        console.log("El admin es: ", this.accessLevel)
                        this.$router.push('/HomeAdmin/:id')
                    } catch(error) {
                        this.error = true
                        this.password = ''
                    }
                },
            }
        }
    </script>