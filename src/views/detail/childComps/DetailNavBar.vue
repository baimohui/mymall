<template>
  <div class="wrapper">
    <nav-bar>
      <div slot="left" class="back">
        <img src="~assets/img/common/back.svg" @click="backClick" />
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item, index) in titles"
          :key="index"
          class="item"
          @click="titleClick(index)"
          :class="{ active: index == currentIndex }"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
// 此行导入其他文件（如组件，工具js，第三方插件js，json文件，图片文件等）
import NavBar from "components/common/navbar/NavBar.vue";
export default {
  name: "DetailNavBar",
  props: {},
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  computed: {},
  watch: {},
  // 创建完成（可以访问当前this实例）
  created() {},
  // 挂载完成（可以访问DOM元素）
  mounted() {},
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index);
    },
    backClick() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
/* @import url(); 引入公共css类 */
.title {
  display: flex;
  font-size: 13px;
}
.item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.back img {
  margin-top: 12px;
}
</style>
