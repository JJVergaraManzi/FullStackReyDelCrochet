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
                               :rules="namesRules"
                                label="Nombre"
                                required
                            ></v-text-field>
                             <v-text-field
                                v-model="username"
                                :rules="usernameRules"
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
                                @click="register">
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
    class Task{
        constructor(name,username,password,address,addressNumber,movil)
        {
            this.name=name;
            this.username=username;
            this.password=password;
            this.address=address;
            this.addressNumber=addressNumber;
            this.movil=movil
        }
    }
    export default {
        name: 'Register',
        data() {
            return {
                namesRules:[
                    value => !!value ||'Por favor, ingrese un nombre'

                ],
                usernameRules:[
                    value => !!value ||'Por favor, ingrese un nombre de usuario'

                ],
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
                        value => !!value || 'Por favor, ingresar numero de telefono.',
                        value => (value && value.length <=0 && value.length >=8) || 'El número de telefono tiene que ser de 9 digitos.'
                    ],
                task: new Task(),
                tasks: [],
                name: '',
                email: '',
                password: '',
                username: '',
                address: '',
                addressNumber: '',
                movil: '',
                esadmin: false,
                error: false,
                errorMsg: `Ha ocurrido un error, ingrese de nuevo los datos`,
                
            }
        },
        computed: {
            userLogged() {
            return this.getUserLogged();
            },
        },
        async created() {
            if (typeof this.userLogged === 'undefined') {
                this.$router.push('/login');
            }
            this.getTasks();
        }
        ,
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
            this.esadmin = data.user.admin
            if(this.accessLevel != true){
                this.$router.push('/login');
                console.log("error")
            }
            this.name = data.user.name;
            this.username = data.user.username
            
            });
        },
        methods: {
            async register(e) {
                try {
                    e.preventDefault()
                        await this.axios.post(`http://localhost:3001/users`, {
                        name: this.name,
                        password: this.password,
                        email: this.email,
                        username: this.username,
                        address: this.address,
                        addressNumber: this.addressNumber,
                        movil: this.movil,
                        esadmin: this.esadmin
                    })
                    this.$router.push('/HomeAdmin')
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

