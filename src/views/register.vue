<template>
	<el-container>
		<el-main>
			<el-row>
				<el-col :span="6" :offset="9">
					<el-col :span="6" :offset="12">
						<h1>注册</h1>
					</el-col>
					<el-form :model="Form" ref="Form" label-width="100px">
						<el-form-item label="用户名">
							<el-input placeholder="请输入用户名" v-model="Form.name"></el-input>
						</el-form-item>
						<el-form-item label="省份证号">
							<el-input placeholder="请输入省份证号" v-model="Form.idCard"></el-input>
						</el-form-item>
						<el-form-item label="电话">
							<el-input placeholder="请输入电话" v-model="Form.tel"></el-input>
						</el-form-item>
						<el-form-item label="密码">
							<el-input placeholder="请输入密码" v-model="Form.password"></el-input>
						</el-form-item>
						<el-form-item label="验证码">
							<el-col :span="13" :offset="0">
								<el-input placeholder="请输入验证码" v-model="Form.code"></el-input>
							</el-col>
							<el-form-item>
								<el-button type="danger" @click="getcode">获取验证码</el-button>
							</el-form-item>
						</el-form-item>
						<el-form-item>
							<el-button type="primary" @click="submit">注册</el-button>
						</el-form-item>
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
					password: "",
					name: "",
					code: "",
					idCard: ""
				}
			}
		},
		methods: {
			getcode: function() {
				var _this = this;
				$.ajax({
					url: "http://localhost:10001/user/code",
					success: function(data) {
						alert(data)

					}
				})
			},
			submit: function() {
				var _this = this;
				$.ajax({
					url: "http://localhost:10001/user/register",
					data: _this.Form,
					type: "post",
					success: function(data) {
						alert(data.msg);
						if (data.code == "200") {
							alert(data.msg);
							_this.$router.push("/login");
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
