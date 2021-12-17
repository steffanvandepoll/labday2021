<template>
  <div>
    <div id="madness">
        <div id="0"><div></div></div>
        <div id="1"><div></div></div>
        <div id="2"><div></div></div>
        <div id="3"><div></div></div>
        <div id="4"><div></div></div>
        <div id="5"><div></div></div>
        <div id="6"><div></div></div>
        <div id="7"><div></div></div>
        <div id="8"><div></div></div>
        <div id="9"><div></div></div>
        <div id="10"><DaredevilContent/></div>
        <div id="11"><div></div></div>
        <div id="12"><div></div></div>
        <div id="13"><div></div></div>
        <div id="14"><div></div></div>
        <div id="15"><div></div></div>
        <div id="16"><div></div></div>
        <div id="17"><div></div></div>
        <div id="18"><div></div></div>
        <div id="19"><div></div></div>
    </div>
    <div id='daredevil-form'>
      <form ref="form" @submit.prevent="submitFormDaredevil">
          <label>What game is the promotional poster made for?  </label>
          <input name="form-data" v-model="formData">
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DaredevilContent from '@/components/DaredevilContent.vue'
require('../assets/scripts/divscrambler.min.js')

export default {
    name: 'Daredevil',
    components: {
      DaredevilContent
    },
    methods: {
      submitFormDaredevil(){
        if(this.formData === 'Fortnite' || this.formData === 'fortnite'){
          this.$router.push("thething")      
        }
      }
    }
}
</script>

<style scoped>
#daredevil-form {
  position: absolute;
  height: 5%;
  width: 100%;
}

#madness {
  position: absolute;
  margin-top: 5%;
  height: 95%;
  width: 100%;;
}

html, body {
  padding: 0;
  margin: 0;
}
</style>