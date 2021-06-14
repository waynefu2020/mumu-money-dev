<template>
  <div class="tagsWrapper">
    <ul class="tags">
      <li class="selected" @click="toggle(tag)">
        <Icon name="date"/>
        餐饮
      </li>
      <li>
        <Icon name="shopping"/>
        购物
      </li>
      <li>
        <Icon name="transport"/>
        交通
      </li>
      <li>
        <Icon name="entertainment"/>
        娱乐
      </li>
      <li>
        <Icon name="setting"/>
        管理
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

type Tag = {
  id: string;
  name: string;
  svg: string;
}

@Component
export default class Tags extends Vue {
  @Prop() tag: Tag | undefined
  selectedTag: string[] = []

  toggle(tag: Tag){
    const index = this.selectedTag.indexOf(tag)
    if(index>=0){
      this.selectedTag.splice(index,1)
    } else {
      this.selectedTag.push(tag)
    }
    this.$emit('update:tag',this.selectedTag)
  }

}
</script>

<style lang="scss" scoped>
.tagsWrapper{
  min-height: 38vh;
  .tags{
    margin: 14px 36px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex-grow: 1;
    > li {
      min-height: 48px;
      min-width: 48px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 6px 6px;
      padding: 6px 10px;
      font-size: 12px;
      border: none;
      border-radius: 8px;
      background: #f0f0f0;
      > svg{
        width: 20px;
        height: 20px;
      }
      &.selected{
        background: #ffe7ba;
      }
    }
  }

}
</style>