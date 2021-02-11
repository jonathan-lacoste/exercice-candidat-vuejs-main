
<template lang='pug'>
  div
    ul
      li(v-for="(value, key) in data")
        span.text-primary(v-if="value.color === 'bleu'") Société {{value.title}}
        span.text-danger(v-if="value.color === 'rouge'") Société {{value.title}}
        span.text-warning(v-if="value.color === 'jaune'") Société {{value.title}}
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'

declare interface Companies {
    title: string;
    code: string;
    color: string;
  }
export default Vue.extend({
  data () {
    return {
      data: [] as Companies[],
      color: []
    }
  },
  created: function () {
    axios
      .get('/api/companies')
      .then(response => {
        const res = response.data[0].companies
        for (let i = 0; i < res.length; i++) {
          let color = ''
          if (res[i].title[0].toUpperCase() === 'S') {
            color = 'jaune'
          } else {
            if (res[i].title.length % 2 === 0) {
              color = 'rouge'
            } else {
              color = 'bleu'
            }
          }
          const temp: Companies = { ...res[i], color: color }
          this.data.push(temp)
        }
      })
    console.log('coucoo')
  }
})
</script>
