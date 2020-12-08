<template>
	<view class="u-page">
		<u-form :model="form" ref="uForm" label-width="120">
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
				<u-switch v-model="form.isDefault"></u-switch>
			</u-form-item>
		</u-form>
		<u-button type="primary" @click="save">保存</u-button>
		
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
						// {pattern: /\d/, message:'手机号码不正确', trigger: 'blur'},
						{
							validator: (rule, value, callback) => {
								return this.$u.test.mobile(value);
							},
							message: '手机号码不正确',
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
				this.$refs.uForm.validate(valid => {
					if(valid){
						console.log('save => ', this.form);
					}
				})
			},
			showRegionPicker(){
				this.isShowRegionPicker = true;
			},
			changeRegion(data){
				let {province, city, area} = data;
				this.$set(this.form, 'province', province.label);
				this.$set(this.form, 'city', city.label);
				this.$set(this.form, 'area', area.label);
				this.$set(this.form, 'region', province.label + city.label + area.label)
			}
		},
		onReady(){
			this.$refs.uForm.setRules(this.rules);
		},
		onLoad(options){
			console.log('options => ', options);
		}
	}
</script>

<style lang="scss">
	
</style>
