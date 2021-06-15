<template>
  <Layout class-prefix="keeping">
    <Types/>
    <Tags :data-source="tags"/>
    <div class="notesWrapper">
      <Notes placeholder="在这里输入备注" @update:value="onUpdateNotes"/>
      <DatePicker/>
    </div>
    <NumberPad :value.sync="value"/>
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
import defaultTags from '@/constants/defaultTags';


@Component({
  components: {Output, DatePicker, Notes, Tags, Types, NumberPad}
})
export default class Money extends Vue {
  tags = defaultTags;
  value = 0
  notes = ''

  onUpdateNumberPad(value: number){
    this.value = value
  }
  onUpdateNotes(value: string){
    this.notes = value;
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