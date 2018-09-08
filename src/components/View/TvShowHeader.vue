<template>
  <div class="tv-show-header p+">
    <div class="content">
      <div class="tv-show-title">
        <h1 class="fs-display">{{_title}}</h1>
        <span class="fs-sub-title fs-uppercase tc-grey">{{_sub_title}}</span>
      </div>
      <span class="close">
        <close-search-w/>
      </span>
    </div>
  </div>
</template>

<script>
import CloseSearchW from './../../assets/images/close-search-w.svg';

export default {
  name: 'tv-show-header',
  data() {
    return {
      title: '',
      subtitle: ''
    }
  },
  components: {
    CloseSearchW,
  },
  computed: {
    _title() {
      return this.$store.getters['ModuleShows/GET_TV_SHOW_TITLE'];
    },
    _sub_title() {
      const genres = this.$store.getters['ModuleShows/GET_TV_SHOW_GENRES'] || [];
      const year = this.$store.getters['ModuleShows/GET_TV_SHOW_YEAR'] || '';
      const _sub_title = `80% INDICADO / ${genres.map(item => item.Title).join(' / ')} / ${year} / EUA / 14`;
      return _sub_title;
    }
  }
}
</script>

<style lang="scss">
  .tv {
    &-show {
      &-header {
        align-items: center;
        background-color: transparent;
        display: flex;
        @include mq(tablet) {
          height: 120px;
        }
        .content {
          align-items: flex-start;
          display: flex;
          justify-content: space-between;
          margin: 0 auto;
          padding-left: $base-spacing-unit * 2;
          padding-right: $base-spacing-unit * 2;
          position: relative;
          vertical-align: bottom;
          width: 100%;
          padding-top: $base-spacing-unit * 4;
          @include mq(tablet) {
            padding-top: $base-spacing-unit;
          }
          @include mq(desktop) {
            width: 80%;
            align-items: center;
          }
          .close {
            cursor: pointer;
            opacity: .8;
            &:hover {
              opacity: 1;
            }
          }
        }
      }
    }
  }
</style>
