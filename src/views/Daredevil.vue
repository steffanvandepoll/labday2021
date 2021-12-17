<template>
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
</template>

<script>
// @ is an alias to /src
import DaredevilContent from '@/components/DaredevilContent.vue'
require('../assets/scripts/divscrambler.min.js')

export default {
  name: 'Daredevil',
  components: {
    DaredevilContent
  }
}
</script>