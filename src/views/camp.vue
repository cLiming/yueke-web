<template>
	<el-container>
		<el-header>
			<div id="camp-top">
				<span class="camp-font">营地住宿</span>
				<div style="float: right;">
					<select v-model="selected">
						<option value="0">请选择城市</option>
						<option v-for="(item,index) in city" :value="item.id">{{item.name}}</option>
					</select>
				</div>
			</div>
			<div>
				<input type="text" placeholder="请输入名称查询营地" id="camp-select" v-model="CampListParam.name" />
				<input type="button"  value="查询" style="float: left;border-left: 10px; margin-left: 10px; "
				 @click="campSelect()" />
				<input type="button" style="width: 50px;height: 28px;"  value="上一页" @click="prev()" />
				<input type="button" style="width: 50px;height: 28px;" value="下一页" @click="nextPage()" />
			</div>
		</el-header>
		<el-main>
			<div style="width: 100%;height: 1000px;background-color: #ccc; margin-top: 40px;">
				<div class="camp-main" v-for="camp in Camp">
					<div >
						<template>
						<img class="camp-img" :src="camp.image" @click="jump(camp.id)" />
						</template>
					</div>
					<div>
						<span class="camp-name">{{camp.name}}</span>
						<span class="camp-description">{{camp.description}}</span>
					</div>
				</div>
			</div>
		</el-main>
		<el-footer>

		</el-footer>
	</el-container>

</template>

<script type="text/javascript">
	import elementUI from "element-ui"
	import $ from 'jquery'
	import axios from 'axios'
	export default {
		data: function() {
			return {
				pageCount: '',
				CampListParam: {
					cityId: 1,
					name: "",
					status: 1,
					pageIndex: 1,
					pageNum: 4
				},
				Camp: [{
					id: 0,
					name: '',
					address: '',
					description: '',
					status: 0,
					cityId: 0,
					location: '',
					image: '',
					tel: '123'
				}],
				city: [{
					id: 0,
					name: '',
					location: 0
				}],
				selected: '1'

			}
		},
		created: function() {
			this.cityList();
			this.campList();
		},
		methods: {
			campSelect: function() {
				this.CampListParam.pageIndex = 1;
				this.pageCount = "";
				this.campList();
			},
			campList: function() {
				var _this = this;
				axios.get('http://localhost:10001/camp/campList?cityId=' + this.selected + '&status=' + this.CampListParam.status +
						'&name=' + this.CampListParam.name +
						'&pageIndex=' + this.CampListParam.pageIndex + '&pageNum=' + this.CampListParam.pageNum + '')
					.then(function(data) {
						_this.Camp = data.data.obj.records;
						console.log("camp:"+_this.Camp);
						for(var i=0;i<_this.Camp.length;i++){
							if (_this.Camp[i].image != null) {
								if (_this.Camp[i].image.split(",").length > 1) {
									_this.Camp[i].image = _this.Camp[i].image.split(",")[0];
								} else {
									_this.Camp[i].image = _this.Camp[i].image.split(",");
								}
							}
						}
						
						_this.pageCount = data.data.obj.pages;
						console.log(_this.Camp);
					})
			},
			cityList: function() {
				var _this = this;
				axios.get('http://localhost:10001/camp/cityList')
					.then(function(data) {
						_this.city = data.data.list;
						console.log(_this.city);
					})
			},
			prev: function() {
				if (this.CampListParam.pageIndex == 1) {
					alert("已经是第一页");
					return;
				}
				this.CampListParam.pageIndex = this.CampListParam.pageIndex + (-1);
				this.campList();
			},
			nextPage: function() {
				console.log(this.pageCount);
				if (this.CampListParam.pageIndex == this.pageCount) {
					alert("已经是最后一页");
					return;
				}	
				this.CampListParam.pageIndex = this.CampListParam.pageIndex + 1;
				this.campList();
			},
			jump:function(id){
				console.log(id);
				this.$router.push({path:"/campDetail/"+id});
			}
		}
	}
</script>

<style>
	.camp-main {
		float: left;
		text-align: center;
		width: 45%;
		height: 45%;
		margin: 30px;
		background-color: #F0F8FF;
		display: inline-block;
	}

	.camp-img {
		width: 100%;
		height: 400px;
	}

	#camp-top {
		width: 100%;
		height: 35px;
		text-align: center;
	}

	#camp-select {
		width: 600px;
		text-align: left;
		float: left;
	}

	.camp-foot {
		width: 100%;
		height: 200px;
	}

	.camp-font {
		font-size: 20px;
		color: black;
	}

	.camp-name {
		display: block;
	}

	.camp-description {
		display: block;
	}

	.el-dropdown-link {
		cursor: pointer;
		color: #409EFF;
	}

	.el-icon-arrow-down {
		font-size: 12px;
	}

	.demonstration {
		display: block;
		color: #8492a6;
		font-size: 14px;
		margin-bottom: 20px;
	}
</style>
