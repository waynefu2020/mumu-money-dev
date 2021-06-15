<template>
  <div class="numberPad">
    <div class="output">
      <span>￥ {{ output }}</span>
    </div>
    <div class="buttons">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button @click="remove">删除</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="clear">清空</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button class="ok" @click="ok">OK</button>
      <button @click="inputContent" class="zero">0</button>
      <button @click="inputContent" class="dot" >.</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class NumberPad extends Vue {
  @Prop(Number) value!:number
  output = this.value.toString()

  inputContent(event: MouseEvent){
    const button = (event.target as HTMLButtonElement)
    const input = button.textContent as string
    if(this.output.length >= 16 ){return;}
    if(this.output === '0'){
      if ('0123456789'.indexOf(input) >= 0) {
        this.output = input;
      } else {
        this.output += input;
      }
      return;
    }
    if (this.output.indexOf('.') >= 0 && input === '.') {return;}
    this.output += input;
  }

  remove() {
    if (this.output.length === 1) {
      this.output = '0';
    } else {
      this.output = this.output.slice(0, -1);
    }
  }

  ok() {
    const number = parseFloat(this.output);
    this.$emit('update:value', number);
    this.$emit('submit', number);
    this.output = '0';
  }

  clear(){
    this.output = '0'
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.output{
  display: flex;
  justify-content: flex-end;
  margin: 4px 2px;
  padding: 6px 16px;
  background: white;
  border-radius: 6px;
  > .types{
    color: #595959;
  }
  > span{
    font-size: 28px;
    color: #d46b08;
  }
}
.numberPad {
  .buttons {
    flex-wrap: wrap;
    background: #f8f9fb;
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-rows: 25% 25% 25% 25%;
    justify-content: space-evenly;

    > button {
      border: none;
      margin: 4px 2px;
      border-radius: 4px;
      font-size: 18px;
      font-weight: bold;
      height: 58px;
      background: white;

      &.ok {
        height: 64*2px;
        //float: right;
        color: white;
        background: #fa8c16;
        grid-column-start: 4;
        grid-column-end: 5;
        grid-row-start: 3;
        grid-row-end: 5;
      }

      &.dot{
        grid-column-start: 2;
        grid-column-end: 4;
      }

    }
  }
}
</style>