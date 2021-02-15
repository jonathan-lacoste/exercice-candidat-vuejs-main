
<template lang='pug'>
  div
    b-row
      b-col
        button(@click="moveItem") Déplacer dernier élément de A => B
        label Element déplacé: {{movedItem.title}}
    b-row
      b-col
        h3 Liste A
        ListCustomed(:list='companiesA')
      b-col
        h3 Liste B
        ListCustomed(:list='companiesB')
</template>

<script lang="ts">
import Vue from 'vue'
import ListCustomed from './ListCustomed.vue'

export default Vue.extend({
  name: 'DoubleList',
  components: {
    ListCustomed
  },
  computed: {
    movedItem () {
      return this.$store.getters.getMovedItem
    },
    initCompanies () {
      return this.$store.getters.getInitCompanies
    },
    companiesA () {
      return this.$store.getters.getCompanies[0]
    },
    companiesB () {
      return this.$store.getters.getCompanies[1]
    }
  },
  methods: {
    moveItem () {
      this.$store.dispatch('moveItem')
    }
  }
})
</script>
