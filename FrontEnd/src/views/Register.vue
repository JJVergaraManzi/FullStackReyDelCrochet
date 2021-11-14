<template>
        <div>
            <div class="flex items-center justify-center h-screen">
                <div class=" sm:block w-1/2 bg-cover h-screen">
                    <div class="bg-blue-800 w-full h-screen bg-opacity-20">
                    </div>
                </div>
                <div class="sm:w-1/2">
                    <div class="p-5 w-4/5 mx-auto text-left font-raleway">
                        <div class="text-left mb-7">
                            <router-link to="/Login">
                                <font-awesome-icon class="mr-5" :icon="['fas', 'arrow-left']" /> Ingreso de usuario
                            </router-link> 
                        </div>
                        <h1 class="font-bold text-left font-montserrat text-4xl sm:text-6xl mb-7">
                            Registrese para ingresar al Rey del crochet
                        </h1>
                        <p v-show="error" class="text-sm text-red-500">{{ errorMsg }}</p>
                        <form @submit="register">
                            <div class="form-group col-md-3">
                                <h1 class="text-left font-bold mb-2 font-montserrat">Nombre</h1>
                                <input type="text" v-model="name" class="text-sm outline-none pb-2 w-4/5 bg-transparent border-b hover:border-black-700 focus:border-black-700" placeholder="Ingrese su nombre">
                            </div>
                            <div class="form-group col-md-3">
                                <h1 class="text-left font-bold mb-2 font-montserrat">Email</h1>
                                <input type="email" v-model="email" class="text-sm outline-none pb-2 w-4/5 bg-transparent border-b hover:border-black-700 focus:border-black-700" placeholder="Ingrese su email">
                            </div>
                            <div class="form-group col-md-3">
                                <h1 class="text-left font-bold mb-2 font-montserrat">Contraseña</h1>
                                <input type="password" v-model="password" class="text-sm outline-none pb-2 w-4/5 bg-transparent border-b hover:border-black-700 focus:border-black-700" placeholder="Ingrese su contraseña">
                            </div>
                            <div class="form-group col-md-3">
                                <h1 class="text-left font-bold mb-2 font-montserrat">Dirección</h1>
                                <input type="text" v-model="address" class="text-sm outline-none pb-2 w-4/5 bg-transparent border-b hover:border-black-700 focus:border-black-700" placeholder="Ingrese su nombre de usuario">
                            </div>
                            <div class="form-group col-md-3">
                                <h1 class="text-left font-bold mb-2 font-montserrat">Numero de dirección</h1>
                                <input type="text" v-model="addressnumber" class="text-sm outline-none pb-2 w-4/5 bg-transparent border-b hover:border-black-700 focus:border-black-700" placeholder="Ingrese su numero de direccion">
                            </div>
                            <div class="form-group col-md-3">
                                <h1 class="text-left font-bold mb-2 font-montserrat">Numero de telefono</h1>
                                <input type="text" v-model="movil" class="text-sm outline-none pb-2 w-4/5 bg-transparent border-black hover:border-black-700 focus:border-black-700" placeholder="Ingrese su numero de telefono">
                            </div>
                            <input type="checkbox" checked data-toggle="toggle" data-on="Admin" data-off="Usuario comun" data-onstyle="success" data-offstyle="danger">
                            <button type="submit" :disabled="name.length < 6 || password.length < 6 || username.length < 3" class="bg-green p-5 text-black">
                                Sign Up <font-awesome-icon class="ml-3" :icon="['fas', 'arrow-right']" /> 
                            </button>
                        </form>
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
                    address:'',
                    addressnumber:'',
                    movil:'',
                    esadmin:'',
                    error: false,
                    errorMsg: `No ingresó todo los campos, intentelo nuevamente`
                }
            },
            methods: {
                async register(e) {
                    try {
                        e.preventDefault()
                            await this.axios.post(`http://localhost:1337/auth/local/register`, {
                            name: this.name,
                            password: this.password,
                            email: this.email,
                            username: this.username,
                            address: this.address,
                            addressnumber: this.addressnumber,
                            movil: this.movil,
                            esadmin:this.esadmin
                        })
                        this.$router.push('login')
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
