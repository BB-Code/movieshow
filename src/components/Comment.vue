<!--
 * @Author: bobocde
 * @Description:
-->
<template>
  <div>
    <label for="">Comment</label>

    <div style="padding: 5px">
      <textarea
        v-model="context"
        id=""
        cols="30"
        rows="10"
        placeholder="content"
      ></textarea>
    </div>
    <div style="padding-top: 10px">
      <button @click="send">Comment</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [],
      context: ''
    }
  },
  methods: {
    send () {}
  }
}
</script>

<style>
</style>
