<template>
  <div class="redemption">
    <div class="wrapper">
        <nav id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/hell">Hell</router-link> |
            <router-link to="/redemption">Redemption</router-link>
        </nav>
        <h1>You did it!</h1>
        <h2>I'm not even mad</h2>
        <p>This page was never about solving puzzles... </p>
        <blockquote>'... it's about sending a message'</blockquote>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Redemption',
}
</script>

<style scoped>

 .redemption{
   background-image: url("../assets/joker.jpg");
   background-repeat: no-repeat;
   background-position-y: bottom;
   background-position-x: calc(100% + 150px);
   display: flex;
   height: 100vh;
   width: 100vw;
   justify-content: center;
 }
</style>
