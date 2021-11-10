
<template>
    <div class="vue-template">
        <form>
            <h3>Ingresar</h3>

            <div class="form-group">
                <label>Email </label>
                <input type="email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Contraseña</label>
                <input type="password" class="form-control form-control-lg" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Sign In</button>

            <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/Resetpassword">Olvidó la contraseña?</router-link>
            </p>
            <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/Register">Registrarse</router-link>
            </p>


        </form>
    </div>
</template>
    <script>
       
        export default {
            name: 'Login',
            
            data() {
                return {
                    email: '',
                    password: '',
                    error: false,
                    errorMsg: `An error occurred, please try again`
                }
            },
            methods: {
                async login(e) {
                    e.preventDefault()
                    try {
                        const res = await this.axios.post(`http://localhost:1337/auth/local`, {
                            identifier: this.email,
                            password: this.password
                        });
                        
                        const { jwt, user } = res.data
                        window.localStorage.setItem('jwt', jwt)
                        window.localStorage.setItem('userData', JSON.stringify(user))
                        window.localStorage.setItem('bookmarks', JSON.stringify(user.bookmarks))
                        this.$router.push('/')
                    } catch(error) {
                        this.error = true
                        this.password = ''
                    }
                },
            }
        }
    </script>
    <style scoped>
    </style>
