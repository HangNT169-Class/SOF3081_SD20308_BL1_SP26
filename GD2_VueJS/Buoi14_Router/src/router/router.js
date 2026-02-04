// Cau hinh logic => Router
// B1: Tao 1 list chua tat ca duong dan va noi dung cua tung duong
import AboutPage from '@/page/AboutPage.vue'
import HomePage from '@/page/HomePage.vue'
import SinhVienpage from '@/page/SinhVienpage.vue'
import { createMemoryHistory, createRouter } from 'vue-router'

// dan tuong ung
const listRouter = [
  // Tung object = 1 duong dan
  {
    path: '/',
    name: 'HomeView', // ten dinh danh
    component: HomePage, // component dau tien phai sua lai import
  },
  {
    path: '/about',
    name: 'AboutView', // ten dinh danh
    component: AboutPage,
  },
  {
    path: '/sinh-vien',
    name: 'SinhVienView', // ten dinh danh
    component: SinhVienpage,
  },
]

// Tao route
const a = createRouter({
  history: createMemoryHistory(),
  routes: listRouter, // Lay toan bo danh sach list trong router
})

export default a
