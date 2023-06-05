<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="header-container">
    <h1>Joe's Movies</h1>
  </div>
  <div class="login">
    <button @click="router.push('/login')">Login</button>
  </div>
</template>

<style scoped>
.header-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: whitesmoke;
}
.login {
  display: flex;
  justify-content: right;
  height: 50px;
  background-color: black;
  padding: 5px;
}
button {
  cursor: pointer;
  border: 1;
  border-radius: 10px;
  font-weight: 600;
  margin: 0 10px;
  width: 150px;
  padding: 12px 0;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
  transition: 0.5s;
}
</style>