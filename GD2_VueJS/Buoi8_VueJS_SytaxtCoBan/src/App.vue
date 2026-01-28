<!--
 File .vue. Thanh phan trong 1 file VueJS
 SFC: Sigle File Component
 - chua html => <template></template>
 - chua CSS => <style scope></style>
 -- chua logic(js) => script phai co setup
  -->
<script setup>
const m1 = 'Nguyen Van A'
const button = '<button>Test button</button>'
// Neu doan copy bi dai qua xuong dong => dau huyen tren tab
const tbl = `<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>`
const idButton = 'id-btn'
const classButton = 'class-btn'
// Su kien
function testSuKien() {
  alert('Ban da click vao day')
}
</script>
<template>
  <h1>Buoi 8 - Lam quen vs VueJS</h1>
  <!-- Noi suy van ban: {{ ten bien }} -->
  <p class="test">{{ m1 }}</p>
  <!-- <div>
    {{ button }}
  </div> -->
  <!-- v-html => chua noi dung html -->
  <div v-html="button"></div>
  <!-- Hien thi table duoi dang v-html -->
  <div v-html="tbl"></div>
  <!-- Dat ten bien class, id tu js -->
  <button :id="idButton" :class="classButton">Click me</button>
  <!-- Co 2 cach goi su kien:
   C1: v-on:ten su kien: v-on:click
   C2: @ten su kien
    -->
  <button v-on:click="testSuKien">Test1</button>
  <button @click="testSuKien">Test 2</button>
  <button type="button" class="btn btn-outline-primary">Primary</button>
  <button type="button" class="btn btn-outline-secondary">Secondary</button>
  <button type="button" class="btn btn-outline-success">Success</button>
  <button type="button" class="btn btn-outline-danger">Danger</button>
  <button type="button" class="btn btn-outline-warning">Warning</button>
  <button type="button" class="btn btn-outline-info">Info</button>
  <button type="button" class="btn btn-outline-light">Light</button>
  <button type="button" class="btn btn-outline-dark">Dark</button>
</template>
<style scoped>
h1 {
  text-align: center;
  font-size: 40px;
  color: red;
}
.test {
  text-align: center;
  color: blue;
}
</style>
