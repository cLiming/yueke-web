<template>
	<div>
		<el-carousel indicator-position="outside" height="500px">
			<el-carousel-item v-for="item in urls" :key="item">
				<img :src="item.image" width="100%" height="100%"/>
			</el-carousel-item>
		</el-carousel>
		<div id="al">
			<div id="yd">
				<el-dropdown  @command="ydCommand" v-model="camps">
					<el-button type="info">
						营地<i class="el-icon-arrow-down el-icon--right"></i>
					</el-button>
					<el-dropdown-menu slot="dropdown" >
						<el-dropdown-item command=null>营地</el-dropdown-item>
						<el-dropdown-item v-for="k,index in camps"  :command="index">{{k.name}}</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</div>
			<div id="fl">
				<el-dropdown @command="handleCommand">
				  <el-button type="info">
				  	分类<i class="el-icon-arrow-down el-icon--right"></i>
				  </el-button>
				  <el-dropdown-menu slot="dropdown">
				  	<el-dropdown-item command=null >分类</el-dropdown-item>
				  	<el-dropdown-item command=1>音乐</el-dropdown-item>
				  	<el-dropdown-item command=2>灯会</el-dropdown-item>
				  	<el-dropdown-item command=3>美食</el-dropdown-item>
				  </el-dropdown-menu>
				</el-dropdown>
			</div>
			<div id="px">
				<el-dropdown @command="pxCommand">
				<el-button type="info">
					排序<i class="el-icon-arrow-down el-icon--right"></i>
				</el-button>
				  <el-dropdown-menu slot="dropdown">
					   <el-dropdown-item command=null>排序</el-dropdown-item>
					   <el-dropdown-item command=0>价格升序</el-dropdown-item>
					   <el-dropdown-item command=1>价格降序</el-dropdown-item>
				  </el-dropdown-menu>
				</el-dropdown>
			</div>
			<div id="hd">
				 <el-row>
				   <el-col :span="24" v-for="(o, index) in activitys" :key="o" >
				     <el-card :body-style="{ padding: '0px' }">
				       <img :src="o.image" class="image" width="100%">
				       <div style="padding: 14px;">
				         <span>{{o.name}}</span>
				         <div class="bottom clearfix">
				           <time class="time">{{ o.time}}</time>
				           <el-button type="text" class="button">￥{{o.price}}</el-button>
				         </div>
				       </div>
				     </el-card>
				   </el-col>
				 </el-row>
			</div>
			
		</div>
	</div>
</template>
<script>
//import HelloWorld from '@/components/HelloWorld.vue'
	import $ from 'jquery'
	import axios from 'axios'
	export default {
		name: "Activity",
		components: {},
		
		data:function() {
			return {
					urls:[],
					activitys:[
						// {
						// 	image:"http://www.joyrv.cn//Public/Uploads/shop/store/goods/23/23_05912768759635556_240.png",
						// 	price:200,
						// 	name:"狂欢音乐节",
						// },
						// {
						// 	image:"http://www.joyrv.cn//Public/Uploads/shop/store/goods/23/23_05944740612106222_240.jpg",
						// 	price:156,
						// 	name:"篝火歌舞晚会",
						// }
					],
					activity:{
							 cityId:null,
							  type:null,
							  name:"",
							  priceType:null,
							  cId:null,
							  pageIndex:null,
							  pageNum:null
					},
					camp:{},
					camps:[],
				}
			
			
		},

		mounted:function() {
			this.initActivity();
			this.getActivityBanner();
			this.getCamp();
		},
		methods: {
			//查询所有活动
			initActivity:function() {
				axios.get('http://localhost:10001/camp/actListLimit',{
				    params:this.activity,
				})
				.then((res)=>{//  处理成功的函数 相当于success
					console.log("活动"+res.data.list)
					this.activitys = res.data.list;  
				})
				.catch((error)=>{
				    console.log(error)  //  错误处理 相当于error
				})
				
			},
			handleCommand:function(command) {
			        this.activity.type = command;
					alert(command)
			 },
			 pxCommand:function(command) {
			         this.activity.priceType = command;
			 		alert(command)
			  },
			 ydCommand:function(command){
					this.activity.cId = command;
					alert(command);
			 },
			 //查询活动广告
			getActivityBanner: function() {
				axios.get('http://localhost:10001/camp/actBanner')
				.then((res)=>{
						console.log("广告"+res.data)
				        this.urls = res.data.list
				})
				.catch((error)=>{
				        console.log(error);
				})
			},
			//查询所有营地
			getCamp: function() {
				axios.get('http://localhost:10001/camp/campList',{
					params:this.camp,
				})
				.then((res)=>{
						console.log("营地"+res.data.list)
				        this.camps = res.data.list
				})
				.catch((error)=>{
				        console.log(error);
				})
			}
		},
		watch:{
			activity:{
						//深度监听 监听对象中属性的变化以及集合中对象的变化
						handler:function(n,o){
							this.initActivity();
						},
						deep:true
			}
		}
	}
</script>
<style>
	#al {
		background-color: #A6A9AD;
		width: 100%;
		float: left;
	}

	#yd {
		margin-left: 10%;
		float: left;
	}

	#fl {
		margin-left: 23%;
		float: left;
	}

	#px {
		margin-left: 25%;
		float: left;
	}
	#hd{
		width: 100%;
		float: left;
		border-radius:20px;
	}
	.time {
	    font-size: 13px;
	    color: #999;
	  }
	  
	  .bottom {
	    margin-top: 13px;
	    line-height: 12px;
	  }
	
	  .button {
	    padding: 0;
	    float: right;
	  }
	
	  .image {
	    width: 100%;
	    display: block;
	  }
	
	  .clearfix:before,
	  .clearfix:after {
	      display: table;
	      content: "";
	  }
	  
	  .clearfix:after {
	      clear: both
	  }
		.el-dropdown-link {
		  cursor: pointer;
		  color: #409EFF;
		}
		.el-icon-arrow-down {
		  font-size: 12px;
		}
	
</style>
