<template lang='pug'>
div
  Cell
  h2 Find me in @/src/components/mine-sweeper/Grid.vue
  b-row(v-for="(arrayI, i) in tab" :key="i")
    b-col(v-for="(val, j) in arrayI" :key="j")
      span {{val}}
</template>

<script lang="ts">
import Vue from 'vue'
import Cell from './Cell.vue'
import SolverCell from './SolverCell.vue'
import _ from 'lodash'
export default Vue.extend({
  name: 'Grid',
  components: {
    Cell,
    SolverCell
  },
  data () {
    return {
      lineSize: 6,
      columnSize: 6,
      tab: [] as number[][],
      maxBomb: 0,
      successScore: 45,
      nbBomb: 0
    }
  },

  created () {
    this.initGrid()
  },
  methods: {
    initGrid () {
      // Calculer le max de bomb avec les minimum de case pour atteindre 45
      const nbCells = this.lineSize * this.columnSize
      this.maxBomb = nbCells - this.successScore / 3
      this.nbBomb = _.random(1, this.maxBomb)
      const nbCellsGood = nbCells - this.nbBomb
      const arrayVal = [] as number[]
      // let nbRandomVal = 0
      for (let i = 0; i < nbCellsGood; i++) {
        let val = 0
        if (this.successScore - _.sum(arrayVal) - (nbCellsGood - i) >= 2) {
          if (this.successScore - _.sum(arrayVal) > 2 * (nbCellsGood - i)) {
            val = 3
          } else {
            val = _.random(1, 3)
            // nbRandomVal++
          }
        } else if (this.successScore - _.sum(arrayVal) - (nbCellsGood - i) >= 1) {
          if (nbCellsGood - i === 1) {
            val = 2
          } else {
            val = _.random(1, 2)
            // nbRandomVal++
          }
        } else if (this.successScore - _.sum(arrayVal) - (nbCellsGood - i) === 0) {
          val = 1
        }
        arrayVal.push(val)
      }
      // console.log(this.nbBomb)
      // console.log(arrayVal)
      // console.log(nbRandomVal)
      // console.log(_.sum(arrayVal))
    }
  }
})
</script>

<style lang="scss">
</style>
