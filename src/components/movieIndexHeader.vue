<!--
 * @Author: bobocde
 * @Description:
-->
<template>
  <div class="header">
    <router-link to="/">
      <div class="header_menu">Home</div>
    </router-link>
    <router-link to="/movies">
      <div class="header_menu">Movie</div>
    </router-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
.header {
  width: 100%;
  height: 60px;
  position: fixed;
  left: 0;
  top: 0;
  color: #fff;
  background-color: #34495e;
  border-bottom: 2px solid #000;
}
.header_menu {
  padding-left: 60px;
  padding-top: 20px;
  float: left;
  color: #fff;
}
</style>
