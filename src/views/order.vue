<template>
	<div>
		<h1>我的订单</h1>
		<el-tabs  v-model="activeName" @tab-click="handleClick">
		    <el-tab-pane  label="全部订单" name="first">
				<template>
				  <el-table
					:data="list1"
				    style="width:75%">
				    <el-table-column
				      label="图片"
				      width="200">
					  <template scope="scope">
					    <img :src="scope.row.image" width="100" height="100" class="head_pic"/>
					  </template>
				    </el-table-column>
				    <el-table-column
				      prop="orderTime"
				      label="下单时间"
				      width="200">
				    </el-table-column>
					<el-table-column
					  prop="totals"
					  label="购买数量"
					   width="200">
					</el-table-column>
				    <el-table-column
				      prop="id"
				      label="订单id"
					   width="200">
				    </el-table-column>
					<el-table-column
					 label="操作">
					   <template slot-scope="scope">
					           <el-button
					             size="mini"
					             @click="handleEdit(scope.row)">查看</el-button>
					           <el-button
					             size="mini"
					             type="danger"
					             @click="handleDelete( scope.row.id)">移除</el-button>
					         </template>
							 <!-- <el-button type="primary" @click="look">查看</el-button>
							 <el-button type="primary" @click="delet(id)">删除</el-button> -->
					</el-table-column>
				  </el-table>
				</template>
			</el-tab-pane>
		    <el-tab-pane label="待支付" name="second">
				<template>
				  <el-table
					:data="list2"
				    style="width:75%">
				    <el-table-column
				      label="图片"
				      width="200">
					  <template scope="scope">
					    <img :src="scope.row.image" width="100" height="100" class="head_pic"/>
					  </template>
				    </el-table-column>
				    <el-table-column
				      prop="orderTime"
				      label="下单时间"
				      width="200">
				    </el-table-column>
					<el-table-column
					  prop="totals"
					  label="购买数量"
					   width="200">
					</el-table-column>
				    <el-table-column
				      prop="id"
				      label="订单id"
					   width="200">
				    </el-table-column>
					<el-table-column
					 label="操作">
					   <template slot-scope="scope">
					           <el-button
					             size="mini"
					             @click="handleEdit(scope.row)">查看</el-button>
					           <el-button
					             size="mini"
					             type="danger"
					             @click="handleDelete( scope.row.sid)">移除</el-button>
					         </template>
							 <!-- <el-button type="primary" @click="look">查看</el-button>
							 <el-button type="primary" @click="delet(id)">删除</el-button> -->
					</el-table-column>
				  </el-table>
				</template>
			</el-tab-pane>
		    <el-tab-pane label="已完成" name="third">
			<template>
				  <el-table
					:data="list3"
				    style="width:75%">
				    <el-table-column
				      label="图片"
				      width="200">
					  <template scope="scope">
					    <img :src="scope.row.image" width="100" height="100" class="head_pic"/>
					  </template>
				    </el-table-column>
				    <el-table-column
				      prop="orderTime"
				      label="下单时间"
				      width="200">
				    </el-table-column>
					<el-table-column
					  prop="totals"
					  label="购买数量"
					   width="200">
					</el-table-column>
				    <el-table-column
				      prop="id"
				      label="订单id"
					   width="200">
				    </el-table-column>
					<el-table-column
					 label="操作">
					   <template slot-scope="scope">
					           <el-button
					             size="mini"
					             @click="handleEdit(scope.row)">查看</el-button>
					           <el-button
					             size="mini"
					             type="danger"
					             @click="handleDelete( scope.row.sid)">移除</el-button>
					         </template>
							 <!-- <el-button type="primary" @click="look">查看</el-button>
							 <el-button type="primary" @click="delet(id)">删除</el-button> -->
					</el-table-column>
				  </el-table>
				</template>
			
			</el-tab-pane>
		  </el-tabs>

	</div>
</template>

<script>
import $ from "jquery";
	export default {
	    data() {
	      return {
	        activeName: 'first',
			list1:[],
			list2:[],
			list3:[],
	      };
	    },
		created:function(){
			this.token =  localStorage.getItem('token');
			this.selectorder();
			this.selectorder1();
			this.selectorder2();
			
			
		},
	    methods: {
	      handleClick(tab,event) {
			 
	         console.log(tab, event);
	      },
	    
		selectorder:function(){
			var othis = this
			
			$.ajax({
				url:"http://192.168.10.24:10001/order/selectOrder",
				type:"get",
				headers:{
					'X-Token':this.token,
				},
				success:function(data){
					if(data.code=="200"){
						
						othis.list1=data.list
					}
				}
			})
		},
		selectorder1:function(){
			var othis = this
			
			$.ajax({
				url:"http://192.168.10.24:10001/order/selectOrder",
				data:{status:0},
				type:"get",
				headers:{
					'X-Token':this.token,
				},
				success:function(data){
					if(data.code=="200"){
						
						othis.list2=data.list
					}
				}
			})
		},
		selectorder2:function(){
			var othis = this
			
			$.ajax({
				url:"http://192.168.10.24:10001/order/selectOrder",
				data:{status:2},
				type:"get",
				headers:{
					'X-Token':this.token,
				},
				success:function(data){
					if(data.code=="200"){
						
						othis.list3=data.list
					}
				}
			})
		},
		},
		
		
	  };


</script>

<style>
</style>
