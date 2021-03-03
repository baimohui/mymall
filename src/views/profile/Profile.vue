<template>
  <div class="profile">
    <nav-bar class="mynav"><div slot="center">我的档案</div></nav-bar>
    <login />
    <money />
    <guide-list />
  </div>
</template>

<script>
  import Login from "./childComps/Login.vue"
  import Money from "./childComps/Money.vue"
  import GuideList from "./childComps/GuideList.vue"
  import NavBar from "components/common/navbar/NavBar.vue"
  export default {
    name: "Profile",
    components: {Login, Money, NavBar, GuideList}
  }
</script>

<style scoped>
.mynav {
  background-color: #ff8e96;
  color: #fff;
}
</style>
