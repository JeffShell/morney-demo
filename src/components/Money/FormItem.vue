<template>
  <div>
    <label class="formItem">
      <span class="name">{{this.fieldName}}</span>
      <input type="text"
             :value="value"
             @input="onValueChanged($event.target.value)"
             :placeholder="this.placeholder">
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';
@Component
export default class FormItem extends Vue {
  @Prop({default: ''}) readonly value!: string;
  @Prop({required: true}) fieldName!: string;
  @Prop() placeholder?: string;
  onValueChanged(value: string) {
    this.$emit('update:value', value);
  }
}
</script>


<style lang="scss" scoped>

  .formItem {
    border-top: 1px solid #b5b5b5;
    display: flex;
    flex-wrap: wrap;
    font-size: 16px;
    padding:4px 16px 4px;
    align-items: center;
    .name {
    }
    input {
      border: 0;
      flex-grow: 1;
    }
  }
</style>