<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="(item, index) in topImages" :key="index">
      <img :src="item" />
    </swiper-item>
  </swiper>
</template>

<script>
// 此行导入其他文件（如组件，工具js，第三方插件js，json文件，图片文件等）
import { Swiper, SwiperItem } from "components/common/swiper/index.js";
export default {
  name: "DetailSwiper",
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  // 创建完成（可以访问当前this实例）
  created() {},
  // 挂载完成（可以访问DOM元素）
  mounted() {
  },
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
.detail-swiper {
    height: 300px;
    overflow: hidden;
}
</style>
