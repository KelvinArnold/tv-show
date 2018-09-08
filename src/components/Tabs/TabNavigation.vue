<template>
  <nav class="tab-navigation">
    <ul>
      <li v-for="(item, index) in navigation"
        :key="index"
        class="pb pt"
        :class="{'active': item.name === tab, [size]: true}">
        <a class="pb pt fs-subheading fs-bold fs-uppercase"
          @click.prevent="setTab(item.name)">
          {{item.label}}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'tab-navigation',
  props: {
    navigation: {
      type: Array,
      default: () => []
    },
    tab: {
      type: String,
    },
    size: {
      type: String,
      default: 'small', //small, large
    }
  },
  methods: {
    setTab(_tab) {
      this.$emit('setTab', _tab);
    }
  }
}
</script>

<style lang="scss">
  .tab {
    &-navigation {
      border-bottom: .02em solid rgba($color: $white, $alpha: .5);
      ul {
        display: flex;
        list-style: none;
        li {
          &.small {
            min-width: 60px;
          }
          &.large {
            min-width: 120px;
          }
          &.active {
            a {
              color: $white !important;
              position: relative;
              &:after {
                background-color: $primary;
                bottom: -2px;
                content: '';
                height: 1px;
                left: 0;
                position: absolute;
                width: 100%;
              }
            }
          }
          a {
            color: rgba($color: $white, $alpha: .6);
            cursor: pointer;
            text-decoration: none;
            &:hover {
              color: $white !important;
            }
          }
        }
      }
    }
  }
</style>
