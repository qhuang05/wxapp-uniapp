/*
 * @Description: async-validator校验函数合集
 */
export function validateMobile(rule, value, callback) {
	const reg = /^1[3|4|5|7|8]\d{9}$/;
	if(!value){
		callback(new Error('请输入手机号码'));
	} else if(!reg.test(value)){
		callback(new Error('请输入正确的手机号码'));
	} else {
		callback();
	}
}

export function validateTelephone(rule, value, callback){
	const reg = /^(\d{3,4}-)?\d{7,8}$/;
	if(!value){
		callback(new Error('请输入电话号码'));
	} else if(!reg.test(value)){
		callback(new Error('请输入正确的电话号码'));
	} else {
		callback();
	}
}

export function validatePhone(rule, value, callback){
	const reg = /^(1[3|4|5|7|8]\d{9})|((\d{3,4}-)?\d{7,8})$/;
	if(!value){
		callback(new Error('请输入电话号码'));
	} else if(!reg.test(value)){
		callback(new Error('请输入正确的电话号码'));
	} else {
		callback();
	}
}

export function validateIdCard(rule, value, callback){
	const reg = /^\d{17}[0-9X]$/;
	if(!value){
		callback(new Error('请输入身份证号码'));
	} else if(!reg.test(value)){
		callback(new Error('请输入正确的身份证号码'));
	} else {
		callback();
	}
}

export function validateEmail(rule, value, callback){
	const reg = /^[A-Za-z0-9._%-]+@([A-Za-z0-9-]+\.)+[A-Za-z]{2,4}$/;
	if(!value){
		callback(new Error('请输入邮箱'));
	} else if(!reg.test(value)){
		callback(new Error('请输入正确的邮箱'));
	} else {
		callback();
	}
}

export function validatePostCode(rule, value, callback){
	const reg = /^\d{6}$/;
	if(!value){
		callback(new Error('请输入邮编'));
	} else if(!reg.test(value)){
		callback(new Error('请输入正确的邮编'));
	} else {
		callback();
	}
}

export function validateUsername(rule, value, callback){
	const reg = /^[0-9a-zA-Z_]{4,30}$/;
	if(!value){
		callback(new Error('请输入用户名'));
	} else if(!reg.test(value)){
		callback(new Error('用户名格式错误，只能包含字母数字或下划线，长度为4-30个字符'));
	} else {
		callback();
	}
}

export function validatePassword(rule, value, callback){
	const reg = /^[a-zA-Z]\w{5,17}$/;
	// const reg = /^(?=.*\d)(?=.*[A-z]).{6,18}$/;
	if(!value){
		callback(new Error('请输入密码'));
	} else if(!reg.test(value)){
		callback(new Error('密码格式错误，密码以字母开头，只能包含字母数字或下划线，长度为6-18个字符'));
	} else {
		callback();
	}
}
