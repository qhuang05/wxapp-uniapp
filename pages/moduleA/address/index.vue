<template>
	<view class="u-page">
		<view v-for="item,index in list">
			<view class="adddress">{{item.site}}</view>
			<view class="name">{{item.name}}</view>
			<view class="mobile">{{item.phone}}</view>
			<view class="opt-box u-text-right">	
				<a @click="editAddress('edit', item)">编辑</a>
			</view>
		</view>
		<view class="u-margin-top-20">
			<u-button @click="editAddress('add')">新建收货地址</u-button>
		</view>
		<view class="u-margin-top-20">
			<u-button type="primary" @click="chooseWXAddress">使用微信地址</u-button>
			<view class="wx-address">
				{{wxAddress.countyName || ''}}
				{{wxAddress.provinceName || ''}}
				{{wxAddress.cityName || ''}}
				{{wxAddress.detailInfo || ''}},
				{{wxAddress.userName || ''}}
				{{wxAddress.telNumber || ''}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				list: [
					{
						id: 1,
						name: '游X',
						phone: '183****5523',
						tag: [
							{
								tagText: '默认'
							},
							{
								tagText: '家'
							}
						],
						site: '广东省深圳市宝安区 自由路66号'
					},
					{
						id: 2,
						name: '李XX',
						phone: '183****5555',
						tag: [
							{
								tagText: '公司'
							}
						],
						site: '广东省深圳市宝安区 翻身路xx号'
					},
				],
				wxAddress: {}
			}
		},
		methods:{
			editAddress(type, data={}){
				this.$u.route({url: '/pages/address/edit', params: data})
			},
			chooseWXAddress(){
				let self = this;
				uni.chooseAddress({
					success(res){
						console.log('wx address => ', res);
						self.wxAddress = Object.assign({}, {
							countyName: res.countyName,
							provinceName: res.provinceName,
							cityName: res.cityName,
							detailInfo: res.detailInfo,
							userName: res.userName,
							telNumber: res.telNumber
						})
					}
				})
			}
		}
	}
</script>
	
<style lang="scss">
	
</style>
