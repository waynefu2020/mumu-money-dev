<template>
  <div class="notes">
    <label>
      <input type="text" placeholder="请输入备注信息">
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Notes extends Vue {

}
</script>

<style lang="scss" scoped>
.notes {
  font-size: 14px;
  display: flex;
  align-items: center;
  width: 50%;

  > label{


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

}
</style>