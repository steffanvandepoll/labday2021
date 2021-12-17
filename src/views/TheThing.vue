<template>
<div class="test"> 
    <h1 v-if="level1" class="svg"> {{message}} </h1>
    <h1 v-else class="svg"> Typ de code 5 3 1 9 </h1>
    <button v-if="level1" id="swift" @click="submitForm" v-on:keyup.enter="submitForm"  @mouseover="Random"> knop </button>
    <div v-else>
    <h1 id="ha">  {{vala}}</h1>
    <div class="grid"> 
         <button v-for="(button, index ) in buttons" :class="'btn' + button" @click="plusone(button)" :key="index" >{{button}}</button> 
    </div>
    <button class="remove" @click="remove" >REMOVE</button>
     </div>
</div>
</template>
<script>


export default {
    name: 'TheThing',
created() {
this.message = "Klik even op de knop"
},
data() {
    return { position: 100,
    message: String,
    submitted: false,
    vala:[],
    buttons: [1,2,3,4,5,6,7,8,9],
    goodanswer: [5,3,1,9],
    level1:true }
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
    this.level1 = false
        // this.$router.push("redemption")      
    },

    plusone(value){
        this.vala.push(value)
       
        
        if(this.vala.sort().join(',')=== this.goodanswer.sort().join(',')){
            this.$router.push("redemption") }
        
    },
remove() {
this.vala = [];
let currentIndex = this.buttons.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [this.buttons[currentIndex], this.buttons[randomIndex]] = [
      this.buttons[randomIndex], this.buttons[currentIndex]];
  }

 },
    
    },
 mounted: function () {
  window.setInterval(() => {
    this.remove()
  }, 10000)
},
    computed: {
       
    }
   

}

</script>
<style>

* {
  cursor:url('../assets/tbighand2.png'), auto;
}
button{
    
    all:unset
}
.btn1 {
    cursor:url('../assets/tbighand2.png') 10 10, auto;
}
.btn2 {
    cursor:url('../assets/tbighand2.png')50 50, auto;
}
.btn3 {
    cursor:url('../assets/tbighand2.png')-50 -50, auto;
}
.btn4 {
    cursor:url('../assets/tbighand2.png')20 20, auto;
}
.btn5 {
    cursor:url('../assets/tbighand2.png')-90 -90, auto;
}
.btn6 {
    cursor:url('../assets/tbighand2.png') , auto;
}
.btn7 {
    cursor:url('../assets/tbighand2.png')25 25, auto;
}
.btn8 {
    cursor:url('../assets/tbighand2.png')90 90, auto;
}
.btn9 {
    cursor:url('../assets/tbighand2.png')0 -90, auto;
}
.remove {

}
.next {
    width: 50px;
    height: 50px;
}
.grid {
 
    color:white;
    font-size: 50px;
    /* display: grid;
    grid-template-rows:    repeat(4, 50px);
grid-template-columns: repeat(3, 50px);
} */
}
.grid button {
    background-color: red;
    
    
   border: 2px solid black
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