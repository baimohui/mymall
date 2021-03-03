<template>
  <div class='back-top'>
      <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
// 此行导入其他文件（如组件，工具js，第三方插件js，json文件，图片文件等）
export default {
  name: 'BackTop',
  props: {},
  components: {},
  data () {
    return {};
  },
  computed: {},
  watch: {},
  // 创建完成（可以访问当前this实例）
  created () {},
  // 挂载完成（可以访问DOM元素）
  mounted () {},
  beforeCreate () {}, // 创建前
  beforeMount () {}, // 挂载前
  beforeUpdate () {}, // 更新前
  updated () {}, // 更新后
  beforeDestroy () {}, // 销毁前
  destroyed () {}, // 销毁完成
  activated () {}, // 如果页面有keep-alive缓存功能，这个函数会触发
  methods: {},
}
</script>

<style scoped>
/* @import url(); 引入公共css类 */
.back-top {
  position: fixed;
  right: 8px;
  bottom: 55px;
}
.back-top img {
  width: 43px;
  height: 43px;
}
</style>
