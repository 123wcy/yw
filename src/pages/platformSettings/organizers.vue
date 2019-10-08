<template>
  <div class="role-management-container clearfix">
    <Subnav class="fl"/>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Subnav from '../../components/platformSettings/organizers/subnav'
  export default {
    components: {
      Subnav
    }
  }
</script>

<style lang="less" scoped>
  .role-management-container {
    padding: 53px 0 0 55px;
    .main {
      padding: 20px;
      background-color: #fff;
      height: 1000px;
      overflow: hidden;
      position: relative;
    }
  }
</style>

