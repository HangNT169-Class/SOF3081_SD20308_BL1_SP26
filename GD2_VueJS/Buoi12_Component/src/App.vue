<script setup>
import { ref } from 'vue'
import ButtonComponent from './component/ButtonComponent.vue'
// import TextComponent from './component/TextComponent.vue'

const listNhanVien = ref([
  { mssv: 'TH05494', ten: 'Chu Tuan A', tuoi: '17', gioiTinh: 'Nam' },
  { mssv: 'TH05495', ten: 'Chu Tuan B', tuoi: '35', gioiTinh: 'Nu' },
  { mssv: 'TH05495', ten: 'Chu Tuan B', tuoi: '90', gioiTinh: 'Nu' },
  { mssv: 'TH05495', ten: 'Chu Tuan B', tuoi: '70', gioiTinh: 'Nu' },
  { mssv: 'TH05495', ten: 'Chu Tuan B', tuoi: '40', gioiTinh: 'Nu' },
  { mssv: 'TH05495', ten: 'Chu Tuan B', tuoi: '18', gioiTinh: 'Nu' },
])
const number = ref(10)

const increaseNumber = () => {
  number.value++
}
</script>

<template>
  <div>
    <!-- Tao doi tuong NhanVien gom cac thuoc tinh
   mssv - String, ten - String, tuoi - int, gioiTinh - String
   1. Hien thi danh sach tat ca nhan vien len table
   2. Hien thi danh sach nhung nhan vien co tuoi > 30 tren table
    -->
    <h1>On tap</h1>
    <h1>Danh sach nhan vien</h1>
    <table border="1">
      <thead>
        <tr>
          <th>MSSV</th>
          <th>TEN</th>
          <th>TUOI</th>
          <th>GIOI TINH</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="nv in listNhanVien" :key="nv.mssv">
          <td>{{ nv.mssv }}</td>
          <td>{{ nv.ten }}</td>
          <td>{{ nv.tuoi }}</td>
          <td>{{ nv.gioiTinh }}</td>
        </tr>
      </tbody>
    </table>
    <h1>Danh sach nhan vien tuoi > 30</h1>
    <table border="1">
      <thead>
        <tr>
          <th>MSSV</th>
          <th>TEN</th>
          <th>TUOI</th>
          <th>GIOI TINH</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="nv in listNhanVien" :key="nv.mssv">
          <tr v-if="nv.tuoi > 30">
            <td>{{ nv.mssv }}</td>
            <td>{{ nv.ten }}</td>
            <td>{{ nv.tuoi }}</td>
            <td>{{ nv.gioiTinh }}</td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
  <div>
    <h1>Component</h1>
    <!-- Component:
     tach nho giao dien de co the tai su dung
     Co 2 cach goi component:
     1. Goi bang ten component minh dat
     2. Viet thuong het va cach nhau boi dau - theo tung tu
      -->
    <!-- Cha: App.vue
      Con: Button Component
      Ly thuyet: Chi co the truyen gia tri & su kien(ham)
      tu component cha -> component con
       -->
    <!-- int a = 5;
       truyen gia khac chuoi :
        -->
    <ButtonComponent :test="number" test1="number" />
    <p>Gia tri number trong component cha: {{ number }}</p>
    <!-- <button-component /> -->
    <!-- <TextComponent /> -->
    <button @click="increaseNumber">Click me</button>
    <!-- Truyen su kien & Component V-Model => co output demo -->
  </div>
</template>

<style scoped></style>
