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
                                <label for="inputName">nombre</label>
                                <input type="text" class="form-control" id="name" v-model="name">
                            </div>
                            <div class="form-group col-md-3">
                                <label for="inputName">Nombre de usuario</label>
                                <input type="text" class="form-control" id="username" v-model="username">
                            </div>
                            <div class="form-group col-md-3">
                                <label for="inputName">Email</label>
                                <input type="text" class="form-control" id="email" v-model="email">
                            </div>
                            <div class="form-group col-md-3">
                                <label for="inputName">Contraseña</label>
                                <input type="text" class="form-control" id="password" v-model="password">
                            </div>
                            <div class="form-group col-md-3">
                                <label for="inputName">Dirección</label>
                                <input type="text" class="form-control" id="address" v-model="address">
                            </div>
                            <div class="form-group col-md-3">
                                <label for="inputName">Numero de dirección</label>
                                <input type="text" class="form-control" id="addressnumber" v-model="addressnumber">    
                            <div class="form-group col-md-3">
                                <label for="inputName">Numero de telefono</label>
                                <input type="text" class="form-control" id="movil" v-model="movil">
                            <input type="checkbox" v-model="esadmin" checked data-toggle="toggle" data-on="Admin" data-off="Usuario comun" data-onstyle="success" data-offstyle="danger">
                            <button type="submit"  class="bg-green p-5 text-black">
                                Registrar <font-awesome-icon class="ml-3" :icon="['fas', 'arrow-right']" /> 
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
                    esadmin: false,
                    error: false,
                    errorMsg: `No ingresó todo los campos, intentelo nuevamente`
                }
            },
            methods: {
                async register(e) {
                    try {
                        e.preventDefault()
                            await this.axios.post(`http://localhost:3001/auth/local/register`, {
                            password: this.password,
                            email: this.email,
                            username: this.username,
                            address: this.address,
                            addressnumber: this.addressnumber,
                            movil: this.movil,
                            esadmin:this.esadmin
                        })
                        this.$router.push('/login')
                    } catch(e) {
                        this.error = true
                    } 
                }
            }
        }
    </script>
    <style scoped>
    </style>
