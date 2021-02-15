
<template lang='pug'>
  div
    b-list-group
      b-list-group-item(v-for="(value, key) in listDefault" :key="key")
        span(v-if="color" :class='getClass(value)') {{value.title}}
        span(v-else) {{value.title}}
</template>

<script lang="ts">
import Vue from 'vue'

declare interface Companies {
  title: string;
  code: string;
}
export default Vue.extend({
  name: 'ListCustomed',
  props: {
    color: Boolean,
    allCompagnies: Boolean,
    list: Array
  },
  data () {
    return {
      data: [] as Companies[]
    }
  },
  computed: {
    listDefault () {
      console.log(this.allCompagnies)
      return this.allCompagnies ? this.$store.getters.getInitCompanies : this.list
    }
  },
  methods: {
    getClass: function (val: Companies) {
      let color = ''
      if (val.title[0].toUpperCase() === 'S') {
        color = 'text-warning'
      } else {
        if (val.title.length % 2 === 0) {
          color = 'text-danger'
        } else {
          color = 'text-primary'
        }
      }
      return color
    }
  }
})
</script>
