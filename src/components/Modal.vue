<script setup>
import axios from "axios";
import { useStore } from "../store";

const movie = (
  await axios.get(`https://api.themoviedb.org/3/movie/${props.id}`, {
    params: {
      api_key: "a75766149f058c94cbde1356c3161786",
      region: "US",
      language: "en",
      include_adult: false,
    },
  })
).data;

const store = useStore();
const props = defineProps(["id"]);
</script>

<template>
  <Teleport to="body">
    <div class="modal-outer-container" @click.self="$emit('toggleModal')">
      <div class="modal-inner-container">
        <button @click="$emit('toggleModal')">X</button>
        <div v-if="movie">
          <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" />

          <div class="info">
            <br />
            <br />
            <br />
            <h1>{{ movie.title }}</h1>
            <h2>{{ movie.tagline }}</h2>
            <h2>Release Date: {{ movie.release_date }}</h2>
            <h2>Duration: {{ movie.runtime }} mins</h2>           

            <h3
              class= "buton"
              @click="store.addToCart(movie.poster_path, movie.title)"
            >
              Buy
            </h3>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.title {
  position: relative;
  left: 40%;
  size: 100px;
}
.info {
  width: 45vw;
  position:relative;
  font-size: small;
  display: flex;
  flex-direction: column;
  left: 250px;
  bottom: 350px;
}
.modal-outer-container {
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #00000099;
  z-index: 5;
}

.modal-outer-container .modal-inner-container {
  background-color: orange;
  border-radius: 20px;
  width: clamp(280px, 100%, 900px);
  height: 70vh;
  position: relative;
}

.modal-outer-container .modal-inner-container button {
  position: absolute;
  right: 0px;
  padding: 1rem;
  border: none;
  background: lightgray;
  font-weight: bold;
}

.modal-outer-container .modal-inner-container .icon {
  font-size: 1.25rem;
  color: white;
}

img {
  width: 20vw;;
  height: 60vh;
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