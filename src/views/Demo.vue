<!--
 * @Author: ze.wang@diact.com
 * @Date: 2024-05-09 15:31:46
 * @Function: Please Input Function
-->
<template>
	<div style="padding: 24px">
		<el-button type="primary" @click="reqTest">
			<el-icon class="el-icon--left" style="vertical-align: middle">
				<ele-Search />
			</el-icon>
			Request {{ $t('testI18n') }}
		</el-button>
		<el-button type="primary" @click="busEmit">busEmit</el-button>
		<SvgIcon name="local-wx-voice" :size="20"></SvgIcon>
		{{ testRef }}
	</div>
</template>

<script setup lang="ts" name="">
import exampleApi from '/@/api/demo';
import emitter from '/@/utils/mitt';
const testRef = ref('111');
const reqTest = () => {
	exampleApi.test({ p1: '111', p2: 2222 }).then((res) => {
		console.log(res);
	});
};
emitter.on('testEvent', (data) => {
	console.log(data);
});
const busEmit = () => {
	emitter.emit('testEvent', 111);
};
</script>

<style lang="scss" scoped></style>
