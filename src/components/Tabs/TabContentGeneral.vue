<template>
  <div class="tab-content-general mt+">
    <div class="actions pt+ pb+ mr+">
      <ul class="list fs-body">
        <li>
          <add-gray-s/>
          <p>Mi Lita</p>
        </li>
        <li>
          <sad-gray-w/>
          <p>Evaluar</p>
        </li>
        <li>
          <rec-gray-s/>
          <p>Grabar</p>
        </li>
        <li>
          <share-gray-s/>
          <p>Compartir</p>
        </li>
      </ul>
    </div>
    <div class="sinopse pt+ pb+ tc-grey">
      <span class="fs-subtitle fs-uppercase fs-bold">SINOPSE</span>
      <p class="fs-body">{{_synopsis}}</p>
    </div>
  </div>
</template>

<script>
import AddGrayS from './../../assets/images/add-gray-s.svg';
import RecGrayS from './../../assets/images/rec-gray-s.svg';
import SadGrayW from './../../assets/images/sad-gray-w.svg';
import ShareGrayS from './../../assets/images/share-gray-s.svg';

export default {
  name: 'tab-content-general',
  components: {
    AddGrayS,
    RecGrayS,
    SadGrayW,
    ShareGrayS,
  },
  computed: {
    _synopsis() {
      return this.$store.getters['ModuleShows/GET_TV_SHOW_SYNOPSIS'];
    }
  }
}
</script>

<style scoped lang="scss">
  .tab {
    &-content {
      &-general {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        .actions {
          flex: 1;
          width: 100%;
          @include mq(tablet) {
            width: auto;
          }
          .list {
            display: flex;
            list-style: none;
            li {
              color: $grey-2;
              margin-right: $base-spacing-unit;
              min-width: 60px;
              text-align: center;
              opacity: .8;
              &:hover {
                color: $primary;
                opacity: 1;
                cursor: pointer;
              }
              &:not(:first-child) {
                margin-left: $base-spacing-unit;
              }
            }
          }
        }
        .sinopse {
          width: 100%;
          @include mq(tablet) {
            flex: 2;
            width: auto;
          }
          @include mq(desktop) {
            flex: 3;
          }
        }
      }
    }
  }
</style>
