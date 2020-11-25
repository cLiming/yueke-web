<template>
	<div id="ta">
		<div id="ta2"><h1>我的收藏</h1></div>
		
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
		      prop="name"
		      label="商品名"
		      width="200">
		    </el-table-column>
			<el-table-column
			  prop="description"
			  label="描述"
			   width="200">
			</el-table-column>
		    <el-table-column
		      prop="price"
		      label="单价"
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
		
	</div>	
</template>

<script>
	import $ from "jquery";
	export default{
		data:function(){
			return{
				list1:[]
			}
			
		},
		created:function(){
			this.token =  localStorage.getItem('token');
			this.list();
		},
		methods:{
			list:function(){
				var othis = this
				$.ajax({
					url:"http://localhost:10001/collection/selectCollection",
					// data:1,
					type:"get",
					headers:{
						'X-Token':this.token,
					},
					success:function(data){
						othis.list1=data.list
						// alert(data.list[0].name);
					}
					
				})
			},
			handleDelete:function(id){
				var othis = this
				alert(id);
				$.ajax({
					url:"http://localhost:10001/collection/deleteCollection",
					data:{"id":id},
					type:"delete",
					success:function(data){
						if(data.code=="200"){
							othis.list();
						}
					}
				})
			}
		}
	}
	
</script>

<style>
	#ta{
	
		margin-left: 15%;
	}
	#ta2{
	
		padding-right: 25%;
	}
</style>
