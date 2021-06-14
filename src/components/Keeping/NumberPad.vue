<template>
  <div class="numberPad">
    <div class="buttons">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>删除</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>清空</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button class="ok">OK</button>
      <button class="zero">0</button>
      <button class="dot">.</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class NumberPad extends Vue {

}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.numberPad {

  .buttons {
    @extend %clearFix;
    flex-wrap: wrap;
    background: #f8f9fb;
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-rows: 25% 25% 25% 25%;
    justify-content: space-evenly;

    > button {
      border: none;
      margin: 4px 2px;
      border-radius: 4px;
      font-size: 18px;
      font-weight: bold;
      height: 58px;
      background: white;

      &.ok {
        height: 64*2px;
        //float: right;
        color: white;
        background: #fa8c16;
        grid-column-start: 4;
        grid-column-end: 5;
        grid-row-start: 3;
        grid-row-end: 5;
      }

      &.dot{
        grid-column-start: 2;
        grid-column-end: 4;
      }

    }
  }
}
</style>