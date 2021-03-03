<template>
  <div class="wrapper">
    <div class="select">
      <check-button
        :is-checked="this.item.ischecked"
        @click.native="buttonClick"
      />
    </div>
    <div class="img-container">
      <img :src="item.image" />
    </div>
    <div class="info-container">
      <div class="title word">{{ item.title }}</div>
      <div class="desc word">{{ item.desc }}</div>
      <div class="cost">
        <div class="price">￥{{ item.price }}</div>
        <div class="count">X{{ item.count }}</div>
      </div>
    </div>
  </div>
</template>

<script>
// 此行导入其他文件（如组件，工具js，第三方插件js，json文件，图片文件等）
import CheckButton from "components/content/checkButton/CheckButton.vue";
export default {
  name: "CartListItem",
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {
    CheckButton,
  },
  data() {
    return {};
  },
  methods: {
    buttonClick() {
      this.item.ischecked = !this.item.ischecked;
    },
  },
};
</script>

<style scoped>
.wrapper {
  height: 24vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #cccccc;
  /* border: 1px solid rgb(63, 228, 21); */
}
.select {
  width: 15px;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.img-container {
  width: 30%;
  height: 80%;
  overflow: hidden;
  border-radius: 5px;
}
.img-container img {
  width: 100%;
}
.info-container {
  width: 60%;
  height: 80%;
}
.word {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.desc {
  margin-top: 12px;
  font-size: 14px;
  font-weight: bold;
  color: rgb(140, 136, 136);
}
.cost {
  margin-top: 35px;
  color: rgb(233, 156, 13);
  display: flex;
  justify-content: space-between;
}
</style>
