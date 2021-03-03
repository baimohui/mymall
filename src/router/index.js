import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("views/home/Home.vue");
const Category = () => import("views/category/Category.vue");
const Cart = () => import("views/cart/Cart.vue");
const Profile = () => import("views/profile/Profile.vue");
const Detail = () => import("views/detail/Detail.vue");
// 1.安装vuerouter插件
Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/category",
    component: Category,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/detail/:iid",
    component: Detail,
  },
];

// 2.创建router
const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
