<!--
 * @Author: bobocde
 * @Description:
-->
<template>
  <div class="headerPic">
    <div>
      <p class="imgTitle">{{ recommendTitle }}</p>
      <a href="baidu.com">
        <img
          src="http://center.tiansu.org/Edu/Content/UploadFiles/Admin/Advert/Images/202004/202004230926045577170.jpg"
          class="headerImg"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      recommendTitle: ''
    }
  }
}
</script>

<style scoped>
.headerPic {
  height: 300px;
  width: 100%;
  background-color: antiquewhite;
  overflow: hidden;
}
.headerImg {
  height: 300px;
  width: 100%;
}
.imgTitle {
  z-index: 2;
  padding-left: 45%;
  padding-top: 230px;
  position: absolute;
  color: #fff;
  font-size: 20px;
}
</style>
