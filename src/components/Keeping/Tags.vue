<template>
  <div class="tagsWrapper">
    <ul class="tags">
      <li v-for="(tag, index) in defaultTags" :key="index"
          :class="{selected: tag.name === selectedTag.name}"
          @click="selectTag(tag)"
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
import {Tag} from '@/custom';
import defaultTags from '@/constants/defaultTags';
import createId from '@/lib/createId';

@Component
export default class Tags extends Vue {
  defaultTags = defaultTags;
  selectedTag: Tag = {id: '', name: '', svg: '', type: 'expense'};


  selectTag(tag: Tag) {
    this.selectedTag = tag;
    this.$emit('update:value', this.selectedTag);
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

    > .editTags {
      background: white;
      border: 1px solid #bfbfbf;

      > a {
        > svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }

}
</style>