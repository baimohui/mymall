<template>
  <div class="toast" v-show="isShow">
    <span>{{ message }}</span>
  </div>
</template>

<script>
// 此行导入其他文件（如组件，工具js，第三方插件js，json文件，图片文件等）
export default {
  name: "MyToast",
  data() {
    return {
      message: "",
      isShow: false,
    };
  },
  methods: {
    show(message = "提示信息", duration = 3000) {
      this.isShow = true;
      this.message = message;
      setTimeout(() => {
        this.isShow = false;
        this.message = "";
      }, duration);
    },
  },
};
</script>

<style scoped>
/* @import url(); 引入公共css类 */
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: 999;
  margin: auto;
  padding: 8px 15px;

  color: white;
  background-color: rgba(0, 0, 0, 0.75);
  font-size: 16px;
}
</style>
