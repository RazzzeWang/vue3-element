<!--
 * @Author: ze.wang@diact.com
 * @Date: 2024-05-09 15:31:46
 * @Function: Please Input Function
-->
<template>
  <div style="padding: 24px">
    <a-button type="primary" @click="reqTest">Request</a-button>
    <a-button type="primary" @click="busEmit">busEmit</a-button>
  </div>
</template>

<script setup lang='ts' name=''>
import exampleApi from '/@/api/demo';
import eventBus from '/@/utils/eventBus';
const reqTest = () => {
  exampleApi.test({ p1: '111', p2: 2222 }).then((res) => {
    console.log(res);
  });
};
eventBus.once('testEvent', (data) => {
  console.log(data);
});
const busEmit = () => {
  eventBus.emit('testEvent', 111);
};
</script>

<style lang='less' scoped>

</style>