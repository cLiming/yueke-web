<template>
	<div>
	<el-container>
	  <el-header >
		  <el-col :span="4" :offset="10">
		  <i class="el-icon-user-solid"></i>个人中心 </el-col>
	  <el-col :span="3" :offset="6">
	  	<el-button type="primary" @click="login">登录</el-button>
		<el-button type="primary" @click="delet">注销</el-button>
	  </el-col>
	  
	  
	  
	  </el-header>
	  <el-main>
		  <el-row :gutter="20">
		    <el-col :span="8"><div class="grid-content bg-purple">
			<el-button @click="order" circle><i class="el-icon-s-goods" style="font-size: 30px; color: #E6A23C"></i>
			</el-button>
			我的订单</el-button></div></el-col>
			
		    <el-col :span="8"><div class="grid-content bg-purple">
			<el-button  circle><i class="el-icon-s-finance" style="font-size: 30px; color: navy"></i>
			</el-button>
			待支付</div></el-col>
			
		    <el-col :span="8"><div class="grid-content bg-purple">
			<el-button  circle><i class="el-icon-s-claim" style="font-size: 30px; color: #67C23A"></i>
			</el-button>
			已支付</div></el-col>
			
		    <el-col :span="8"><div class="grid-content bg-purple">
			<el-button @click="collection" circle><i class="el-icon-star-on" style="font-size: 30px; color: red"></i>
			</el-button>
			我的收藏</div></el-col>
			
			<el-col :span="8"><div class="grid-content bg-purple">
			<el-button @click="evaluete" circle><i class="el-icon-s-comment" style="font-size: 30px; color: blue"></i>
			</el-button>
			我的评价</div></el-col>
		  </el-row>
	  </el-main>
	</el-container>
	</div>
</template>

<script>
	import $ from "jquery";
	export default{
		created:function(){
		    	//页面加载时就从本地通过localstorage获取存储的token值
		        this.token =  localStorage.getItem('token')
		    },
		methods:{
			login:function(){
				var _this = this;
				 _this.$router.push("/login");
			},
			delet:function(){
				localStorage.clear()
				alert("已注销")
				this.token =  localStorage.getItem('token')
			},
			collection:function(){
				// var _this = this;
				// var token = localStorage.getItem("token")
				//alert(this.token);
				if(this.token==null){
					alert("请先去登录")
					this.$router.push("/login");
				}else{
					this.$router.push("/collection");
				}
			},
			evaluete:function(){
				// var _this = this;
				// var token = localStorage.getItem("token")
				//alert(this.token);
				if(this.token==null){
					alert("请先去登录")
					this.$router.push("/login");
				}else{
					this.$router.push("/evaluate");
				}
			},
			order:function(){
				// var _this = this;
				// var token = localStorage.getItem("token")
				//alert(this.token);
				if(this.token==null){
					alert("请先去登录")
					this.$router.push("/login");
				}else{
					this.$router.push("/order");
				}
			},
		}
	}
</script>

<style>
	  .el-header, .el-footer {
	     background-color: #B3C0D1;
	     color: #333;
	     text-align: center;
	     line-height: 70px;
	   }
	   
/* 	   .el-aside {
	     background-color: #D3DCE6;
	     color: #333;
	     text-align: center;
	     line-height: 200px;
	   } */
	   
	   .el-main {
	     background-color: #E9EEF3;
	     color: #333;
	     text-align: center;
	     line-height: 160px;
	   }
</style>
