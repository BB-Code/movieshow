<template>
  <div>
    <MovieIndexHeader />
    <div class="context-main">
      <h1>article name</h1>
      <div class="">pushed Time:</div>
      <div>article content</div>
    </div>
    <div>
      <div class="btnPostion">
        <div class="support">support <span class="viewNum">1</span></div>
      </div>
    </div>
    <div>
      <comment />
    </div>
  </div>
</template>

<script>
import MovieIndexHeader from '@/components/movieIndexHeader'
import Comment from '@/components/Comment'
export default {
  components: {
    MovieIndexHeader,
    Comment
  }
}
</script>

<style scoped>
.headerImg {
  height: 200px;
}
.context-main {
  padding-top: 150px;
}
.btnPostion {
  padding-left: 48px;
}
.support {
  border: 1px solid #000;
  width: 60px;
}
.viewNum {
  font-size: 10px;
}
</style>
