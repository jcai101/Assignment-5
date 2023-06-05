<script setup>
import { useStore } from "../store/index.js";

const store = useStore();
</script>

<template>
  <div>
    <div class="top">
    <h1>Joe's Movies</h1>
    <h3>Your Cart</h3>
    </div>
  </div>
  <div v-for="movie in store.cart">
    <h1>{{ movie.title }}</h1>
    <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster}`" />
  </div>
</template>

<style scoped>
img {
  height: 20rem;
}

#bodyCart {
  background-color: black;
}
.buy {
  display: grid;
  position: relative;
  color: whitesmoke;
  grid-template-columns: repeat(5, 1fr);
  left: 100px;
  background-color: black;
}

.top {
  text-align: center;
  color: orange;
  background-color: black;
}
</style>