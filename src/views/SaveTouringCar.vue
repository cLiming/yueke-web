<template>
	<div>
		<div id="SaveTouringCar">
		<el-form ref="TouringCarParam" :model="TouringCarParam" label-width="80px">
		  <el-form-item label="姓名">
		    <el-input v-model="TouringCarParam.name" label-width="100px"></el-input>
		  </el-form-item>
		  <el-form-item label="电话">
		    <el-input v-model="TouringCarParam.tel"></el-input>
		  </el-form-item>
		  <el-form-item label="身份证">
		    <el-input v-model="TouringCarParam.name"></el-input>
		  </el-form-item>
		  <el-form-item label="营地">
		    <el-select v-model="TouringCarParam.camp" placeholder="请选择营地">
		      <el-option v-for="camps in camp" :label="camps.name" :value="camps.id"></el-option>
		    </el-select>
		  </el-form-item>
		  <el-form-item label="房车">
		    <el-select v-model="TouringCarParam.camp" placeholder="请选择房车">
		      <el-option v-for="touringCars in touringCar" :label="touringCars.name" :value="touringCars.id"></el-option>
		    </el-select>
		  </el-form-item>
		  <el-form-item label="入住时间">
		    
		  </el-form-item>
		  
		  <el-form-item>
		    <el-button type="primary" @click="onSubmit">立即创建</el-button>
		    <el-button>取消</el-button>
		  </el-form-item>
		</el-form>
		</div>
	</div>
</template>

<script>
	import $ from "jquery"
	export default {
		data:function(){
			return {
				TouringCarParam:{
					name:"",
					tel:"",
					idCard:"",
					camp:"",
					touringCar:"",
					time:"",
				},
				camp:[],
				touringCar:[],
				value1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
				value2: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
			}
			
		},
		created:function(){
			this.selectBanner();
		},
		methods:{
			selectBanner:function(){
				
			}
		}
	}
</script>

<style>
	#SaveTouringCar{
		border: 1px solid #B3C0D1;
		width: 60%;
		margin-left: 20%;
	}
</style>
