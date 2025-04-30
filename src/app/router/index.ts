import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage';
import AddNewRecordPage from "@/pages/AddNewRecordPage";
import ReadPostPage from "@/pages/ReadPostPage";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/add-new',
      name: 'addNew',
      component: AddNewRecordPage,
    },
    {
      path: '/read/:recordId',
      name: 'readPost',
      component: ReadPostPage,
    },
  ],
})

export default router
