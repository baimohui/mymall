<template>
  <div id="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ cartLength }})</div>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <cart-list />
    </scroll>
    <cart-bottom-bar />
  </div>
</template>

<script>
import CartList from "./childComps/CartList.vue";
import CartBottomBar from "./childComps/CartBottomBar.vue";

import NavBar from "components/common/navbar/NavBar.vue";
import Scroll from "components/common/scroll/Scroll.vue";

import { mapGetters } from "vuex";
export default {
  name: "Cart",
  components: {
    NavBar,
    CartBottomBar,
    CartList,
    Scroll,
  },
  computed: {
    ...mapGetters({
      cartLength: "cartLength",
    }),
  },
  activated() {
      // 必须要在重新进入cart页时进行刷新，重新确定可滚动的长度，不然如果新添加购物车的商品，会导致该页面无法滚动
    this.$refs.scroll.refresh();
  },
};
</script>

<style scoped>
#cart {
  height: 100vh;
  position: relative;
  /* background-color: #fff; */
}
.nav-bar {
  font-weight: 600;
  color: white;
  background-color: #ff8198;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>
