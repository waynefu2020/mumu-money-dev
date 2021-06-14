<template>
  <div class="output">
    <span class="types">支出</span>
    <span> ￥ 0.00</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Output extends Vue {

}
</script>

<style lang="scss" scoped>
  .output{
    display: flex;
    justify-content: flex-end;
    margin: 12px 20px;
    padding: 14px 10px;
    background: white;
    box-shadow: 2px 2px 16px 2px rgba(140, 140, 140, 0.2);
    border-radius: 6px;
    > .types{
      color: #595959;
    }
    > span{
      font-size: 20px;
      color: #d46b08;
      font-weight: bold;
    }
  }
</style>