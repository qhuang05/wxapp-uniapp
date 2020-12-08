const patterns = {
	"username": /^[0-9a-zA-Z_]{4,30}$/,	//包含字母、数字和下划线，长度为4-30个字符
	"mobile": /^[1][3,4,5,6,7,8][0-9]{9}$/, //手机号码
}

export default patterns