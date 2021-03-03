<template>
  <div class="recommend">
    <div v-for="(item, index) in recommends" :key="index" class="recom-item">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）

export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
/* @import url(); 引入公共css类 */
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 20px;
  border-bottom: 10px solid #eee;
}
.recom-item {
  flex: 1;
}
.recom-item img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>
