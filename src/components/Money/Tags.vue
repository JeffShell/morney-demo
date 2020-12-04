<template>
  <div class="tags">
    <div class="new">
      <button @click="createTag">
        <Icon name="AddTags" />
      </button>
    </div>
    <ul class="current">
      <li v-for="tag in tagList" :key="tag.id"
          :class="{selected: selectedTags.indexOf(tag)>=0}"
          @click="toggle(tag)">{{tag.name}}
      </li>
    </ul>
  </div>

</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {mixins} from 'vue-class-component';
import TagHelper from '@/mixins/TagHelper';
@Component
export default class Tags extends mixins(TagHelper) {
  selectedTags: string[] = [];
  get tagList() {
    return this.$store.state.tagList;
  }
  created() {
    this.$store.commit('fetchTags');
  }
  toggle(tag: string) {
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }
    this.$emit('update:value', this.selectedTags);
  }
}
</script>

<style lang="scss" scoped>
.tags {
  font-size: 14px;
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;
  > .current {
    border-bottom: 1px solid #e1e1e1;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    height: 130px;
    overflow: auto;
    > li {
      $bg:#d9d9d9;
      background: $bg;
      $h: 24px;
      height: $h;
      line-height: $h;
      padding: 0 16px;
      margin-right: 12px;
      margin-top: 4px;
      &.selected {
        background: darken($bg, 50%);
        color: white;
      }
    }
  }
  > .new {
    padding: 16px;
    button {
      width: 50px;
      height: 50px;
      border: 1px dashed #343434;
      background: transparent;
      color: #999;
      padding: 10px;
    }
  }
}

</style>