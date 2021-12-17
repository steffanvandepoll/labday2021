<template>
  <div class="home">
      <div class="wrapper">
      <h1>Please don't visit this website</h1>
      <h2>It's not going to be a pleasant experience</h2>
      <p>This page is meant.. to make you feel how millions of people might feel every when they use our products. Don't want to be confronted? Thats fine. Feel free to leave at any time by pressing alt+f4 or by pressing that on/off button on your machine (for real, that works). </p>
      <p>So you still want to keep going? Good luck... Use the forms in the page to continue to the next page.</p>
      <p>If you can....</p>
      <form ref="form" @submit.prevent="submitForm">
        <input name="form-data" v-model="formData">
    </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data: function(){
     return {
       formData: "",
    }
  },
 methods: {
    submitForm(){
      if(this.formData === 'Send me to hell'){
        this.$router.push("about")      
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .home{
   background-color: #020501;
   background-image: url("../assets/flames.gif");
   background-repeat: repeat-x;
   background-position-y: calc(100% + 100px);
   color: white;
   display: flex;
   height: 100vh;
   width: 100vw;
   justify-content: center;
 }
 .wrapper{
   max-width: 860px;
   margin-top:100px;
 }
</style>

