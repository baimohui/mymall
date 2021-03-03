<template>
  <div class="guide-list">
    <ul class="list" @click="guideClick">
      <li>
        <div class="icon"><img src="~assets/img/profile/message.svg" /></div>
        <div class="text">我的消息</div>
      </li>
      <li>
        <div class="icon"><img src="~assets/img/profile/pointer.svg" /></div>
        <div class="text">积分商城</div>
      </li>
      <li>
        <div class="icon"><img src="~assets/img/profile/vip.svg" /></div>
        <div class="text">会员卡</div>
      </li>
    </ul>
    <ul class="list" @click="guideClick">
      <li>
        <div class="icon"><img src="~assets/img/profile/cart.svg" /></div>
        <div class="text">我的购物车</div>
      </li>
      <li>
        <div class="icon"><img src="~assets/img/profile/shopping.svg" /></div>
        <div class="text">下载购物APP</div>
      </li>
    </ul>
  </div>
</template>

<script>
// 此行导入其他文件（如组件，工具js，第三方插件js，json文件，图片文件等）
export default {
  name: "GuideList",
  methods: {
    guideClick() {
      this.$toast.show("功能待开发", 1000);
    },
  },
};
</script>

<style scoped>
/* @import url(); 引入公共css类 */
.list {
  border-top: 15px solid #f2f2f2;
}
.list li {
  height: 50px;
  line-height: 50px;
  display: flex;
  align-items: center;
}
.list li .text {
  flex: 1;
  border-bottom: 1px solid rgb(231, 231, 231);
  font-size: 18px;
}
.icon {
  margin-left: 5px;
  padding: 0 8px;
}
.icon img {
  width: 23px;
  height: 22px;
  /* border: 1px solid red; */
}
</style>
