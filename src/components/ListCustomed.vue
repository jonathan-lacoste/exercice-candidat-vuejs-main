
<template lang='pug'>
  div
    b-list-group
      b-list-group-item(v-for="(value, key) in data" :key="key")
        span(v-if="color" :class='getClass(value)') {{value.title}}
        span(v-else) {{value.title}}
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'

declare interface Companies {
    title: string;
    code: string;
  }
export default Vue.extend({
  props: { color: Boolean, urlApi: String },
  data () {
    return {
      data: [] as Companies[]
    }
  },
  created: function () {
    if (this.urlApi) {
      axios
        .get(this.urlApi)
        .then(res => {
          this.data = res.data[0].companies
        })
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
