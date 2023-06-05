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
          <div class="title">
            <h1>{{ movie.title }}</h1>
          </div>

          <div class="info">
            <h2>{{ movie.release_date }}</h2>
            <h2>{{ movie.overview }}</h2>
            <h3
              class="but"
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
  left: 50%;
}
.info {
  width: 60%;
  position: relative;
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
  background-color: #205176;
  border-radius: 20px;
  width: clamp(280px, 100%, 900px);
  height: 50vh;
  position: relative;
}

.modal-outer-container .modal-inner-container button {
  position: absolute;
  right: 0px;
  padding: 1rem;
  border: none;
  background: #3b444b;
  font-weight: bold;
}

.modal-outer-container .modal-inner-container .icon {
  font-size: 1.25rem;
  color: white;
}

img {
  width: 200px;
}
</style>