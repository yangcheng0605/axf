<template>
  <div id="app">
    <router-view/>
    <index v-show="hide"></index>
  </div>
</template>

<script>
 import index from '@/components/index'
 export default {
   created () {
     this.$store.dispatch('data1')
     .then(data => {
       if (data.status) {
         return this.$store.dispatch('data2')
       }
     })
     this.$store.dispatch('classifys')
     this.$store.dispatch('user')
     this.$store.dispatch('citys')
   },
   computed: {
     hide () {
       return this.$store.state.hide
     }
   },
   components: {
     index,
     top
   }
 }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  ul,li,ol{
      list-style: none
  }
  html,body {
    width: 100%;
    height: 100%;
  }
  #app {
    width: 100%;
    height: 100%;
  }
  #box,#center,header,#b_a {
    width: 100%;
    height: 100%;
  }
  #center {
    position: absolute;
    margin-top: 15%;
  }

</style>
