<script setup></script>

<template>
  <div class="footer">
    <div class="number">
      <p>Need Help? Call 1-800-668-6868 (Kids help phone)</p>
    </div>

    <div class="links">
      <a href="">FAQ</a>
      <a href="">Help Center</a>
      <a href=""></a>
      <a href="">Help Center</a>
      <a href="">Help Center</a>
      <a href="">Help Center</a>
      <a href="">Help Center</a>
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
  color: orange;
  display: grid;
  justify-content: center;

  background-color: black;
  width: 100vw;
  height: 45vh;
}
a {
  color: white;
}
a:link {
  text-decoration:double;
}
</style>