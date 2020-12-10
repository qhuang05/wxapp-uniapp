<template>
	<view>
		<view class="panel-item u-flex u-row-between u-col-center" @tap="openPage('/pages/moduleB/chart/index')">
			<view>图表</view>
			<u-icon name="arrow-right" color="#333" size="24"></u-icon>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.panel-item{
		height: 90rpx;
		border-bottom: 2rpx solid $cs-border-color;
		padding: 0 30rpx;
	}
</style>
