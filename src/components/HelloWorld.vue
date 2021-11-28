<template>
  <div class="hello">
   <Header/>
  </div>
</template>

<script>
 import Header from '../components/Header.vue';
import { ref } from 'vue'
// import Home from '../components/Home.vue';
// import About from '../components/About.vue'
export default {
  name: 'HelloWorld',
  components: {
   Header,
  },
  props: {
    msg: String
  },
  data(){
   return {
      tab: ref('images')
    }
},
mounted (){
  console.log(this.$route.path)
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
