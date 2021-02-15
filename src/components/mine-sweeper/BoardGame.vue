<template lang='pug'>
div
  h2 Find me in @/src/components/mine-sweeper/BoardGame.vue
  GridGame
</template>

<script lang="ts">
import Vue from 'vue'
import GridGame from './Grid.vue'
import Score from './Score.vue'
export default Vue.extend({
  name: 'BoardGame',
  components: {
    GridGame,
    Score
  }
})
</script>

<style lang="scss">
</style>
