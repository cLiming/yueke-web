<template>
	<div>
		<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
		  <el-menu-item index="1"><router-link to="/">←返回</router-link></el-menu-item>
		  <div class="buyCarDiv"><el-submenu index="2">
		    <template slot="title">房车品牌</template>
		    <el-menu-item index="2-1" v-for="buyCars in buyCar.records"></el-menu-item>
		  </el-submenu></div>
		  <div class="buyCarDiv">
		    <el-form ref="form" :model="form">
		      <el-input v-model="form.name" placeholder="请输入名称"
		                suffix-icon="el-icon-search"></el-input>
		    </el-form>
		  </div>
		  <div class="buyCarDiv">
		  <el-submenu index="4">
		    <template slot="title">排序</template>
		    <el-menu-item index="4-1">价格升序</el-menu-item>
		    <el-menu-item index="4-2">价格降序</el-menu-item>
		  </el-submenu></div>
		  
		</el-menu>
		<el-table
		    :data="buyCar.records"
		    border
		    style="width: 100%">
		    <el-table-column
		      prop="type"
		      label="车型号"
		      width="180">
		    </el-table-column>
		    <el-table-column
		      prop="price"
		      label="价格"
		      width="180">
		    </el-table-column>
		    <el-table-column
		      label="图片">
			  <template slot-scope="scope">
				  <img :src="scope.row.image"/>
			  </template>
		    </el-table-column>
			<el-table-column
			  prop="description"
			  label="描述"
			  width="180">
			</el-table-column>
			<el-table-column
			  prop="bId"
			  label="品牌"
			  width="180">
			</el-table-column>
			<el-table-column
			  prop="number"
			  label="数量"
			  width="180">
			</el-table-column>
		  </el-table>
		 <el-pagination
		 		background
		 		:page-size="buyCarParam.pageNow"  
				@current-change="handleCurrentChange"
		 		layout="prev, pager,next"
		 		:total="buyCar.total"
				:current-page="buyCarParam.pageSize">    
		 </el-pagination>
	</div>
</template>

<script>
	import $ from "jquery"
	export default {
	    data() {
	      return {
			form:{},
	        buyCarParam:{
				pageNow:1,
				pageSize:2,
			},
			bussinessParam:{
				name:"",
			},
			bussinesses:[],
			buyCar:{}
	      };
	    },
		created:function(){
			//this.selectBussiness();
			this.selectBuyCar();
		},
	    methods: {
		 handleCurrentChange: function(currentPage){
	        this.currentPage = currentPage;
	        console.log(this.currentPage) //点击第几页
	    },
		  selectBussiness:function(){
			  var _this=this;
			  $.ajax({
				  url:"http://127.0.0.1:10001/touringCar/getBussiness",
				  data:_this.bussiness,
				  success:function(data){
					  if(data.code=="200"){
							_this.bussinesses=data.obj.record;
							alert(_this.bussinesses);
					  }
				  }
			  })
		  },
		  selectBuyCar:function(){
			  var _this=this;
			  $.ajax({
				  url:"http://127.0.0.1:10001/touringCar/getAllBuyMasage",
				  data:_this.buyCarParam,
				  success:function(data){
					  if(data.code=="200"){
							_this.buyCar=data.obj;
							
					  }
				  }
			  })
		  }
	    }
	  }
</script>

<style>
	.buyCarDiv{
		margin-left: 300px;
		float: left;
	}
	.el-table .warning-row {
	    background: oldlace;
	  }
	
	  .el-table .success-row {
	    background: #f0f9eb;
	  }
</style>
