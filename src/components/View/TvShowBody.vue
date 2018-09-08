<template>
  <div class="tv-show-body pr+ pl+">
    <div class="content">
      <transition name="from-right-animation">
        <div class="tv-show-list"
          v-if="!_loading">
          <tab-container>
            <template slot="navigation">
              <tab-navigation
                v-if="_navigation"
                :navigation="_navigation"
                :tab="tab"
                v-on:setTab="setCurrentTab"/>
            </template>
            <template slot="content">
              <tab-content>
                <tab-content-episodes
                  :episodes="_episodes"/>
              </tab-content>
            </template>
          </tab-container>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import TabContainer from "./../Tabs/TabContainer";
import TabContent from './../Tabs/TabContent';
import TabContentEpisodes from './../Tabs/TabContentEpisodes';
import TabNavigation from './../Tabs/TabNavigation';

export default {
  name: 'tv-show-body',
  data() {
    return {
      tab: '1',
    }
  },
  props: {
    title: {
      type: String,
      default: 'View Body',
    }
  },
  components: {
    TabContainer,
    TabContent,
    TabContentEpisodes,
    TabNavigation,
  },
  methods: {
    setCurrentTab(_tab) {
      this.tab = _tab;
    }
  },
  computed: {
    _navigation() {
      const _episodes = this.$store.getters['ModuleShows/GET_TV_SHOW_EPISODES'];
      const _help = [];
      const _clean_episodes = _episodes.filter(item => item); // Remove Null Itens
      const _seasons_number = _clean_episodes.map(item => item.SeasonNumber);
      const _seasons_number_unique = _seasons_number.filter(item => {
        if (_help.indexOf(item) === -1) {
          _help.push(item);
          return item;
        }
      });
      const _navigation = _seasons_number_unique.map(item => {
        return {
          name: `${item}`,
          label: `T${item}`
        }
      });
      return _navigation || [];
    },
    _episodes() {
      const _episodes = this.$store.getters['ModuleShows/GET_TV_SHOW_EPISODES'];
      const _clean_episodes = _episodes.filter(item => item); // Remove Null Itens
      const _season_episodes = _clean_episodes.filter(item => {
        return item.SeasonNumber == this.tab;
      });
      return _season_episodes || [];
    },
    _loading() {
      return this.$store.getters['ModuleShows/GET_LOADING'];
    }
  }
}
</script>

<style lang="scss">
  .tv {
    &-show {
      &-body {
        background-color: transparent;
        height: 75vh;
        width: 100%;
        @include mq(tablet) {
          height: calc(100% - 340px);
        }
        .content {
          align-items: flex-start;
          display: flex;
          height: 100%;
          justify-content: flex-end;
          margin: 0 auto;
          padding-left: $base-spacing-unit * 2;
          padding-right: $base-spacing-unit * 2;
          width: 100%;
          @include mq(desktop) {
            justify-content: flex-end;
            width: 80%;
          }
        }
      }
      &-list {
        height: 100%;
        width: 100%;
        .tab {
          &-content {
            height: 85%;
            overflow-y: auto;
            // @include mq(tablet) {
            //   height: 100%;
            // }
          }
        }
        @include mq(tablet) {
          height: 100%;
          width: 50%;
        }
        @include mq(desktop) {
          width: 400px;
        }
      } 
    }
  }
</style>
