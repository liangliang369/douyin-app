<template>
  <div class="tabbar">
    <ul class="tabbar-wrapper">
      <router-link to="/" tag="li" class="tabbar-item" exact>首页</router-link>
      <router-link to="/city" tag="li" class="tabbar-item">北京</router-link>
      <router-link to="/create" tag="li" class="tabbar-item">
        <i class="iconfont icon-jia"></i>
      </router-link>
      <router-link to="/message" tag="li" class="tabbar-item">消息</router-link>
      <router-link to="/mine" tag="li" class="tabbar-item">我的</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "tabbar",
  props: {}
};
</script>

<style scoped lang="scss">
.tabbar-wrapper {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: #000;
  .tabbar-item {
    flex: 1;
    text-align: center;
    font-size: 16px;
    color: #cecece;
    font-weight: 600;
  }
  .router-link-active {
    color: #ffffff;
  }
}
</style>
