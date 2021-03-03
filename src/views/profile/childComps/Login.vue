<template>
  <div class="login" @click="loginClick">
    <div class="avatar">
      <img src="~assets/img/profile/avatar.svg" alt="" />
    </div>
    <div class="account">
      <div class="acword">登录/注册</div>
      <div class="phone">
        <img src="~assets/img/profile/phone.svg" alt="" />
        <span>暂无绑定手机号</span>
      </div>
    </div>
    <div class="arrow">></div>
  </div>
</template>

<script>
// 此行导入其他文件（如组件，工具js，第三方插件js，json文件，图片文件等）
export default {
  name: "Login",
  methods: {
    loginClick() {
      this.$toast.show("怎么可能登录呢！");
    },
  },
};
</script>

<style scoped>
/* @import url(); 引入公共css类 */
.login {
  height: 100px;
  display: flex;
  align-items: center;
  background-color: #ff8e96;
  color: rgba(255, 255, 255, 0.9);
}
.avatar {
  width: 86px;
  padding: 0 8px;
}
.avatar img {
  width: 70px;
}
.account {
  flex: 1;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.account span {
  font-size: 16px;
}
.account img {
  width: 25px;
}
.phone {
  display: flex;
  align-items: center;
  padding-top: 3px;
}
.acword {
  padding-left: 8px;
}
.arrow {
  font-size: 30px;
  width: 40px;
}
</style>
