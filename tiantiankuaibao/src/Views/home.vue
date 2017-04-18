<template>
  <div>
    <Bar></Bar>fsdf
  </div>
</template>

<script>
import Bar from './../components/Bar'
export default {
  name: 'home',
  components: {
    Bar
  },
  data () {
    return {
      isIndex: true
    }
  }
}
</script>

<style scoped>
@import './../assets/css/sm.css';
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
