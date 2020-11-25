<template>
	<div>
		<el-carousel indicator-position="outside">
		    <el-carousel-item v-for="hotCamp in hotCamps" :key="hotCamp">
		      <img :src="hotCamp.image" width="100%" height="100%"/>
		    </el-carousel-item>
		  </el-carousel>
	</div>
</template>
<script>
	import $ from "jquery"
	export default {
		data:function(){
			return{
				hotCamps:[],
			}
		},
		created:function(){
			this.selectHotCamps();
		},
		methods:{
			selectHotCamps:function(){
				var _this=this;
				$.ajax({
					url:"http://127.0.0.1:10001/camp/campList",
					success:function(data){
						if(data.code=="200"){
							_this.hotCamps=data.list;
							for(var i=0;i<_this.hotCamps.length;i++){
								 var images=_this.hotCamps[i].image; 
								 if(images!=null){
									  var image=images.split(",");
									  _this.hotCamps[i].image=image[0];
								 }
							}
						}
					}
				})
			}
		}
	}
</script>
<style>
	
</style>
