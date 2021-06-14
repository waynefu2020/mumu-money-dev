<template>
    <nav>
      <router-link to="/reports" class="item" active-class="selected">
        <Icon name="report"/>
      </router-link>
      <router-link to="/keeping" class="item" active-class="selected">
        <Icon name="keeping"/>
      </router-link>
      <router-link to="/statistics" class="item" active-class="selected">
        <Icon name="statistics"/>
      </router-link>
    </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
@Component
export default class NavigationBar extends Vue {

}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

nav{
  display: flex;
  flex-direction: row;
  font-size: 12px;
  @extend %outerShadow;
  > .item{
    display: flex;
    justify-content: center;
    width: 33.333333%;
    flex-direction: column;
    align-items: center;
    padding: 2px 0;
    color: #a3a3a3;
    > .icon{
      height: 26px;
      width: 26px;
      margin: 10px 0;
    }
  }
  > .item.selected{
    color: $color-highlight;
  }
}

</style>