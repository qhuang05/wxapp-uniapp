/* 是否手机号码*/
export function validateMobile(rule, value, callback) {
	const reg = /^[1][3,4,5,6,7,8][0-9]{9}$/;
	if(!reg.test(value)){
		callback(new Error('请输入正确的手机号码'));
		return;
	}
}
