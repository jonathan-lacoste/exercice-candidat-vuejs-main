
<template lang='pug'>
  div
    b-row
      b-col
        h3 Liste A
        ListCustomed(urlApi="/api/companies")
      b-col
        h3 Liste B
        ListCustomed
</template>

<script lang="ts">
import Vue from 'vue'
import ListCustomed from './ListCustomed.vue'

export default Vue.extend({
  name: 'App',
  components: {
    ListCustomed
  }
})
</script>
