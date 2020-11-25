<template>
	<div>
		<el-carousel indicator-position="outside">
		    <el-carousel-item v-for="banner in banners" :key="banner">
				<img :src="banner.image" width="100%" height="100%"/>
		    </el-carousel-item>
		  </el-carousel>
	</div>
</template>

<script>
	import $ from "jquery"
	export default {
		data:function(){
			return {
				banners:[]
			}
			
		},
		created:function(){
			this.selectBanner();
		},
		methods:{
			selectBanner:function(){
				var _this=this;
				$.ajax({
					url:"http://127.0.0.1:10001/camp/selectBanner",
					success:function(data){
						if(data.code=="200"){
							_this.banners=data.list;
						}
					}
				})
			}
		}
	}
</script>

<style>
	
</style>
