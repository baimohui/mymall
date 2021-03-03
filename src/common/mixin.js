import BackTop from "components/content/backTop/BackTop.vue";

export const backTopMixin = {
  components: {
    BackTop,
  },
  data() {
    return {
      // 当前滚动的位置
      isShowBackTop: false,
    };
  },
  methods: {
    // 回到顶部
    backClick() {
      // 调用子组件里面封装的scrollTo方法即可
      this.$refs.scroll.scrollTo(0, 0);
    },
    listenShowBackTop(position) {
      this.isShowBackTop = -position.y > 1000;
    },
  },
};
