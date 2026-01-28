<script setup>
import { ref } from 'vue'

const isLogin = ref(false)
const toggleEvent = () => {
  // gia tri cua isLogin: true => false & false => true
  // if (isLogin.value === true) {
  //   isLogin.value = false
  // } else {
  //   isLogin.value = true
  // }
  isLogin.value = !isLogin.value
}
const status = ref('Online')
const checkTrangThai = () => {
  if (status.value === 'Online') {
    status.value = 'Offline'
  } else if (status.value === 'Offline') {
    status.value = 'Busy'
  } else {
    status.value = 'Online'
  }
}
const mess1 = ref('')
const gioiTinh = ref('')
const soThuNhat = ref(0)
const soThuHai = ref(0)
const ketQua = ref(0)
function tinhTong() {
  ketQua.value = Number(soThuNhat.value) + Number(soThuHai.value)
  // "3" "4"
}
</script>
<template>
  <div>
    <h1>Re nhanh</h1>
    <!-- 1. Kiem tra xem ban da dang nhap hay chua:
     isLogin = true => Xin chao admin
     isLogin = false => Ban chua dang nhap vui long dang nhap
      -->
    <p>{{ isLogin == true ? 'Xin chao admin' : 'Ban chua dang nhap vui long dang nhap ' }}</p>
    <p v-if="isLogin">Xin chao admin</p>
    <p v-else>Ban chua dang nhap vui long dang nhap</p>
    <button @click="toggleEvent()">Click me</button>
  </div>
  <div>
    <h1>Bai 2</h1>
    <!-- hien thi trang thai cua nguoi choi: online/offline/busy.
     Neu online -> click -> offline
     Neu offline -> click -> busy
     Neu busy -> click -> online
      -->
    Trang thai cua nguoi dung: {{ status }}
    <br />
    <button @click="checkTrangThai()">Click me</button>
    <!-- v-show -->
  </div>
  <div>
    <h1>Form data binding</h1>
    Mess: <input type="text" v-model="mess1" />
    <p>Gia tri cua input: {{ mess1 }}</p>
    Gioi tinh:
    <input type="radio" v-model="gioiTinh" value="Gioi tinh nam" />Nam
    <input type="radio" v-model="gioiTinh" value="Gioi tinh nu" />Nữ
    <br />
    <p>Gia tri cua input: {{ gioiTinh }}</p>
    <!-- Dung giao dien gom co 2 input va 4 button:
     1. Tinh tong => Nhap gia tri vao 2 o input khi click vao tinh tong
     => hien thi tong cua 2 so vua nhap
      2. Tinh hieu => Nhap gia tri vao 2 o input khi click vao tinh hieu
     => hien thi hieu cua 2 so vua nhap
     3. Tinh nhan => Nhap gia tri vao 2 o input khi click vao tinh nhan
     => hien thi nhan cua 2 so vua nhap
      4. Tinh chia => Nhap gia tri vao 2 o input khi click vao tinh chia
     => hien thi chia cua 2 so vua nhap
      -->
    Number 1: <input type="text" v-model="soThuNhat" />
    <br />
    Number 2: <input type="text" v-model="soThuHai" />
    <br />
    <button @click="tinhTong">Tinh tong</button>
    <button>Tinh hieu</button>
    <button>Tinh tich</button>
    <button>Tinh thuong</button>
    <br />
    <p>Ket qua: {{ ketQua }}</p>
  </div>
</template>

<style scoped></style>
