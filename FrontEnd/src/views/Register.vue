<template>
        <div>
            <div class="flex items-center justify-center h-screen">
                <div class="hidden sm:block w-1/2 bg-cover h-screen" >
                    <div class="bg-blue-800 w-full h-screen bg-opacity-20">
                    </div>
                </div>
                <div class="sm:w-1/2">
                    <div class="p-5 w-4/5 mx-auto text-left font-raleway">
                        <v-card width="120px" class="mx-3 m-5 p-3 "> 
                            <router-link to="/">
                                <font-awesome-icon class="mr-5" :icon="['fas', 'arrow-left']" /> Inicio
                            </router-link> 
                        </v-card>
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
                               v-model="name"
                               :rules="nameRules"
                                label="Nombre"
                                required
                            ></v-text-field>
                             <v-text-field
                                v-model="username"
                                :rules="userNameRules"
                                label="Nombre de Usuario"
                                required
                            ></v-text-field>
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
                            ><input type="hidden"></v-text-field>
                            <v-text-field
                                v-model="address"
                                :rules="rulesAddress"
                                label="Dirección"
                            ></v-text-field>
                            <v-text-field
                                v-model="addressnumber"
                                :rules="rulesAddressnumber"
                                label="Numero de dirección"
                            ></v-text-field>
                            <v-text-field
                                v-model="movil"
                                hide-details
                                single-line
                                :rules="rulesMovil"
                                type="number"
                                label="Numero de telefono"
                            ></v-text-field>
                        <div>
                        <input 
                            type="checkbox" 
                            label="¿Es admin?"
                            v-model="esadmin" 
                            checked 
                            data-toggle="toggle" 
                            data-on="true" 
                            data-off="false" 
                            data-onstyle="success" 
                            data-offstyle="danger">
                        </div>
                        <p>¿es administrador?</p>
                         <v-btn 
                                class="mx-auto"
                                rounded
                                color="blue lighten-3 "
                                width="200px"
                                @click="login">
                                Registrese
                        <v-icon right> fas fa-arrow-right </v-icon>
                        </v-btn>
                            <p class="my-2">
                                <router-link to="/Login" >¿Tiene cuenta? Ingrese!</router-link>
                            </p>
                    </v-card>
                    </div>
                </div>
            </div>
        </div>
</template>

                            
                          
<script>
    export default {
        name: 'Register',
        data() {
            return {
                name: '',
                email: '',
                password: '',
                username: '',
                address: '',
                addressNumber: '',
                movil: '',
                esadmin: '',
                error: false,
                errorMsg: `Ha ocurrido un error, ingrese de nuevo los datos`,
                emailRules:[
                        value => !!value || 'Por favor, ingresar un correo.',
                        value => (value && value.length >=3) || 'El correo requiere al menos 3 caracteres.'
                     ],
                rulesPassword:[
                        value => !!value || 'Por favor, ingresar contraseña.',
                        value => (value && value.length >=6) || 'La contraseña requiere al menos 6 caracteres.'
                    ],
                rulesAddress:[
                        value => !!value || 'Por favor, ingresar la dirección.',
                        value => (value && value.length >=6) || 'La dirección requiere al menos 6 caracteres.'
                    ],
                rulesAddressnumber:[
                        value => !!value || 'Por favor, ingresar numero de dirección.',
                        value => (value && value.length >=2) || 'numero de dirección requiere al menos 2 caracteres.'
                    ],
                rulesMovil:[
                        value => !!value || 'Por favor, ingresar numero de dirección.',
                        value => (value && value.length <=0 && value.length >=8) || 'numero de dirección requiere al menos 2 caracteres.'
                    ],
            }
        },
        methods: {
            async register(e) {
                try {
                    e.preventDefault()
                        await this.axios.post(`http://localhost:3001/auth/local/register`, {
                        name: this.name,
                        password: this.password,
                        email: this.email,
                        username: this.username,
                        address: this.address,
                        addressNumber: this.addressNumber,
                        movil: this.movil,
                        esadmin: this.esadmin
                    })
                    this.$router.push('register')
                } catch(e) {
                    this.error = true
                    this.email = ''
                } 
            }
        }
    }
</script>
<style scoped>
</style>

