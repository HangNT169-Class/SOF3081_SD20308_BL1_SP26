<template>
  <div>
    <h1>Day la header</h1>
    <header>
      <!-- <a href="/home">Home</a> -->
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/sinh-vien">Sinh vien</RouterLink>
    </header>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style lang="css" scoped></style>
