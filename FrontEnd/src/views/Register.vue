<template>
  <div class="register">
    <h1 class="title">Regístrate en El rey del crochet</h1>
    <form action class="form" @submit.prevent="register">
        <label class="form-label" for="#username">Nombre de usuario:</label>
      <input
        v-model="username"
        class="form-input"
        type="username"
        id="username"
        required
        placeholder="Usuario"
      > 
    <label class="form-label" for="#name">Nombre:</label>
      <input
        v-model="name"
        class="form-input"
        type="name"
        id="name"
        required
        placeholder="Nombre"
      > 
      <label class="form-label" for="#password">Password:</label>
      <input
        v-model="password"
        class="form-input"
        type="password"
        id="password"
        required
        placeholder="****"
      >
      
      <label class="form-label" for="#email">Email:</label>
      <input
        v-model="email"
        class="form-input"
        type="email"
        id="email"
        required
        placeholder="ej:ejemplo@ejemplo.com"
      >
      
      <label class="form-label" for="#Address">Dirección:</label>
      <input
        v-model="address"
        class="form-input"
        type="Address"
        id="Address"
        placeholder="ej:Santiago"
      >
       <label class="form-label" for="#Addressnumber">Número de la direccion:</label>
      <input
        v-model="AddressNumber"
        class="form-input"
        type="Addressnumber"
        id="Addressnumber"
        placeholder="ej:123"
      >
      <label class="form-label" for="#Movil">Contacto:</label>
      <input
        v-model="Movil"
        class="form-input"
        type="Movil"
        id="Movil"
        placeholder="ej:5691234567"
      >
      <input class="form-submit" type="submit" value="Agregar">

    </form>
  </div>
</template>

<script>
import auth from "@/logic/auth";
export default {
  data: () => ({
    username: "",
    name: "",
    email: "",
    password: "",
    Address: "",
    AddressNumber: "",
    Movil: "",
    error: false
  }),
  methods: {
    async register() {
      try {
        await auth.register(this.username,this.name,this.email, this.password, this.Address, this.AddressNumber,this.Movil);
        this.$router.push("/")
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.register {
  padding: 2rem;
}
.title {
  text-align: center;
}
.form {
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
.form-label {
  margin-top: 2rem;
  color: white;
  margin-bottom: 0.5rem;
  &:first-of-type {
    margin-top: 0rem;
  }
}
.form-input {
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid white;
  color: white;
  &:focus {
    outline: 0;
    border-color: #1ab188;
  }
}
.form-submit {
  background: #1ab188;
  border: none;
  color: white;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #0b9185;
  }
}
.error {
  margin: 1rem 0 0;
  color: #ff4a96;
}
</style>