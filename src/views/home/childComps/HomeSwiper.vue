<template>
  <div class="home-swiper">
    <swiper>
      <swiper-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" @load="imageLoad" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "HomeSwiper",
  props: {
    banners: {
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
    return {
      isLoaded: false,
    };
  },
  methods: {
    imageLoad() {
      if (!this.isLoaded) {
        this.$emit("swiperImageLoad");
        this.isLoaded = true;
      }
    },
  },
};
</script>

<style scoped>
/* @import url(); 引入公共css类 */
</style>
