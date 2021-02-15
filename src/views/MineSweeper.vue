<template lang='pug'>
div
  BoardGame
</template>
<script lang="ts">
import Vue from 'vue'
import DoubleList from '../components/DoubleList.vue'
import BoardGame from '../components/mine-sweeper/BoardGame.vue'
export default Vue.extend({
  name: 'MineSweeper',
  components: {
    DoubleList,
    BoardGame
  }
})
</script>
