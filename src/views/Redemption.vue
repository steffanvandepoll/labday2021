<template>
  <div class="redemption">
    <div class="wrapper">
        <h1>You did it!</h1>
        <h2>I'm not even mad</h2>
        <p>This page was never about solving puzzles... </p>
        <blockquote>'... it's about sending a message'</blockquote>

        <p>Want to go back and check out some of those lovely pages? </p>
        <nav id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/hell">Hell</router-link> |
            <router-link to="/thething">Rocky road</router-link> |
            <router-link to="/daredevil">See no evil...</router-link>
        </nav>
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
    background-color: #fdfdfd;
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
