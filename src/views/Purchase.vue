<script setup>
import { ref } from "vue";
import Modal from "../components/Modal.vue";
import { useStore } from "../store/index.js";
import { useRouter } from "vue-router";

const router = useRouter();
const showModal = ref(false);
const selectedRecordId = ref(0);
const store = useStore();

const toggleModal = (id) => {
  showModal.value = !showModal.value;
  selectedRecordId.value = id;
};
</script>

<template>
  <div class="title">
    <h1>Joes Movies</h1>
  </div>
  <div>
    <div class="cart">
      <button @click="router.push('/cart')">Cart</button>
    </div>
    <div v-if="store.movies" class="tiles">
      <div v-for="movie in store.movies" class="tile">
        <img
          :src="`https://image.tmdb.org/t/p/w500/${movie.poster}`"
          @click="toggleModal(movie.id)"
        />
      </div>
    </div>
  </div>
  <Modal v-if="showModal" :id="selectedRecordId" @toggleModal="toggleModal()" />
</template>

<style scoped>
.title {
  position: relative;
  text-align: center;
  font-size: 15px;
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
.cart {
  position: relative;
  display: flex;
  justify-content: center;
  height: 50px;
  left: 620px;
  padding: 7px;
}

.tiles {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  background-color: black;
}

img {
  width: 200px;
}
</style>