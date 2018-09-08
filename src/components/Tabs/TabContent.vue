<template>
  <div class="tab-content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tab-content',
}
</script>

<style lang="scss">
  .tab {
    &-content {
      overflow-y: auto;
      @include mq(desktop) {
        height: calc(100% - 40px);
      }
    }
  }
</style>
