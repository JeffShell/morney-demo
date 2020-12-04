<template>
  <Layout class="x">
    <div class="tags">
      <router-link class="tag"
                   v-for="tag in tags" :key="tag.id"
                   :to="`/label/edit/${tag.id}`">
        <span>{{tag.name}}</span>
        <Icon name="right"/>
      </router-link>
    </div>
    <div class="createTag-wrapper">
      <Button class="createTag" @click="createTag">
        <Icon name="AddTags"/>
      </Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Button from '@/components/Button.vue';
import {mixins} from 'vue-class-component';
import TagHelper from '@/mixins/TagHelper';

@Component({
  components:{Button}
})
export default class Labels extends mixins(TagHelper){
  get tags(){
    return this.$store.state.tagList;
  }
  beforeCreate(){
    this.$store.commit('fetchTags');
  }
}
</script>

<style lang="scss" scoped>
.tags {
  background: #e1e1e1;
  font-size: 16px;
  padding: 16px;
  height: 91vh;
  overflow: auto;
  > .tag {
    background: #fff;
    min-height: 44px;
    margin-bottom: 16px;
    padding-left: 15px;
    border:1px solid #343434;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg {
      width: 18px;
      height: 18px;
      color: #666;
      margin-right: 16px;
    }
  }
}
.x {
  position: relative;
}
.createTag {
  &-wrapper {
    position: absolute;
    bottom: 70px;
    right: 30px;
  }
  &::v-deep.button {
    background-color: #333;
    height: 48px;
    border-radius: 50%;
  }
}

</style>