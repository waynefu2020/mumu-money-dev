<template>
  <div>
    <label class="notes">
      <input type="text" :value="value"
             :placeholder="placeholder"
             @input="onValueChanged($event.target.value)"
      >
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Notes extends Vue {
  @Prop({default: '' }) value!: string;
  @Prop() placeholder!: string;

  onValueChanged(value: string){
    this.$emit('update:value', value)
  }
}
</script>

<style lang="scss" scoped>
.notes {
  font-size: 14px;
  display: flex;
  align-items: center;
  width: 50%;

    > input {
      color: #595959;
      min-height: 40px;
      flex-grow: 1;
      background: #ffffff;
      padding-left: 10px;
      border-radius: 10px;
      border: none;
    }

}
</style>