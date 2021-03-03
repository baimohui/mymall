<template>
  <div class="cart-bottom-bar">
    <div class="checked-all">
      <check-button :is-checked="isSelectAll" @click.native="buttonClick" />
      <div class="seal">全选</div>
    </div>
    <div class="cart-bottom-price">
      合计：<span>¥ {{ totalPrice }}</span>
      元
    </div>
    <div class="cart-bottom-btn">
      <button @click="onSubmit">提交订单({{ checkedLength }})</button>
    </div>
  </div>
</template>

<script>
// 此行导入其他文件（如组件，工具js，第三方插件js，json文件，图片文件等）
import CheckButton from "components/content/checkButton/CheckButton.vue";
import { mapGetters } from "vuex";
export default {
  name: "CartBottomBar",
  props: {},
  components: { CheckButton },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      cartLength: "cartLength",
      cartList: "cartList",
    }),
    totalPrice() {
      return this.cartList
        .filter((item) => {
          return item.ischecked;
        })
        .reduce((prevalue, item) => {
          return prevalue + item.price * item.count;
        }, 0).toFixed(2);
    },
    checkedLength() {
      return this.cartList.filter((item) => item.ischecked).length;
    },
    isSelectAll() {
      //有四种方案，filter，find，some，every
      //every():一假即假 ，而且只要有一个元素是假，其后面的元素将不再遍历
      //some()：一真即真
      return (
        this.cartList.length !== 0 &&
        this.cartList.every((item) => item.ischecked)
      );
    },
  },
  methods: {
    buttonClick() {
      if (this.isSelectAll) {
        //全部选中
        this.cartList.forEach((item) => (item.ischecked = false));
      } else {
        //全部不选中
        this.cartList.forEach((item) => (item.ischecked = true));
      }
    },
    onSubmit() {
      if (!this.checkedLength) {
        console.log("toast:", this.$toast);
        this.$toast.show("你还没有选中商品哦");
      }
    },
  },
};
</script>

<style scoped>
.cart-bottom-bar {
  font-size: 15px;
  position: fixed;
  right: 0;
  bottom: 50px;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 10px;
  border-top: 1px solid #cccccc;
}
.checked-all {
  display: flex;
  align-items: center;
  /* border: 1px solid blue; */
}
.checked-all .seal {
  padding-left: 3px;
}
.cart-bottom-price {
  margin-left: 35px;
}
.cart-bottom-price span {
  color: red;
}
.cart-bottom-btn button {
  line-height: 50px;
  position: absolute;
  right: 0;
  bottom: 0;
  display: block;
  height: 50px;
  padding: 0 15px;
  color: white;
  border: 0;
  outline: none;
  background: linear-gradient(to right, #ff6034, #ee0a24);
}
.cart-bottom-btn button:active {
  opacity: 0.8;
}
</style>
