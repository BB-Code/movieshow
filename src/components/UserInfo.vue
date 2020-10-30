<!--
 * @Author: bobocde
 * @Description:
-->
<template>
  <div>
    <movieIndexHeader />
    <userMassage />
    <div class="box">user name</div>
    <div class="box">user phone</div>
    <div class="box">user status (is stop)</div>
    <div class="box">user name</div>
    <button>update password</button>
    <commonFooter />
  </div>
</template>

<script>
import MovieIndexHeader from '@/components/movieIndexHeader'
import CommonFooter from '@/components/commonFooter'
import UserMassage from '@/components/userMassage'
export default {
  components: {
    MovieIndexHeader,
    UserMassage,
    CommonFooter
  }
}
</script>

<style>
</style>
