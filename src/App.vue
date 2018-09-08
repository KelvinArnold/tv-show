<template>
  <div class="app-container">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style lang="scss">
  body {
    height: 100vh;
    width: 100vw;
  }
  .app {
    &-container {
      height: auto;
      width: 100vw;
      background-position: right;
      background-size: cover;
      background-repeat: no-repeat;
      @include mq(desktop) {
        height: 100vh;
      }
    }
  }
</style>
