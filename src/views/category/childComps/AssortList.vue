<template>
  <div class="assort-list">
    <div v-for="(item, index) in subcateList" :key="index" class="assort">
      <div class="image">
        <a :href="item.link">
          <img :src="item.image" />
        </a>
      </div>
      <div class="title">{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
import { getSubcategory } from "network/category.js";
export default {
  name: "AssortList",
  props: {},
  components: {},
  data() {
    return {
      subcateList: [],
    };
  },
  computed: {},
  watch: {},
  // 创建完成（可以访问当前this实例）
  created() {
    getSubcategory(3627).then((res) => {
      this.subcateList = res.data.list;
    });
    this.$bus.$on("cateClick", (maitKey) => {
      getSubcategory(maitKey).then((res) => {
        this.subcateList = res.data.list;
      });
    });
  },
  // 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, // 创建前
  beforeMount() {}, // 挂载前
  beforeUpdate() {}, // 更新前
  updated() {}, // 更新后
  beforeDestroy() {}, // 销毁前
  destroyed() {}, // 销毁完成
  activated() {}, // 如果页面有keep-alive缓存功能，这个函数会触发
  methods: {},
};
</script>

<style scoped>
/* @import url(); 引入公共css类 */
.assort-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.assort {
  width: 83px;
  /* border: 1px solid red; */
  font-size: 16px;
  text-align: center;
  padding: 5px 0;
}
.assort .image img {
  width: 80px;
}
</style>
