<script setup></script>

<template>
  <div class="footer">
    <div class="number">
      <p>Need Help? Call 1-800-668-6868 (Kids help phone)</p>
    </div>

    <div class="links">
      <a href="">FAQ</a>
      <a href="">Help Center</a>
    </div>
  </div>
</template>

<style scoped>
.number {
  text-align: center;
}
.links {
  display: grid;
  position: relative;
  left: 60px;
  grid-template-columns: 200px 200px 200px 200px;
  grid-template-rows: 30px 30px 30px 30px;
  font-size: 12px;
}
.footer {
  color: aliceblue;
  display: grid;
  justify-content: center;

  background-color: rgb(0, 0, 0);
  width: 100vw;
  height: 45vh;
}
a {
  color: rgb(251, 250, 246);
}
a:link {
  text-decoration: none;
}
</style>