<template>
  <div class="header">
    <i class="iconfont icon-bilibili logo"></i>
    <i class="iconfont icon-Search search"></i>
  </div>
</template>

<style lang="less" scoped>
@import "../assets/css/index.less";
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 1.17rem;
  .body-padding(0.42rem);
  .logo {
    font-size: 0.7rem;
    color: @theme-color;
  }
  .search {
    font-size: 0.65rem;
    color: @desc-color;
    cursor: pointer;
  }
}
</style>
