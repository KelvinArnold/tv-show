<template>
  <div class="tv-show-footer p+">
    <div class="content">
      <tab-container>
        <template slot="navigation">
          <tab-navigation
            :navigation="navigation"
            :tab="tab"
            :size="'large'"
            v-on:setTab="setCurrentTab"/>
        </template>
        <template slot="content">
          <tab-content>
            <transition
              name="tab-content-animation"
              mode="out-in">
              <tab-content-general v-if="tab === 'general'"
                key="general"/>
              <tab-content-cast v-else-if="tab === 'cast'"
                key="cast"/>
              <tab-content-awards v-else
                key="awards"/>
            </transition>
          </tab-content>
        </template>
        <template slot="logo">
          <span class="company-logo">
            <logo-telecine/>
          </span>
        </template>
      </tab-container>
    </div>
  </div>
</template>

<script>
import LogoTelecine from './../../assets/images/logo-telecine.svg';

import TabContainer from "./../Tabs/TabContainer";
import TabContent from './../Tabs/TabContent';
import TabContentAwards from './../Tabs/TabContentAwards';
import TabContentCast from './../Tabs/TabContentCast';
import TabContentGeneral from './../Tabs/TabContentGeneral';
import TabNavigation from './../Tabs/TabNavigation';

export default {
  name: 'tv-show-footer',
  data() {
    return {
      navigation: [
        {
          name: 'general',
          label: 'General'
        },
        {
          name: 'cast',
          label: 'Elenco'
        },
        {
          name: 'awards',
          label: 'Premios'
        },
      ],
      tab: 'general',
    }
  },
  props: {
    title: {
      type: String,
      default: 'View Footer',
    }
  },
  components: {
    LogoTelecine,
    TabContainer,
    TabContent,
    TabContentAwards,
    TabContentCast,
    TabContentGeneral,
    TabNavigation,
  },
  methods: {
    setCurrentTab(_tab) {
      this.tab = _tab;
    }
  }
}
</script>

<style lang="scss">
  .tv {
    &-show {
      &-footer {
        background: $black;
        bottom: 0;
        box-shadow: 0px 0px 200px 80px #0c0c0c;
        min-height: 320px;
        left: 0;
        overflow: hidden;
        padding-top: $base-spacing-unit * 3;
        width: 100%;
        @include mq(tablet) {
          min-height: 220px;
          position: absolute;
        }
        .content {
          width: 100%;
          margin: 0 auto;
          padding-left: $base-spacing-unit * 2;
          padding-right: $base-spacing-unit * 2;
          @include mq(desktop) {
            width: 80%;
          }
        }
      }
    }
  }
</style>
