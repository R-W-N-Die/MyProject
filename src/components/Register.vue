<template>
  <div class="login-container">
    <h1 class="login-header">Welcome to my project!</h1>
    <v-card width="600">
      <v-form>
        <v-container>
          <v-text-field
              label="Email"
              v-model="email"
              outlined
              required
          ></v-text-field>
          <v-text-field
              label="Password"
              v-model="password"
              outlined
              required
          ></v-text-field>
          <v-btn @click="tryRegister">Sign up</v-btn>
          <v-btn @click="$router.push({ name: 'Login' })">Log in</v-btn>
        </v-container>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import instance from "../api/http.js";
import { registerApi } from "../api/register.js";

export default {
  name: "Register",
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    tryRegister() {
      registerApi.register(this.email, this.password)
    }
  }
}
</script>

<style scoped>
.login-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.login-header {
  color: white;
  font-size: 3em;
  text-align: center;
  margin-bottom: 30px;
  text-shadow: 3px 3px 0 rgb(79 79 79);
}
</style>