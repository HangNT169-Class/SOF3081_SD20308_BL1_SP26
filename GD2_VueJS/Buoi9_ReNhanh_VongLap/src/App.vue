<script setup>
import { ref } from 'vue'

// C1: Function thuong
function clickMe() {
  alert('Click me')
}
// C2: arrow function =>
// const clickMe1 = () => {
//   alert('Click me')
// }
// let number = 0
let number = ref(5) // Khai bao bien ref
// arrow function =>
const tangGiaTri = () => {
  // number++
  // lay gia tri => .value
  number.value++
  console.log(number)
}
const sv = ref({
  mssv: 'HE130461',
  ten: 'Nguyen Van A',
  tuoi: 10,
  nganhHoc: 'Ky thuat phan mem',
})
const listMonHoc = ref([
  {
    ma: 'Nv01',
    ten: 'Sach toan',
    soTinChi: 10,
  },
  {
    ma: 'Nv02',
    ten: 'Sach van',
    soTinChi: 5,
  },
  {
    ma: 'Nv03',
    ten: 'Sach ly',
    soTinChi: 3,
  },
  {
    ma: 'Nv04',
    ten: 'Sach hoa',
    soTinChi: 4,
  },
  {
    ma: 'Nv05',
    ten: 'Sach giao duc quoc phong',
    soTinChi: 7,
  },
])
</script>

<template>
  <div>
    <h1>Ref & Reactive</h1>
    <!-- v-html => nhet ca 1 htmk vao
     binding => v-bind:id <=> :id/:class
     su kien: v-on:su kien <=> @su kien
     De co the thay doi duoc gia tri va cap nhap lai gia tri thay doi vao dom
     => reactivity(phan ung): Vue se lang nghe su thoi cua tung state
     => Lay gia tri cua state thoi => cap nhap lai vao dom
     1. Ref => compoition API thuong dung cai nay
     2. Reactive
     Bo sung them 2 button:
     1. Button giam gia tri. Khi click gia tri giam di 1 don vi
     2. Button reset. Khi click vao reset thi gia tri se quay tro ve gia tri ban dau
      -->
    <button v-on:click="clickMe">Click me</button>
    <p>Gia tri: {{ number }}</p>
    <button @click="tangGiaTri">Increase number</button>
    <!--
    1. Tao 1 doi tuong SinhVien gom cac thuoc tinh: mssv, ten, tuoi, nganhHoc
    va hien thi doi tuong sinh vien len giao dien
    2. Tao 1 danh sách cac cong viec trong ngay.
    Hien thi thong tin cua cong viec cuoi cung len giao dien
    3. Tao 1 doi tuong nhanVien gom: ma, ten, tuoi, diaChi, luong va
     hien thong thong tin len giao dien
    4. Tao 1 danh sách đối tượng MonHoc gồm: ma, ten, soTinChi.
    Hien thi danh sách đấy dưới các định dạng sau:
       4.1 Table
       4.2 Combobox hiên thị tên
       4.3 Ul, li: ma - ten
    -->
    <p>Ma sv la: {{ sv.mssv }}</p>
    <table border="1">
      <thead>
        <th>STT</th>
        <th>Ma</th>
        <th>Ten</th>
        <th>So tin chi</th>
      </thead>
      <tbody>
        <!-- Bat buoc phai co them key:
         - La duy nhat
         - Toi uu trong qua trinh dom duoc cap nhap
          -->
        <!-- for(doi tuong : ten mang) -->
        <template v-for="m in listMonHoc" :key="m.ma">
          <tr>
            <td>{{ m.ma }}</td>
            <td>{{ m.ma }}</td>
            <td>{{ m.ten }}</td>
            <td>{{ m.soTinChi }}</td>
          </tr>
        </template>
      </tbody>
    </table>
    <!-- Combobox -->
    <select>
      <option v-for="mon in listMonHoc" :key="mon.ma">{{ mon.ma }}</option>
    </select>
    <!-- Ul, li -->
    <ul>
      <li v-for="mon in listMonHoc" :key="mon.ma">{{ mon.ma }} - {{ mon.ten }}</li>
    </ul>
  </div>
</template>

<style scoped></style>
