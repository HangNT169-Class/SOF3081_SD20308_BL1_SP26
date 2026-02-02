<template>
  <form>
    Ten: <input type="text" v-model="tacGia.ten" />
    <br />
    Gioi tinh:
    <input type="radio" v-model="tacGia.gioiTinh" value="true" /> Nam
    <input type="radio" v-model="tacGia.gioiTinh" value="false" /> Nu
    <br />
    Dia chi:
    <input type="text" v-model="tacGia.diaChi" />
    Tuoi:
    <input type="text" v-model="tacGia.tuoi" />
  </form>
</template>

<script setup>
defineModel('tacGia', {
  default: () => ({
    ten: '',
    gioiTinh: false,
    diaChi: '',
    tuoi: 0,
  }),
})
</script>

<style lang="css" scoped></style>
