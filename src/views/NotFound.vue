<template>
  <div class="not-found">
    <span>页面没找到！</span>
    <div>
      <button><router-link to="/">返回首页</router-link></button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class NotFound extends Vue {

}
</script>

<style lang="scss" scoped>
.not-found{
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>