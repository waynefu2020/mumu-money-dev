<template>
  <ul class="types">
    <li :class="type === 'expense' && 'selected'"
        @click="selectType('expense')"
    >支出</li>
    <li :class="type === 'income' && 'selected'"
        @click="selectType('income')"
    >收入</li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Icon from '@/components/Icon.vue';

@Component({
  components: {Icon}
})
export default class Types extends Vue {
  type = 'expense'

  selectType(type: string){
    if(type !== 'expense' && type !== 'income'){
      throw new Error('type is unknown.')
    }
    this.type = type
  }
}
</script>

<style lang="scss" scoped>
  .types{
    display: flex;
    justify-content: center;
    text-align: center;
    background: white;
    > li{

      font-size: 18px;
      width: 26%;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      &.selected::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: #fa8c16;
        color: #fa8c16;
      }
    }
  }
</style>