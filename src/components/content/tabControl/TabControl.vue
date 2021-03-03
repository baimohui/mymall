<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in tabs"
      :key="index"
      class="tab-control-item"
      :class="{ active: currentIndex === index }"
      @click="tabClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）

export default {
  name: "TabControl",
  props: {
    tabs: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index;
      this.$emit("tabClick",index);
    }
  },
};
</script>

<style scoped>
/* @import url(); 引入公共css类 */
.tab-control {
  display: flex;
  width: 100%;
  text-align: center;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
}
.tab-control-item {
  flex: 1;
}
.tab-control-item span {
  padding: 5px;
}
.active {
    color: var(--color-high-text);
}
.active span {
    border-bottom: 3px solid var(--color-tint);
}
</style>
