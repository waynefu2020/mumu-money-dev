<template>
  <div class="nav-wrapper" :class="classPrefix && `${classPrefix}-wrapper`">
    <div class="content" :class="classPrefix && `${classPrefix}-content`">
      <slot/>
    </div>
    <NavigationBar/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import NavigationBar from '@/components/NavigationBar.vue';

@Component({
  components:{NavigationBar}
})
export default class Layout extends Vue {
  @Prop() classPrefix?: string;
}
</script>

<style lang="scss" scoped>
.nav-wrapper{
  display: flex;
  height: 100vh;
  flex-direction: column;
}
.content {
  overflow: auto;
  flex-grow: 1;
  background: #fafafa;
}
</style>