<template>
  <div class="home">
      <div class="wrapper">
      <h1>Please don't visit this website!</h1>
      <h2>It's not going to be a pleasant experience</h2>
      <p>This page is meant to make you feel how millions of people might feel everytime when they use our products. Don't want to be confronted? Thats fine. Feel free to leave at any time by pressing <strong>alt+f4</strong> or by pressing that <strong>on/off button</strong> on your machine (for real, that works). </p>
      <p>So you still want to keep going? Good luck... Use the forms in the upcoming pages to navigate your way to the end. This first page is easy</p>
      <p>Things are only going to get worse from here...</p>
      <form ref="form" @submit.prevent="submitForm" autocomplete="off">
        <label for="navigation-input-field"><strong>Send me to hell</strong></label>
        <input name="navigation-input-field" placeholder="Send me to hell" v-model="formData" required pattern="Send me to hell" title="Maybe try reading the label again">
      </form>
      <p v-if="submitted && formData && formData !== 'Send me to hell'">Maybe try reading the label?</p>
    </div>
    <img class="elmo" alt="A totally fine picture of a magnificant person" src="../assets/elmo.png" />
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: function(){
     return {
       formData: "",
       submitted: false,
    }
  },
 methods: {
    submitForm(){
      this.submitted = true;
      if(this.formData === 'Send me to hell'){
        this.$router.push("hell")      
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
   background-position-y: calc(100% + 110px);
   color: white;
   display: flex;
   height: 100vh;
   width: 100vw;
   justify-content: center;
   position: relative;
 }
 .elmo{
   position: absolute;
   width: 250px;
   bottom: 0;
 }
 .wrapper{
   max-width: 860px;
   margin-top:100px;
 }

 p{
   font-size: 16px;
   line-height: 23px;
 }

 form{
   margin: 50px 0;
   display: inline-flex;
   flex-direction: column;
 }
 form input{
   height: 25px;
   width: 250px;
   margin: 15px 0;
 }
</style>

