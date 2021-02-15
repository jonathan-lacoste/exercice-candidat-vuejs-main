
<template lang='pug'>
  div
    ul
      li(v-for="(value, key) in data")
        span Société {{value.title}}, id: {{key}}, code: {{value.code}}
</template>

<script lang="ts">
import axios from 'axios'

export default {
  name: 'List',
  data () {
    return {
      data: []
    }
  },
  created: function () {
    axios
      .get('/api/companies')
      .then(res => {
        this.data = res.data[0].companies
      })
  }
}
</script>
