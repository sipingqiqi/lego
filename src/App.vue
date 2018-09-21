<template>
  <div id="app">
    <!-- 主页面的内容放置在 p-main 标签里 -->
    <p-main bgcolor='offwhite'>
        <a-stub></a-stub>
        <a-table bgcolor='white'>
            <a-text-row label='姓名'>李乐乐</a-text-row>
            <a-text-row label='姓名'>李乐乐</a-text-row>
            <a-text-row label='公司名称'>拉拉养老保险股份有限公司拉拉养老保险股份有限公司拉拉养老保险股份有限公司</a-text-row>
        </a-table>
    </p-main>
  </div>
</template>

<script>
//import { pMain, aStub, aTable, aTextRow } from '../index.js';
import Vue from 'vue';
import Lego from '../index.js';

Vue.use(Lego);

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  // components: {
  //   pMain,
  //   aStub,
  //   aTable,
  //   aTextRow,
  // }
}
</script>

<style>
</style>
