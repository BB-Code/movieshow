<template>
  <div>
    <movieIndexHeader />
    <div class="context-main">
      <div class="context-left">
        <ul class="content-ul">
          <movieList />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import MovieIndexHeader from '@/components/movieIndexHeader'
import MovieList from '@/components/movieList'
export default {
  components: { MovieIndexHeader, MovieList }
}
</script>

<style>
</style>
