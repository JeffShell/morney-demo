<template>
  <ul class="tabs" :class="{[classPrefix+'-tabs']:classPrefix}">
    <li v-for="item in dataSource" :key="item.value" class="tabs-item"
        :class="liClass(item)" @click="select(item)">{{ item.text }}
    </li>
  </ul>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  type DataSourceItem = {
    text: string;
    value: string;
  }
  @Component
  export default class Tabs extends Vue{
    @Prop({required: true, type: Array})
    dataSource!: DataSourceItem[];
    @Prop(String)
    readonly value!: string;
    @Prop(String)
    classPrefix?: string;

    liClass(item: DataSourceItem){
      return {
        [this.classPrefix + '-tabs-item']: this.classPrefix,
        selected: item.value === this.value
      };
    }

    select(item: DataSourceItem){
      this.$emit('update:value', item.value);
    }
  }
</script>
<style lang="scss" scoped>
.tabs{
  //border: 1px solid red;
  display: flex;
  justify-content: center;
  &-item {
    border: 1px solid #000;
    margin: 15px 0;
    padding: 5px 50px;
    &:first-child{
      border-radius: 15px 0 0 15px;
    }
    &:last-child{
      border-radius: 0 15px 15px 0;
    }
    &.selected{
      background: #000;
      color: #fff;
    }
  }
}
</style>