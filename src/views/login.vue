<template>
	<el-container>
		<el-main>
			<el-row>
				<el-col :span="6" :offset="9">
					<el-col :span="6" :offset="12">
						<h1>登陆</h1>
					</el-col>
					<el-form :model="Form" ref="Form" label-width="100px">
						<el-form-item label="电话">
							<el-input placeholder="请输入电话" v-model="Form.tel"></el-input>
						</el-form-item>
						<el-form-item label="密码">
							<!-- <el-input v-model="Form.password"></el-input> -->
							<el-input placeholder="请输入密码" v-model="Form.password" show-password></el-input>
						</el-form-item>
						<el-form-item>
							<el-button type="primary" @click="submit">登录</el-button>
						</el-form-item>
						<el-col :span="8" :offset="7">
							<router-link to="/register">没有账号?去注册</router-link>
						</el-col>
						<router-link to="/lookpword">忘记密码</router-link>
					</el-form>
				</el-col>
			</el-row>
		</el-main>
	</el-container>
</template>

<script>
	import $ from "jquery";
	export default {
		data: function() {
			return {
				Form: {
					tel: "",
					password: ""
				}
			}
		},
		methods: {
			submit: function() {
				var _this = this;
				$.ajax({
					url: "http://localhost:10001/user/login",
					data: _this.Form,
					success: function(data) {
						if (data.code == "200") {
							alert(data.msg);
							localStorage.setItem("token", data.msg);
							_this.$router.push("/");
						} else {
							alert(data.msg)
						}

					}
				})
			}
		}
	}
</script>

<style>
</style>
