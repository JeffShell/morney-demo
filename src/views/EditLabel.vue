<template>
  <Layout>
    <div class="navBar">
      <Icon class="leftIcon" name="left" @click="goBack"/>
      <span class="title">编辑标签</span>
      <span class="rightIcon"></span>
    </div>
    <div class="form-wrapper">
      <FormItem :value="currentTag.name"
                @update:value="update"
                field-name="标签名：" placeholder="请输入标签名"/>
    </div>
    <div class="button-wrapper">
      <Button @click="remove">删除标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import FormItem from '@/components/Money/FormItem.vue';
import Button from '@/components/Button.vue';
@Component({
  components: {Button, FormItem}
})
export default class EditLabel extends Vue {
  get currentTag(){
    return this.$store.state.currentTag;
  }
  created() {
    const id = this.$route.params.id;
    this.$store.commit('fetchTags');
    this.$store.commit('setCurrentTag', id);
    if(!this.currentTag) {
      this.$router.replace('/404')
    }
  }
  update(name: string) {
    if (this.currentTag) {
      this.$store.commit('updateTag',{
        id: this.currentTag.id, name
      });
    }
  }
  remove() {
    if (this.currentTag) {
        this.$store.commit('removeTag',this.currentTag.id);
    }
  }
  goBack(){
    this.$router.back();
  }
}
</script>

<style lang="scss" scoped>
.navBar {
  text-align: center;
  font-size: 16px;
  padding: 12px 16px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > .title {
    //border: none;
  }
  > .leftIcon {
    width: 24px;
    height: 24px;
  }
  > .rightIcon {
    width: 24px;
    height: 24px;
  }
}
.form-wrapper {
  background: white;
  margin-top: 8px;
  &::v-deep {
    border: 1px solid #343434;
    border-radius: 10px;
    margin: 0 auto;
    width: 80%;
    height: 100px;
    .name {
    }
    input {
      width: 100%;
      height: 50px;
      text-align: center;
      //background-color: skyblue;
    }
  }

}
.button-wrapper {
  text-align: center;
  padding: 16px;
  margin-top: 44-16px;
  ::v-deep .button {
    border: 1px solid #343434;
    color: #343434;
  }
}
</style>