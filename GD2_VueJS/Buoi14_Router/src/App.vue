<script setup>
import FooterLayout from './layout/FooterLayout.vue'
import HeaderLayout from './layout/HeaderLayout.vue'
</script>

<template>
  <HeaderLayout />
  <!-- Chua noi dung thay doi theo tung duong dan o header -->
  <RouterView />
  <FooterLayout />
</template>

<style scoped></style>
