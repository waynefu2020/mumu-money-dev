<template>
  <div class="tagsWrapper">
    <ul class="tags">
      <li v-for="(tag, index) in dataSource" :key="index"
          :class="{selected: selectedTags.indexOf(tag)>=0}"
          @click="toggleTag(tag)"
      >
        <Icon :name="tag.svg"/>
        {{ tag.name }}
      </li>
      <li class="editTags">
        <router-link to="/keeping/edit">
          <Icon name="setting"/>
        </router-link>
        管理
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

type Tag = {
  name: string,
  svg: string
}

@Component
export default class Tags extends Vue {
  @Prop() dataSource: string[] | undefined;
  selectedTags: string[] = [];

  toggleTag(tag: Tag) {
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }
  }

}
</script>

<style lang="scss" scoped>
.tagsWrapper {
  min-height: 38vh;

  .tags {
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

      > svg {
        width: 20px;
        height: 20px;
      }

      &.selected {
        background: #ffe7ba;
      }
    }
    > .editTags{
      background: white;
      border: 1px solid #bfbfbf;
      > a{
        > svg{
          width: 20px;
          height: 20px;
        }
      }
    }
  }

}
</style>