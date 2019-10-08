<template>
  <div id="base">
    <div id="background"><img class="img" src="../assets/images/u0.jpg"></div>
    <div id="section">
        <h1>欢迎登录玄策运维平台</h1>
      <form>
        <i class="icons-user user"></i>
        <input placeholder="请输入用户名" type="username" class="input left"
          v-model="user.loginname" required/>
        <i class="icons-lock password"></i>
        <input placeholder="请输入密码" type="password" class="input left"
          v-model="user.password" required/>
        <p class="p"><input type="checkbox" class="middle" checked="checked"/>&nbsp;下次自动登录</p>
        <button @click="handleLogin">立即登录</button>
        <p class="white">没有账号？<a href="">免费注册</a></p>
      </form>
    </div>
    <div id="bottom"><span>© Copyright 2017 | 南京玄策智能科技有限公司</span></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        loginname: "",
        password: ""
      }
    }
  },
  methods: {
    handleLogin() {
		// let params = this.$qs.stringify(this.user)
		// this.$http({
		// 	url: 'omm/user/login',
		// 	data: params,
		// 	withCredentials: false
		// }).then( response => {
		// 	if ( response.data.msg == '登录成功' ) {
				this.$router.push('/home')
			// } else {
			// 	alert('密码错误')
			// }
		// } )
	
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#base {
  position: absolute;
  z-index: 0;
}
#section {
  position: fixed;
  right: 80px;
  top: 50%;
  margin-top: -220px;
  width: 396px;
  height: 440px;
  background-color: rgba(153, 153, 153, 0.3);
  border: 1px solid rgba(228, 228, 228, 0.3);
  border-radius: 10px;
}
#section h1 {
  position: absolute;
  top: 30px;
  width: 281px;
  height: 37px;
  color: #fff;
  font-family: "微软雅黑";
  font-weight: 400;
  font-style: normal;
  font-size: 28px;
  padding-left: 58.5px;
  padding-right: 58.5px;
}
form {
  top: 85px;
  width: 297px;
  position: absolute;
  z-index: 11111;
  border-top: 1px solid #fff;
  padding: 0px 50px;
}
.input {
  width: 235px !important;
  height: 44px;
  background-color: rgba(204, 204, 204, 0.4);
  border: none;
  color: #fff;
  font-size: 14px;
  margin-top: 35px;
}
.left {
  padding-left: 63px;
}
input::-webkit-input-placeholder {
  color: #fff;
  position: relative;
}
.p {
  color: #fff;
  float: left;
  margin-top: 20px;
  margin-bottom: 38px;
}
.middle {
  vertical-align: middle;
}
button {
  width: 298px;
  height: 49px;
  background-color: rgba(22, 155, 213, 1);
  border: 1px;
  border-radius: 18px;
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  margin-bottom: 25px;
  cursor: pointer;
}
.white {
  color: #fff;
  font-size: 14px;
}
a {
  text-decoration: none;
  color: #00ff00;
  font-size: 14px;
}
i {
  width: 20px;
  height: 20px;
  position: absolute;
  left: 65px;
  font-size: 20px;
  color: #fff;
}
.user {
  position: absolute;
  top: 45px;
  padding-right: 15px;
  border-right: 1px solid #fff;
}
.password {
  position: absolute;
  top: 125px;
  padding-right: 15px;
  border-right: 1px solid #fff;
}
#bottom {
  position: fixed;
  left: 50%;
  margin-left: -173px;
  bottom: 30px;
  font-family: "微软雅黑";
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  color: #ffffff;
}
</style>
