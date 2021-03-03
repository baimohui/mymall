import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import FastClick from "fastclick";
// import VueLazyLoad from "vue-lazyload"
import toast from "components/common/toast";

Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();
Vue.use(toast);
// 图片懒加载要记得把图片的:src改成v-lazy
// Vue.use(VueLazyLoad);
// 解决移动端300ms延迟
FastClick.attach(document.body);

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
