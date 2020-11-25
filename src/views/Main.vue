<template>
	<div>
		<el-container>
		  <el-header><router-link to="login">登录</router-link>|<router-link to="/register">注册</router-link>|<router-link to="usercenter">个人中心</router-link></el-header>
		  <el-main>
			<Banner></Banner>
			<Camp></Camp>
			<hotCamp></hotCamp>
			<CampMasage></CampMasage>
			<Information></Information>
		  </el-main>
		  <el-footer>Footer</el-footer>
		</el-container>
	</div>
</template>
<script>
	import Banner from "@/components/Main-Banner.vue"
	import Camp from "@/components/Main-Camp.vue"
	import hotCamp from "@/components/Main-hotCamp.vue"
	import CampMasage from "@/components/Main-CampMasage.vue"
	import Information from "@/components/Main-Information.vue"
	export default {
		components:{
			Banner,
			Camp,
			hotCamp,
			CampMasage,
			Information
		},
	}
</script>
<style>
	 .el-header, .el-footer {
	    background-color: #B3C0D1;
	    color: #333;
	    text-align: center;
	    line-height: 60px;
	  }
	  
	  .el-aside {
	    background-color: #D3DCE6;
	    color: #333;
	    text-align: center;
	    line-height: 200px;
	  }
	  
	  .el-main {
	    background-color: #E9EEF3;
	    color: #333;
	    text-align: center;
	    line-height: 160px;
	  }
	  
	  body > .el-container {
	    margin-bottom: 40px;
	  }
	  
	  .el-container:nth-child(5) .el-aside,
	  .el-container:nth-child(6) .el-aside {
	    line-height: 260px;
	  }
	  
	  .el-container:nth-child(7) .el-aside {
	    line-height: 320px;
	  }
</style>
