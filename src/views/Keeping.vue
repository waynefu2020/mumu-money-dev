<template>
  <Layout class-prefix="keeping">
    <Types/>
    <Tags :value.sync="selectedTag"/>
    <div class="notesWrapper">
      <Notes placeholder="在这里输入备注" :value.sync="notes"/>
      <DatePicker :value.sync="createAt"/>
    </div>
    <NumberPad :value.sync="output"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import NumberPad from '@/components/Keeping/NumberPad.vue';
import Types from '@/components/Keeping/Types.vue';
import Tags from '@/components/Keeping/Tags.vue';
import Notes from '@/components/Keeping/Notes.vue';
import DatePicker from '@/components/Keeping/DateSelector.vue';
import Output from '@/components/Keeping/Output.vue';
import {Tag} from '@/custom';


@Component({
  components: {Output, DatePicker, Notes, Tags, Types, NumberPad}
})
export default class Money extends Vue {
  output = 0
  notes = ''
  createAt = ''
  selectedTag = {id: '', name: '', svg: '', type: 'expense'};

  onUpdateNumberPad(value: number){
    this.output = value
    console.log(this.output);
  }
  onUpdateNotes(value: string){
    this.notes = value;
    console.log(this.notes);
  }
  onUpdateDate(value:string){
    this.createAt = value
    console.log(this.createAt);
  }
  onUpdateTags(value: Tag){
    this.selectedTag = value
    console.log(this.selectedTag);
  }

}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
  .notesWrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 371px;
    margin: 8px 0;
  }
</style>