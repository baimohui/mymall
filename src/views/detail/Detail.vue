<template>
  <div id="detail">
    <dnav-bar class="nav-bar" ref="nav" @titleClick="titleClick" />
    <scroll class="content" ref="scroll" :probeType="3" @scroll="contentScroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad" />
      <detail-param-info ref="params" :param-info="paramInfo" />
      <detail-comment-info ref="comment" :comment-info="commentInfo" />
      <goods-list
        ref="recommend"
        :goods="recommendList"
        :is-recommend="true"
        class="detail-set-scroll"
      />
    </scroll>
    <detail-bottom-bar @cartClick="cartClick" />
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
// 此行导入其他文件（如组件，工具js，第三方插件js，json文件，图片文件等）
import dnavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailParamInfo from "./childComps/DetailParamInfo.vue";
import DetailCommentInfo from "./childComps/DetailCommentInfo.vue";
import DetailBottomBar from "./childComps/DetailBottomBar.vue";

import Scroll from "components/common/scroll/Scroll.vue";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backTop/BackTop";
import { debounce } from "common/utils.js";
import { backTopMixin } from "common/mixin";
import { mapActions } from "vuex";

import {
  getDetail,
  getRecommend,
  Goods,
  Shop,
  GoodsParam,
} from "network/detail.js";
export default {
  name: "Detail",
  mixins: [backTopMixin],
  props: {},
  components: {
    dnavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    Scroll,
    GoodsList,
    BackTop,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommendList: [],
      themeTopYs: [],
      getThemeTopYs: null,
      currentIndex: 0,
    };
  },
  // 创建完成（可以访问当前this实例）
  created() {
    // 1.保存路由传入的参数iid
    this.iid = this.$route.params.iid;
    // 根据iid请求详情数据
    getDetail(this.iid).then((res) => {
      // 2.获取顶部轮播图数据
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      console.log("data:", data);
      // 3.获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 4.创建店铺信息的对象
      this.shop = new Shop(data.shopInfo);
      // 5.保存商品的详情数据
      this.detailInfo = data.detailInfo;
      // 6.获取参数的信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.shopInfo.services
      );
      // 7.取出评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
      this.getThemeTopYs = debounce(() => {
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.params.$el.offsetTop);
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
        this.themeTopYs.push(Number.MAX_VALUE);
        // console.log(this.themeTopYs);
      }, 100);
    });
    getRecommend().then((res) => {
      // console.log(res);
      this.recommendList = res.data.list;
    });
  },
  // 挂载完成（可以访问DOM元素）
  mounted() {
    // 防抖
    //  放到Mounted里面是因为$ref.scroll在created组件刚初始化时还没加载出来
    const refresh = debounce(this.$refs.scroll.refresh, 50);
    this.$bus.$on("detailItemImageLoad", () => {
      //   console.log("detail-received");
      refresh();
    });
  },
  methods: {
    ...mapActions(["addCart"]), //映射
    imageLoad() {
      this.$refs.scroll.refresh();
      this.getThemeTopYs();
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200);
    },
    contentScroll(position) {
      // 1.获取y值
      const positionY = -position.y;
      // 2.对比
      let length = this.themeTopYs.length;
      for (let i = 0; i < length - 1; i++) {
        // console.log(i);
        if (
          this.currentIndex !== i &&
          positionY >= this.themeTopYs[i] &&
          positionY < this.themeTopYs[i + 1]
        ) {
          //   console.log("currentIndex", i);
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
      // 3.监听返回顶部按钮位置
      this.listenShowBackTop(position);
    },
    cartClick() {
      // 1.获取需要展示到购物车的商品信息
      const product = {
        image: this.topImages[0],
        title: this.goods.title,
        desc: this.goods.desc,
        price: this.goods.newPrice,
        iid: this.iid,
      };
    //   this.$store.dispatch("addCart", product).then((res) => console.log(res));
      this.addCart(product).then((res) => this.$toast.show(res));
    },
  },
};
</script>

<style scoped>
/* @import url(); 引入公共css类 */
#detail {
  height: 100vh;
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.nav-bar {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content {
  /* height: calc(100% - 44px); */
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  /* tabbar would just slide up and down without the following code */
  overflow: hidden;
}
</style>
