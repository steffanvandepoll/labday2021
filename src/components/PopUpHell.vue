<template>
  <div class="modal__background">
    <div id="pop-up-hell">
      <div role="dialog" id="content">
        <p>
          You might want to turn off animations You might want to turn off
          animations You might want to turn off animations You might want to
          turn off animations You might want to turn off animations You might
          want to turn off animations You might want to turn off animations You
          might want to turn off animations You might want to turn off
          animations You might want to turn off animations You might want to
          turn off animations You might want to turn off animations You might
          want to turn off animations You might want to turn off animations You
          might want to turn off animations You might want to turn off
          animations You might want to turn off animations You might want to
          turn off animations You might want to turn off animations You might
          want to turn off animations You might want to turn off animations You
          might want to turn off animations You might want to turn off
          animations You might want to turn off animations You might want to
          turn off animations You might want to turn off animations You might
          want to turn off animations You might want to turn off animations You
          might want to turn off animations You might want to turn off
          animations You might want to turn off animations You might want to
          turn off animations You might want to turn off animations You might
          want to turn off animations You might want to turn off animations You
          might want to turn off animations You might want to turn off
          animations You might want to turn off animations You might want to
          turn off animations You might want to turn off animations You might
          want to turn off animations You might want to turn off animations You
          might want to turn off animations
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopUpHell",
};
</script>

<style scoped>
.modal__background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 98;
  display: flex;
  justify-content: center;
  align-items: center;
}

#pop-up-hell {
  position: relative;
  z-index: 99;
  width: 100%;
  max-width: 600px;
  max-height: 100%;
  padding: 20px 55px 20px 55px;
  background-color: #fff;
  height: 500px;
  width: 500px;
  animation: flash 1s forwards linear infinite;
}
@keyframes flash {
  0% {
    background-color: yellow;
  }
  25% {
    background-color: green;
  }
  50% {
    background-color: purple;
  }
  100% {
    background-color: red;
  }
}
</style>
