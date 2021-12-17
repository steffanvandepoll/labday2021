<template>
<div class="test" @click="Typed"> 
    <h1 class="svg"> {{message}} </h1>
    <h1 id="ha">  </h1>
    <button id="swift" @click="gaan" v-on:keyup.enter="submitForm"  @mouseover="Random"> knop </button>
    <!-- <div class="grid">  <button ></button> <button></button> <button></button> <button></button> <button></button> <button></button> 
    <button></button> <button></button> <button></button> <button></button> <button></button> <button></button><button></button> <button></button> <button></button> <button></button> <button></button> <button></button> 
    <button></button> <button></button> <button></button> <button></button> <button></button> <button></button> </div> -->
</div>
</template>
<script>


export default {
    name: 'TheThing',
created() {

},
data() {
    return { position: 100,
    message: "Klik even op de knop",
    submitted: false, }
  },
methods: {
        Random() {
  var button = document.getElementById("swift");
  var RandomX = Math.random() * 90 + "%";
  var RandomY = Math.random() * 92 + "%";
  button.style.left = RandomX;
  button.style.top = RandomY;
},
submitForm(){
        this.$router.push("redemption")      
    },
   


    },
   

}
</script>
<style>

* {
  
  cursor:url('../assets/tbighand2.png'), auto;
}
button{
    
    all:unset
}
.next {
    width: 50px;
    height: 50px;
}
.grid {
    margin-left: 100px;
    display: grid;
    grid-template-rows:    repeat(4, 10px);
grid-template-columns: repeat(10, 10px);
}
.grid button {
    background-color: red;
    
    height: 5px;
   border: 5px solid black
}
.grid button:hover {
    background-color: white;
    
}
button:focus {
background-color: aqua;

}
#swift {
    transition: left 0.2s ease 0s, top 0.2s ease 0s, background 0.2s ease 0s,
    color 0.2s ease 0s, box-shadow 0.2s ease 0s;
   
  position: absolute;
  left: 40%;
  top: 45%;
    animation: color-change 1s infinite;
}
@keyframes color-change {
  0% { color: red; }
  50% { color: blue; }
  100% { color: red; }
}
  
</style>