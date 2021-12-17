<template>
  <div id="hell">
    <aside>
      <h4 v-if="hell">Hello, welcome to hell</h4>
      <h4 v-else>Hello, welcome to heaven</h4>
      <img class="hamster" alt="" src="../assets/hamwalk.gif" />
      <img class="hamster" alt="" src="../assets/hamwalk.gif" />
      <img class="hamster" alt="" src="../assets/hamwalk.gif" />
      <img class="hamster" alt="" src="../assets/hamwalk.gif" />
      <img class="hamster" alt="" src="../assets/hamwalk.gif" />
      <img class="hamster" alt="" src="../assets/hamwalk.gif" />
      <img class="hamster" alt="" src="../assets/hamwalk.gif" />
      <p>
        <img class="hamster" alt="" src="../assets/gerbil.gif" />
        <img class="hamster" alt="" src="../assets/gerbil.gif" />
        <img class="hamster" alt="" src="../assets/hamu.gif" />
        <img class="hamster" alt="" src="../assets/hamu.gif" />
        <img class="hamster" alt="" src="../assets/gerbil.gif" />
        <img class="hamster" alt="" src="../assets/gerbil.gif" />
      </p>
      <img class="hamster" alt="" src="../assets/hamwalk.gif" />
      <img class="hamster" alt="" src="../assets/hamwalk.gif" />
      <img class="hamster" alt="" src="../assets/hamwalk.gif" />
      <img class="hamster" alt="" src="../assets/hamwalk.gif" />
      <img class="hamster" alt="" src="../assets/hamwalk.gif" />
      <img class="hamster" alt="" src="../assets/hamwalk.gif" />
      <img class="hamster" alt="" src="../assets/hamwalk.gif" />
    </aside>

    <div class="emilys-dog-rescue">
      <p>
        Emily has three dogs and two cats. They are all brown, but one of the
        dogs has spots. His name is Spot. Which of the following is true?
      </p>
      <ul>
        <li>A: Emily has three animals in total.</li>
        <li>B: Emily has more cats than dogs.</li>
        <li>C: One of Emily’s cats is black.</li>
        <li>D: All of Emily’s dogs have spots.</li>
        <li>E: None of these</li>
      </ul>
      <form ref="form" @submit.prevent="submitForm">
        <input
          name="navigation-input-field"
          placeholder="Get me out of here"
          v-model="formData"
        />
      </form>
      <p v-if="submitted && formData && formData !== 'E'">
        Maybe try reading the question in a more calm environment
      </p>
    </div>

    <audio id="toto" src="../assets/toto-africa.mp3" controls autoplay></audio>
    <PopUpHell v-if="hell" />
  </div>
</template>

<script>
import PopUpHell from "@/components/PopUpHell.vue";

export default {
  components: { PopUpHell },
  name: "Home",
  data: function () {
    return {
      formData: "",
      submitted: false,
      hell: false,
    };
  },
  methods: {
    submitForm() {
      this.submitted = true;
      if (this.formData === "E" || this.formData === "e") {
        this.$router.push("daredevil");
      }
    },

    hellToHeaven() {
      if (window.matchMedia("(prefers-reduced-motion)").matches) {
        this.hell = false;
        console.log("welcome to heaven");
      } else {
        this.hell = true;
      }
    },
  },
  mounted() {
    this.hellToHeaven();
  },
  metaInfo: {
    title: "Hell",
  },
};
</script>

<style>
#hell {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  background-image: url("../assets/banana-dance-dancing-banana.gif");
  background-size: 40px;
  background-repeat: repeat;
}

.emilys-dog-rescue {
  background-color: blue;
  text-align: left;
}
ul {
  list-style: none;
}

audio {
  bottom: 0px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

aside {
  width: 30%;
  padding-left: 15px;
  margin-left: 15px;
  float: left;
  font-style: italic;
  color: orange;
  background-color: yellow;
}

@media (prefers-reduced-motion) {
  #hell {
    background-image: none;
  }
  aside {
    background-color: beige;
    color: black;
    margin: 0 auto;
    content: "Hello, welcome to heaven";
  }
  audio {
    padding: 10px;
    margin: 0 auto;
  }
  .hamster {
    display: none;
  }
  .emilys-dog-rescue {
    width: 40%;
    background-color: #2c3e50;
    color: white;
    margin: 0 auto;
    padding: 10px;
  }
}
</style>
