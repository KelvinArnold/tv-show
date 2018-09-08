<template>
  <div class="tab-content-episodes">
    <ul class="list">
      <li class="episode pt pb"
        v-for="(item, index) in episodes"
        :key="item.ID"
        @click.prevent="setEpisode(index)">
        <span class="fs-body fs-bold tc-grey">
          {{item.EpisodeNumber}} {{item.Title}}
        </span>
        <play-small-player-w/>
        <transition name="episode-detail-animation">
          <div class="episode-detail mt" v-if="episode === index">
            <img 
              :src="item.Image"
              :alt="item.Title">
            <p class="fs-body mt mb">
              {{item.Synopsis}}
            </p>
          </div>
        </transition>
      </li>
    </ul>
  </div>
</template>

<script>
import PlaySmallPlayerW from './../../assets/images/play-small-player-w.svg';

export default {
  name: 'tab-content-episodes',
  data() {
    return {
      episode: null,
    }
  },
  props: {
    episodes: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    PlaySmallPlayerW,
  },
  methods: {
    setEpisode(_index) {
      if (_index === this.episode) {
        this.episode = null;
        return false;
      }
      this.episode = _index;
    }
  }
}
</script>

<style scoped lang="scss">
  .tab {
    &-content {
      &-episodes {
        .list {
          list-style: none;
          padding-bottom: 20pt;
          .episode {
            align-items: center;
            cursor: pointer;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            opacity: 0.8;
            transition: .2s all ease-in-out;
            &-detail {
              width: calc(100% - 50px);
              img {
                width: 100%;
              }
            }
            &:first-child {
              padding-top: 0;
            }
            &:hover {
              opacity: 1;
            }
            &:not(:last-child) {
              border-bottom: .02em solid rgba($color: $white, $alpha: .5);
            }
          }
        }
      }
    }
  }
</style>
