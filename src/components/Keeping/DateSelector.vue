<template>
  <div class="dateSelector">
    <a-date-picker class="picker" @change="selectDate" placeholder="选择日期"
                   :defaultValue="moment(getCurrentDate(), 'YYYY-MM-DD')"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Icon from '@/components/Icon.vue';
import { DatePicker } from 'ant-design-vue';
import moment,{Moment} from 'moment';

@Component({
  components:{Icon,DatePicker}
})
export default class DateSelector extends Vue {
  moment = moment;

  getCurrentDate(){
    this.$emit('update:value',new Date().toISOString().substring(0,10));
    return new Date().toLocaleDateString();
  }
  selectDate(moment:Moment) {
    const selectedDate = moment.format().substring(0,10)
    this.$emit('update:value', selectedDate)
  }
}
</script>

<style lang="scss" scoped>
.dateSelector{
  background: #ffffff;
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  width: 48%;
  > .picker{
    margin: 0 20px;
  }
}
</style>