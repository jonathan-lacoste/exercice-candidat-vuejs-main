<template lang='pug'>
div
  div.cell-default
  div.cell-good
  div.cell-bomb
  //- h2 Find me in @/src/components/mine-sweeper/Cell.vue
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Cell'
})
</script>

<style lang="scss">
%cell {
  height: 30px;
  width: 30px;
}
.cell-default {
  @extend %cell;
  background-color: gray;
}
.cell-good {
  @extend %cell;
  background-color: green;
}
.cell-bomb {
  @extend %cell;
  background-color: red;
}
</style>
