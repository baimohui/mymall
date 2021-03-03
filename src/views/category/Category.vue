<template>
  <div class="category">
    <nav-bar class="cate-nav">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="show-list">
      <scroll class="scroll0">
        <sub-category :categories="categories" class="sub-cate" />
      </scroll>
      <scroll class="scroll1">
        <slide-bar class="slide-bar" />
      </scroll>
    </div>
  </div>
</template>

<script>
import SubCategory from "./childComps/SubCategory.vue";
import SlideBar from "./childComps/SlideBar.vue";

import NavBar from "components/common/navbar/NavBar.vue";
import Scroll from "components/common/scroll/Scroll.vue";

import { getCategory } from "network/category.js";
export default {
  name: "Category",
  components: { NavBar, SubCategory, SlideBar, Scroll },
  data() {
    return {
      categories: [],
    };
  },
  created() {
    getCategory().then((res) => {
      this.categories = res.data.category.list;
    });
  },
  methods: {},
};
</script>

<style scoped>
.category {
  width: 100vw;
}
.cate-nav {
  background-color: var(--color-tint);
  color: #fff;
}
.scroll0 {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: calc(100% - 90px);
  overflow: hidden;
}
.scroll1 {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 90px;
  right: 0;
  overflow: hidden;
}
.show-list {
  display: flex;
}
.sub-cate {
  width: 90px;
}
.slide-bar {
  width: 100%;
  flex: 1;
}
</style>
