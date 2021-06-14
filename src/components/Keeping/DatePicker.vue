<template>
  <div class="datePicker">
    <Icon name="date"/>
    <span>今天</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Icon from '@/components/Icon.vue';

@Component({
  components:{Icon}
})
export default class DatePicker extends Vue {
}
</script>

<style lang="scss" scoped>
.datePicker{
  background: #ffffff;
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  width: 48%;
  padding-left: 10px;

  > svg{
    width: 18px;
    height: 18px;
    fill: #d46b08;
  }
  > span{
    font-size: 14px;
    color: #595959;
    padding-left: 4px;
  }
}
</style>