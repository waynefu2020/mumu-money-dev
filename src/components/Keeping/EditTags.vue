<template>
  <div>
    <div class="typesWrapper">
      <Icon name="left"/>
      <Types/>
      <Icon name="new"/>
    </div>
    <div class="tagList">
      <ul class="tags">
        <li v-for="(tag, index) in defaultTags" :key="index">
          <Icon :name="tag.svg"/>
          {{ tag.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Types from '@/components/Keeping/Types.vue';
import Icon from '@/components/Icon.vue';
import defaultTags from '@/constants/defaultTags';

@Component({
  components:{Types,Icon}
})
export default class EditTags extends Vue {
  defaultTags = defaultTags;
}
</script>

<style lang="scss" scoped>
.typesWrapper{
  border: 1px solid blue;
}
</style>