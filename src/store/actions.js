import { ADD_COUNTER, ADD_TO_CART } from "./mutation-types.js";
export default {
  //  对于条件判断，最好也放到mutation中
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      // 1.查找购物车是否已存在该商品
      let product = context.state.cartList.find(
        (item) => item.iid === payload.iid
      );
      // 2.判断product
      if (product) {
        // 不可以将下面的product改成payload，两者不是同一个东西
        context.commit(ADD_COUNTER, product);
        resolve(`当前商品加入数量为${product.count}`)
      } else {
        payload.count = 1;
        payload.ischecked = true;
        context.commit(ADD_TO_CART, payload);
        resolve("加入购物车成功")
      }
    });
  },
};
