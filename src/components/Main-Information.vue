<template>
	<div>
		<el-card class="box-card">
		  <div slot="header" class="clearfix">
		    <span>旅游资讯</span>
		    <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
		  </div>
		  <div class="text item">
			  <div id="div1">
				  {{informations.records[0].title}}
				  <img :src="informations.records[0].image" />
			  </div>
			  <div id="div2">
				  {{informations.records[1].title}}
				  <img :src="informations.records[1].image" />
			  </div>  
		    </div>
		</el-card>
	</div>
</template>
<script>
	import $ from "jquery"
	export default {
		data:function(){
			return{
				informations:{},
				informationParam:{
					pageNow:1,
					pageSize:2,
				}
			}
		},
		created:function(){
			this.selectInformations();
		},
		methods:{
			selectInformations:function(){
				var _this=this;
				$.ajax({
					url:"http://127.0.0.1:10001/camp/selectInformation",
					data:_this.informationParam,
					success:function(data){
						if(data.code=="200"){
							_this.informations=data.obj;
						}
					}
				})
			}
		}
	}
</script>

<style>
	 .text {
	    font-size: 14px;
	  }
	
	  .item {
	    margin-bottom: 18px;
	  }
	
	  .clearfix:before,
	  .clearfix:after {
	    display: table;
	    content: "";
	  }
	  .clearfix:after {
	    clear: both
	  }
		
	  .box-card {
	    width: 100%;
		height: 500px;
	  }
	  
	  .el-card #div1{
		  height: 400px;
		  width: 50%;
		  line-height: 35px;
		  float: left;
	  }
	  .el-card #div2{
		  float: left;
	  		  height: 70px;
	  		  width: 50%;
	  		  line-height: 35px;
	  }
</style>
