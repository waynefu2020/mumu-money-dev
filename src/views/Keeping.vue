<template>
  <Layout class-prefix="keeping">
    <Types/>
    <Output/>
    <Tags @update:tag="this.selectedTag = $event"/>
    <div class="notesWrapper">
      <Notes/>
      <DatePicker/>
    </div>
    <NumberPad/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import NumberPad from '@/components/Keeping/NumberPad.vue';
import Types from '@/components/Keeping/Types.vue';
import Tags from '@/components/Keeping/Tags.vue';
import Notes from '@/components/Keeping/Notes.vue';
import DatePicker from '@/components/Keeping/DatePicker.vue';
import Output from '@/components/Keeping/Output.vue';
import {Tag} from '@/custom';


@Component({
  components: {Output, DatePicker, Notes, Tags, Types, NumberPad}
})
export default class Money extends Vue {
  selectedTag:string[] = []

  onUpdateTag(tag:Tag){
    this.selectedTag = tag;
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
  .notesWrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 8px 0;
  }
</style>