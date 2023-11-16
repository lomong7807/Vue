// Composables
import { createRouter, createWebHistory } from "vue-router";
import BasicComponent from "../components/BasicComponent";
import GridComponent from "../components/GridComponent";
import LayoutComponent from "../components/LayoutComponent";

const routes = [
  {
    path: "/basic",
    component: BasicComponent,
  },
  {
    path: "/grid",
    component: GridComponent,
  },
  {
    path: "/layout",
    component: LayoutComponent,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
