<template>
  <div class="tv-show-container">
    <transition name="from-top-animation">
      <tv-show-header v-if="!_loading"></tv-show-header>
    </transition>
    <tv-show-body></tv-show-body>
    <transition name="from-bottom-animation">
      <tv-show-footer v-if="!_loading"></tv-show-footer>
    </transition>
    <transition name="fade-animation">
      <div v-if="_background"
        class="tv-show-background"
        :style="`background-image: url(${_background})`"></div>
    </transition>
    <transition name="fade-animation">
      <tv-show-loading v-if="_loading"/>
    </transition>
  </div>
</template>

<script>
import TvShowBody from './../components/View/TvShowBody.vue';
import TvShowHeader from './../components/View/TvShowHeader.vue';
import TvShowFooter from './../components/View/TvShowFooter.vue';
import TvShowLoading from './../components/View/TvShowLoading.vue';

export default {
  name: 'view-tv-show',
  components: {
    TvShowHeader,
    TvShowBody,
    TvShowFooter,
    TvShowLoading,
  },
  created() {
    this.$store.dispatch('ModuleShows/GET_DATA');
  },
  computed: {
    _background() {
      const _background = this.$store.getters['ModuleShows/GET_TV_SHOW_BACKGROUND'];
      return _background ? _background.Background : '';
    },
    _loading() {
      return this.$store.getters['ModuleShows/GET_LOADING'];
    },
  },
}
</script>

<style lang="scss">
  .tv {
    &-show {
      &-container {
        background:
        linear-gradient(to bottom, rgba(0,0,0,.2) -15%,rgba(0,0,0,1) 100%),
        linear-gradient(to right, rgba(0,0,0,.2) 10%,rgba(0,0,0,1) 110%),
        linear-gradient(to top, rgba(0,0,0,.2) 0%,rgba(0,0,0,.2) 120%);
        color: $white;
        height: auto;
        position: relative;
        width: 100%;
        @include mq(tablet) {
          overflow: hidden;
          height: 100vh;
        }
      }
      &-background {
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        filter: FlipH;
        -ms-filter: "FlipH";
        height: 100vh;
        left: 0;
        position: fixed;
        top: 0;
        -moz-transform: scaleX(-1);
        -o-transform: scaleX(-1);
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
        transition: .4s all ease-in-out;
        width: 100vw;
        z-index: -1;
      }
    }
  }
</style>
