<script setup>
import TextComponent from './TextComponent.vue'
// Muon lay gia tri => defineProps
// Muon lay function => defineEmits
const giaTriComponentCon = defineProps({
  test: Number,
  test1: String,
})
</script>

<template>
  <h1>Day la button component</h1>
  <h1>Gia tri ben component con - test: {{ giaTriComponentCon.test }}</h1>
  <h1>Gia tri ben component con - test1: {{ giaTriComponentCon.test1 }}</h1>
  <TextComponent />
</template>

<style scoped>
h1 {
  text-align: center;
}
</style>
