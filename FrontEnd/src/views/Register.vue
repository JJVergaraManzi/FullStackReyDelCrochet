  <template>
    <div class="vue-tempalte">
        <form>
            <h3>Registrarse</h3>

            <div class="form-group">
                <label>Nombre</label>
                <input type="text" class="form-control form-control-lg"/>
            </div>

            <div class="form-group">
                <label>Email </label>
                <input type="email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Contraseña</label>
                <input type="password" class="form-control form-control-lg" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Ingresar</button>

            <p class="forgot-password text-right">
                ¿Ya se registró?
                <router-link to="/Login">Ingresé</router-link>
            </p>
        </form>
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
                    error: false,
                    errorMsg: `An Error occurred, please try again`
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
                            username: this.username
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
