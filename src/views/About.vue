<template>
  <div class="about">
    <h1>about</h1>
    <div>{{list}}</div>
  </div>
</template>


<script>

import api from  '../api/api'

export default {
  name: 'about',
  data(){
    return {
      list:""
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData () {
      let data ={
      }
      api.userHome(data).then((res)=>{
        this.list= res.data
      })

    }
  }
}
</script>
