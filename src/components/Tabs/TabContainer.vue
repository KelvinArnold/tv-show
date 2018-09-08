<template>
  <div class="tab-container">
    <slot name="navigation"></slot>
    <slot name="content"></slot>
    <slot name="logo"></slot>
  </div>
</template>

<script>
export default {
  name: 'tab-container',
}
</script>

<style lang="scss">
  .tab {
    &-container {
      height: 100%;
      position: relative;
      .company {
        &-logo {
          opacity: .8;
          position: absolute;
          right: 0;
          top: 0;
          &:hover {
            cursor: pointer;
            opacity: 1;
          }
        }
      }
    }
  }
</style>
