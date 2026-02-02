<template>
  <h1>Day la man hinh tac gia</h1>
  <FormTacGiaComponent v-model:tacGia="newTacGia" />
  <button @click="addTacGia()">Add</button>
  <button @click="updateTacGia()">Update</button>
  <table border="1">
    <thead>
      <tr>
        <th>STT</th>
        <th>TEN</th>
        <th>Gioi Tinh</th>
        <th>Dia Chi</th>
        <th>Tuoi</th>
        <th>Hanh dong</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="(tg, index) in listTacGia" :key="tg.id">
        <tr>
          <td>{{ index + 1 }}</td>
          <td>{{ tg.ten }}</td>
          <td>{{ tg.gioiTinh }}</td>
          <td>{{ tg.diaChi }}</td>
          <td>{{ tg.tuoi }}</td>
          <td>
            <button @click="removeTacGia1(index)">Delete</button>
            <!-- <button @click="removeTacGia(tg.id)">Delete</button> -->
            <button @click="detailTacGia(tg)">Detail</button>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script setup>
import FormTacGiaComponent from '@/component/FormTacGiaComponent.vue'
import { ref } from 'vue'

const listTacGia = ref([
  {
    ten: 'ten 1',
    gioiTinh: true,
    diaChi: 'diaChi 1',
    tuoi: 95,
    id: '1',
  },
  {
    ten: 'ten 2',
    gioiTinh: true,
    diaChi: 'diaChi 2',
    tuoi: 82,
    id: '2',
  },
  {
    ten: 'ten 3',
    gioiTinh: false,
    diaChi: 'diaChi 3',
    tuoi: 48,
    id: '3',
  },
  {
    ten: 'ten 4',
    gioiTinh: false,
    diaChi: 'diaChi 4',
    tuoi: 35,
    id: '4',
  },
  {
    ten: 'ten 5',
    gioiTinh: false,
    diaChi: 'diaChi 5',
    tuoi: 45,
    id: '5',
  },
  {
    ten: 'ten 6',
    gioiTinh: false,
    diaChi: 'diaChi 6',
    tuoi: 22,
    id: '6',
  },
  {
    ten: 'ten 7',
    gioiTinh: false,
    diaChi: 'diaChi 7',
    tuoi: 36,
    id: '7',
  },
  {
    ten: 'ten 8',
    gioiTinh: true,
    diaChi: 'diaChi 8',
    tuoi: 62,
    id: '8',
  },
  {
    ten: 'ten 9',
    gioiTinh: false,
    diaChi: 'diaChi 9',
    tuoi: 61,
    id: '9',
  },
  {
    ten: 'ten 10',
    gioiTinh: false,
    diaChi: 'diaChi 10',
    tuoi: 71,
    id: '10',
  },
  {
    ten: 'ten 11',
    gioiTinh: false,
    diaChi: 'diaChi 11',
    tuoi: 61,
    id: '11',
  },
  {
    ten: 'ten 12',
    gioiTinh: false,
    diaChi: 'diaChi 12',
    tuoi: 27,
    id: '12',
  },
  {
    ten: 'ten 13',
    gioiTinh: false,
    diaChi: 'diaChi 13',
    tuoi: 55,
    id: '13',
  },
  {
    ten: 'ten 14',
    gioiTinh: false,
    diaChi: 'diaChi 14',
    tuoi: 86,
    id: '14',
  },
  {
    ten: 'ten 15',
    gioiTinh: false,
    diaChi: 'diaChi 15',
    tuoi: 46,
    id: '15',
  },
  {
    ten: 'ten 16',
    gioiTinh: false,
    diaChi: 'diaChi 16',
    tuoi: 72,
    id: '16',
  },
  {
    ten: 'ten 17',
    gioiTinh: false,
    diaChi: 'diaChi 17',
    tuoi: 94,
    id: '17',
  },
  {
    ten: 'ten 18',
    gioiTinh: false,
    diaChi: 'diaChi 18',
    tuoi: 5,
    id: '18',
  },
  {
    ten: 'ten 19',
    gioiTinh: false,
    diaChi: 'diaChi 19',
    tuoi: 75,
    id: '19',
  },
  {
    ten: 'ten 20',
    gioiTinh: false,
    diaChi: 'diaChi 20',
    tuoi: 29,
    id: '20',
  },
])
// Tao 1 doi tuong tac gia => rong => phuc vu cac chuc them, sua, detail
// CHU Y: TEN TRONG DOI TUONG PHAI TRUNG VS TEN TRONG LIST BAN DAU
const newTacGia = ref({
  ten: '',
  gioiTinh: false,
  diaChi: '',
  tuoi: 0,
})
// isUpdate = true => UPDATE MAY TINH.
// isUpdate = false => ADD MAY TINH
const isUpdate = ref(false)
// VI TRI CUA DOI TUONG KHI DETAIL
const viTriUpdate = ref(-1)
// const removeTacGia = (id) => {
//   const index = listTacGia.value.findIndex((t) => t.id === id)
//   listTacGia.value.splice(index, 1)
// }
const removeTacGia1 = (i) => {
  listTacGia.value.splice(i, 1)
}

function detailTacGia(item) {
  // copy thong tin tu item => newTacGia
  newTacGia.value = { ...item }
  // Vi tri
  viTriUpdate.value = listTacGia.value.findIndex((tg) => tg.id === item.id)
}
function addTacGia() {
  listTacGia.value.push({
    id: listTacGia.value.length + 1,
    ...newTacGia.value, // SAO CHEP CAC THUOC TINH CON LAI
  })
}
const resertData = () => {
  newTacGia.value = {
    ten: '',
    gioiTinh: false,
    diaChi: '',
    tuoi: 0,
  }
}

// Update
const updateTacGia = () => {
  listTacGia.value[viTriUpdate.value] = { ...newTacGia.value }
  resertData
  viTriUpdate.value = -1
}
</script>

<style lang="css" scoped></style>
