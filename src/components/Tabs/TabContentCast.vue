<template>
  <div class="tab-content-cast mt+ pt+ pb+">
    <ul class="list">
      <li v-for="(item, index) in _cast" :key="index">
        <div class="data">
          <p class="fs-subtitle fs-bold">{{item.Name}}</p>
          <p class="tc-grey-2 fs-body">{{item.Name}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'tab-content-cast',
  computed: {
    _cast() {
      return this.$store.getters['ModuleShows/GET_TV_SHOW_CAST'] || [];
    }
  }
}
</script>

<style scoped lang="scss">
  .tab {
    &-content {
      &-cast {
        .list {
          display: flex;
          flex-wrap: wrap;
          list-style: none;
          li {
            align-items: center;
            background-color: $black-2;
            cursor: pointer;
            display: flex;
            flex-wrap: wrap;
            height: 80px;
            justify-content: center;
            margin-top: $base-spacing-unit;
            width: 100%;
            @include mq(tablet) {
              width: auto;
              flex: 1;
              &:not(:first-child) {
                margin-left: $base-spacing-unit * 2;
              }
            }
            .data {
              text-align: center;
            }
          }
        }
      }
    }
  }
</style>
