<!--
 * @Author: bobocde
 * @Description:
-->
<template>
  <div class="container">
    <div>
      <movieIndexHeader />
    </div>
    <div class="userMassage">
      <userMassage />
    </div>
    <div class="context-pic">
      <banner />
    </div>
    <div class="context-main">
      <div class="context-left">
        <ul class="content-ul">
          <movieList />
        </ul>
      </div>
      <div class="context-right">
        <ul class="content-ul">
          <newList />
        </ul>
      </div>
    </div>
    <div>
      <commonFooter />
    </div>
  </div>
</template>

<script>
import MovieIndexHeader from '@/components/movieIndexHeader'
import CommonFooter from '@/components/commonFooter'
import UserMassage from '@/components/userMassage'
import Banner from '@/components/banner'
import MovieList from '@/components/movieList'
import NewList from '@/components/newList'
export default {
  components: {
    MovieIndexHeader,
    UserMassage,
    Banner,
    MovieList,
    NewList,
    CommonFooter
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  margin: 0 auto;
}
.userMassage {
  padding-top: 60px;
  margin-left: -10px;
  margin-top: -10px;
}
.context-pic {
  padding-top: 5px;
}
.context-main {
  height: 50px;
}
.context-left {
  width: 60%;
  float: left;
  margin-top: 5px;
  border-top: 1px solid #ccc;
}
.context-right {
  width: 38%;
  float: left;
  margin-top: 5px;
  margin-left: 1%;
  border-top: 1px solid #ccc;
}
.content-ul {
  padding: 0.5rem;
  background-color: #fff;
}
</style>
