<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const username = ref("");
const password = ref("");

const login = () => {
  if (username.value === "tmdb" && password.value === "movies") {
    router.push("/purchase");
  } else {
    alert("Invalid username/password!");
  }
  console.log(username.value, password.value);
};
</script>

<template>
  <div class="login">
    <div class="comp">
      <h1>Joe Movies</h1>
      <h3>Buy the Latest Collections</h3>
    </div>

    <form class="login-container" @submit.prevent="login()">
      <input
        class="username"
        type="text"
        placeholder="Username"
        v-model="username"
      />
      <input
        class="pass"
        type="password"
        placeholder="Password"
        v-model="password"
      />
      <input class="loginButton" type="submit" value="Login" />
    </form>
  </div>
</template>

<style>
.comp {
  position: relative;
  left: 730px;
  color: white;
}
.login {
  background-color: black;
  height: 50vh;
  border-radius: 20em;
}
.login-container {
  position: relative;
  top: 50px;
  left: 700px;
  row-gap: 10px;
  width: 15%;
  display: flex;
  flex-direction: column;
}
.username {
  text-align: left;
  border-radius: 5px;
}
.pass {
  text-align: left;
  border-radius: 5px;
}
.loginButton {
  background-color: white;
  text-align: center;
  height: 40px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px 2px rgb(0, 0, 0, 0.8);
}
</style>