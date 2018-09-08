<template>
  <div class="tv-show-loading">
    <div class="icon">
      <logo-telecine/>
      <span class="bar"></span>
    </div>
  </div>
</template>

<script>
import LogoTelecine from './../../assets/images/logo-telecine.svg';

export default {
  name: 'tv-show-loading',
  components: {
    LogoTelecine,
  },
}
</script>

<style scoped lang="scss">
  .tv {
    &-show {
      &-loading {
        align-items: center;
        display: flex;
        height: 100%;
        justify-content: center;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 3;
        .bar {
          background-color: $primary;
          display: block;
          height: 2px;
          margin: 0 auto;
          width: 30px;
        }
      }
    }
  }
</style>
