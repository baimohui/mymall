<template>
  <ul class="sub-cate">
    <li
      v-for="(item, index) in categories"
      :key="index"
      :class="{ active: currentIndex === index }"
      @click="cateClick(index, item.maitKey)"
    >
      {{ item.title }}
    </li>
  </ul>
</template>

<script>
// 此行导入其他文件（如组件，工具js，第三方插件js，json文件，图片文件等）
export default {
  name: "SubCategory",
  props: {
    categories: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {},
  data() {
    return {
      currentIndex: 0,
    };
  },
  computed: {},
  watch: {},
  // 创建完成（可以访问当前this实例）
  created() {},
  // 挂载完成（可以访问DOM元素）
  mounted() {},
  destroyed() {}, // 销毁完成
  activated() {}, // 如果页面有keep-alive缓存功能，这个函数会触发
  methods: {
    cateClick(index, maitKey) {
      this.currentIndex = index;
      this.$bus.$emit("cateClick", maitKey);
    },
  },
};
</script>

<style scoped>
/* @import url(); 引入公共css类 */
.sub-cate {
  width: 90px;
  font-size: 16px;
  background-color: #f6f6f6;
}
.sub-cate li {
  /* border: 1px solid red; */
  height: 50px;
  line-height: 50px;
  text-align: center;
}
.active {
  color: var(--color-tint);
  font-weight: bold;
  background-color: #fff;
  border-left: 4px rgba(247, 109, 171, 0.7) solid;
}
</style>
