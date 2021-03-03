<template>
  <div class="money">
    <div class="block">
      <div class="word0"><span class="num">0.00</span>元</div>
      <div class="word1">我的余额</div>
    </div>
    <div class="block center">
      <div class="word0"><span class="num">0</span>个</div>
      <div class="word1">我的优惠</div>
    </div>
    <div class="block">
      <div class="word0"><span class="num">0</span>分</div>
      <div class="word1">我的积分</div>
    </div>
  </div>
</template>

<script>
// 此行导入其他文件（如组件，工具js，第三方插件js，json文件，图片文件等）
export default {
  name: "Money",
};
</script>

<style scoped>
/* @import url(); 引入公共css类 */
.money {
  display: flex;
  /* justify-content: space-between; */
  font-size: 16px;
  border-bottom: 1px solid rgb(231, 231, 231);
}
.block {
  flex: 1;
  height: 90px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* border: 1px solid rgb(253, 140, 87); */
}
.num {
  color: rgb(247, 125, 68);
  font-size: 28px;
  font-weight: bold;
}
.word1 {
  padding-top: 3px;
}
.center {
  border-left: 1px solid rgb(231, 231, 231);
  border-right: 1px solid rgb(231, 231, 231);
}
</style>
