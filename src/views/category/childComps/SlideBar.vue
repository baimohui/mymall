<template>
  <div class="slide-bar">
    <assort-list></assort-list>
  </div>
</template>

<script>
import AssortList from "./AssortList.vue";
export default {
  name: "SlideBar",
  props: {},
  components: {
    AssortList,
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  // 创建完成（可以访问当前this实例）
  created() {},
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
</style>
