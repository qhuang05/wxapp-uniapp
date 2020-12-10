<template>
	<view class="u-page">
		<view class="address-form">
			<u-form :model="form" ref="addressForm" label-width="150">
				<u-form-item label="姓名" prop="name">
					<u-input v-model="form.name" placeholder="请输入收货人姓名"></u-input>
				</u-form-item>
				<u-form-item label="手机号" prop="mobile">
					<u-input v-model="form.mobile" type="number" placeholder="请输入手机号"></u-input>
				</u-form-item>
				<u-form-item label="所在地区" prop="region">
					<u-input v-model="form.region" :disabled="true" placeholder="省市区县、乡镇等" @click="showRegionPicker"></u-input>
				</u-form-item>
				<u-form-item label="详细地址" prop="address">
					<u-input v-model="form.address" placeholder="街道、楼牌等"></u-input>
				</u-form-item>
				<u-form-item label="是否默认">
					<view class="u-flex u-row-right">	
						<u-switch v-model="form.isDefault"></u-switch>
					</view>
				</u-form-item>
			</u-form>
			<view class="u-margin-top-50">	
				<u-button type="primary" @click="save">保存</u-button>
			</view>
		</view>
		
		<u-picker 
			v-model="isShowRegionPicker" 
			mode="region"
			:default-region="defaultRegion"
			@confirm="changeRegion"
		>
		</u-picker>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				form: {
					name: '',
					mobile: '',
					province: '',
					city: '',
					area: '',
					region: '',
					address: '',
					isDefault: false
				},
				rules: {
					name: [
						{required: true, message:'请输入姓名', trigger: ['change', 'blur']}
					],
					mobile: [
						{required: true, message:'请输入手机号', trigger: 'blur'},
						// {pattern: /^[1][3,4,5,6,7,8][0-9]{9}$/, message:'请输入正确的手机号', trigger: 'blur'},
						{
							validator: (rule, value, callback) => {
								const reg = /^[1][3,4,5,6,7,8][0-9]{9}$/;
								if(!reg.test(value)){
									callback(new Error('请输入正确的手机号'));
								} else{
									callback();
								}
							},
							trigger: ['change','blur']
						}
					],
					region: [
						{required: true, message:'请选择省市区县、乡镇等', trigger: 'blur'},
					],
					address: [
						{required: true, message:'请输入街道、楼牌等', trigger: 'blur'},
					]
				},
				isShowRegionPicker: false
			}
		},
		computed: {
			defaultRegion(){
				let {province, city, area} = this.form;
				return province&&city&&area ? [province, city, area] : '';
			}
		},
		methods: {
			save(){
				this.$refs.addressForm.validate(valid => {
					if(valid){
						console.log('save => ', this.form);
						uni.showToast({
							title: '地址保存成功'
						})
					}
				})
			},
			showRegionPicker(){
				this.isShowRegionPicker = true;
			},
			changeRegion(data){
				console.log('region => ', data);
				let {province, city, area} = data;
				this.$set(this.form, 'province', province.label);
				this.$set(this.form, 'city', city.label);
				this.$set(this.form, 'area', area.label);
				this.$set(this.form, 'region', province.label + city.label + area.label)
			}
		},
		onReady(){
			this.$refs.addressForm.setRules(this.rules);
		},
		onLoad(options){
			console.log('options => ', options);
			if(options.id){
				 this.form = Object.assign({}, this.form, options);
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #fff;
	}
</style>
<style lang="scss" scoped>
	.address-form{
		padding: 0 30rpx;
	}
</style>
