<template>
<div class="numberPad">
  <div class="output">
    <span>金额：</span>{{ output}}
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
    <button @click="ok" class="ok">OK</button>
    <button @click="inputContent" class="zero">0</button>
    <button @click="inputContent">.</button>
  </div>
</div>
</template>

<script lang="ts">
  import Vue from  'vue';
  import {Component, Prop} from 'vue-property-decorator';
  @Component
  export default class NumberPad extends Vue{
    @Prop(Number) readonly value!: number;
    output = this.value.toString();
    inputContent(event: MouseEvent){
      const button = (event.target as HTMLButtonElement);
      const input = button.textContent!;
      if(this.output.length === 9){ return; }
      if(this.output === '0'){
        if('0123456789'.indexOf(input) >= 0){
          this.output = input;
        } else {
          this.output += input;
        }
        return;
      }
      if (this.output.indexOf('.') >= 0 && input === '.') {
        return;
      }
      this.output += input;
    }
    remove(){
      if(this.output.length === 1){
        this.output = '0'
      } else {
        this.output = this.output.slice(0, -1);
      }
    }
    clear(){
      this.output = '0'
    }
    ok(){
      const number = parseFloat(this.output)
      this.$emit('update:value', number);
      this.$emit('submit', number);
      this.output = '0';
    }
  }
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.numberPad {
  border-top: 1px solid #343434;
  span {
    font-family: $font-hei;
    font-size: 16px;
  }
  .output {
    width: 100%;
    font-size: 18px;
    font-family: Consolas, monospace;
    padding: 9px 16px;
    text-align: left;
    position: relative;
    right: 0;
  }
  .buttons {
    display: grid;
    border-left: 1px solid #343434;
    grid-template-columns: repeat(4,25%);
    grid-template-rows: repeat(4,64px);

    > button {
      border: 1px solid #343434;
      background-color: #fff;
      margin-left: -1px;
      margin-top: -1px;
      &.ok {
        float: right;
        background-color: #343434;
        color: white;
        grid-row: 3 / 5;
        grid-column: 4 / 5;
      }
      &.zero {
        grid-row: 4 / 5;
        grid-column: 1 / 3;
      }
    }
  }
}
</style>