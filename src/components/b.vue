<template>
  <div>
    <p>I am component b</p>
    <button @click="emitMyEvent">emit</button>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        hello: 'i am component b'
      }
    },
    methods: {
      emitMyEvent() {
        this.$emit('my-event', this.hello)
      }
    }
  }
</script>


<style>

</style>
