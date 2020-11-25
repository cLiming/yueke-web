<template>
	<div style="height: 1500px;">
		<div>
			<div>
				<h1 class="detail-text">营地名称:{{Camp.name}}</h1>
				<span class="detail-text">地址:{{Camp.address}}</span>
				<span class="detail-text">描述:{{Camp.description}}</span>
			</div>
			<div style="height: 700px;   heibackground-color: antiquewhite;">
				<div v-for="img in campImg">
					<img :src="img" class="detail-img" />
				</div>
			</div>
		</div>
		<div style="width: 100%;">
			<ul id="myTab" class="nav nav-tabs">
				<li class="active">
					<a href="#car" data-toggle="tab" @click="carType()">
						房车租赁
					</a>
				</li>
				<li class="detail-li"><a href="#acc" data-toggle="tab" @click="accType()">特色住宿</a></li>
				<li class="detail-li">
					<a href="#goods" id="myTabDrop1" data-toggle="tab" @click="goodsType()">物资租赁
						<b class="caret"></b>
					</a>
				</li>
			</ul>
		</div>
		<div id="myTabContent" class="tab-content">
			<div class="tab-pane fade in active" id="car">
				<table>
					<thead>
						<tr>
							<td width="200px">图片</td>
							<td width="100px">名称</td>
							<td width="150px">描述</td>
							<td width="100px">定金</td>
							<td width="100px">租金/天</td>
							<td width="100px">入住时间</td>
							<td width="100px">天数</td>
							<td width="100px">结束时间</td>
							<td width="100px">小计</td>
							<td width="100px">操作</td>
						</tr>
					</thead>
					<tbody v-for="(car,index) in Car">
						<tr>
							<td width="200px">
								<img class="detail-td-img" :src="car.image" />
							</td>
							<td width="100px">{{car.name}}</td>
							<td width="150px">{{car.description}}</td>
							<td width="100px">{{car.preprice}}</td>
							<td width="100px">{{car.price}}</td>
							<td width="100px">
								<input type="date" :min="initTime" v-model="car.startTime" />
							</td>
							<td width="100px">
								<input type="number" style="text-align: center;" readonly="readonly" v-model="car.num" />
							</td>
							<td width="100px">
								<input type="date" :min="car.startTime" v-model="car.EndTime" />
							</td>
							<td width="100px">
								<span>{{car.total}}</span>
							</td>
							<td width="100px">
								<input type="button" value="预定"  @click="createOrderType4(car)"/>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="tab-pane fade" id="acc">
				<table>
					<thead>
						<tr>
							<td width="200px">图片</td>
							<td width="100px">名称</td>
							<td width="150px">描述</td>
							<td width="100px">租金/天</td>
							<td width="100px">入住时间</td>
							<td width="100px">天数</td>
							<td width="100px">结束时间</td>
							<td width="100px">小计</td>
							<td width="100px">操作</td>
						</tr>
					</thead>
					<tbody v-for="(acc,index) in Acc">
						<tr>
							<td width="200px">
								<img class="detail-td-img" :src="acc.image" />
							</td>
							<td width="100px">{{acc.name}}</td>
							<td width="150px">{{acc.description}}</td>
							<td width="100px">{{acc.price}}</td>
							<td width="100px">
								<input type="date" :min="initTime" v-model="acc.startTime" />
							</td>
							<td width="100px">
								<input type="number" style="text-align: center;" readonly="readonly" v-model="acc.num" />
							</td>
							<td width="100px">
								<input type="date" :min="acc.startTime" v-model="acc.EndTime" />
							</td>
							<td width="100px">
								<span>{{acc.total}}</span>
							</td>
							<td width="100px">
								<input type="button" value="预定"  @click="createOrderType5(acc)"/>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="tab-pane fade" id="goods">
				<table>
					<thead>
						<tr>
							<td width="200px">图片</td>
							<td width="100px">名称</td>
							<td width="150px">描述</td>
							<td width="100px">租金/天</td>
							<td width="100px">入住时间</td>
							<td width="100px">天数</td>
							<td width="100px">结束时间</td>
							<td width="100px">小计</td>
							<td width="100px">操作</td>
						</tr>
					</thead>
					<tbody v-for="(goods,index) in Goods">
						<tr>
							<td width="200px">
								<img class="detail-td-img" :src="goods.image" />
							</td>
							<td width="100px">{{goods.name}}</td>
							<td width="150px">{{goods.description}}</td>
							<td width="100px">{{goods.price}}</td>
							<td width="100px">
								<input type="date" :min="initTime" v-model="goods.startTime" />
							</td>
							<td width="100px">
								<input type="number" style="text-align: center;" readonly="readonly" v-model="goods.num" />
							</td>
							<td width="100px">
								<input type="date" :min="goods.startTime" v-model="goods.EndTime" />
							</td>
							<td width="100px">
								<span class="price">{{goods.total}}</span>
							</td>
							<td width="100px" >
								<input type="button" value="预定"  @click="createOrderType6(goods)"/>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<input type="button" value="上一页" @click="prev()" />
		<input type="button" value="下一页" @click="nextPage()" />
		<div style="width: 100%;height: 100px;background-color: antiquewhite;">
			<div style="display: inline-block;float: left;margin-left: 100px;">
				<span class="detail-font">总计：</span>
				<span class="detail-font-red" v-text="orderTotal"></span>
				<span class="detail-font" style="margin-left: 15px;">¥</span>
			</div>
			<div style="float:left; margin-left: 150px;margin-top: 5px;">
				<input type="button" class="btn-danger" value="提交预定" @click="createOrderAll()"/>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import $ from 'jquery'
	import axios from 'axios'
	import 'bootstrap/dist/css/bootstrap.min.css'
	import 'bootstrap/dist/js/bootstrap.min'
	import qs from 'qs'
	export default {
		data: function() {
			return {
				initTime: '',
				StartTime: '',
				EndTime: '',
				EndTimeMin: '',
				orderTotal:0,
				orders:[],
				pageInfo: {
					type: 0,
					carPage: {
						pageIndex: 1,
						pageNum: 4,
						pageCount: ''
					},
					accPage: {
						pageIndex: 1,
						pageNum: 4,
						pageCount: ''
					},
					goodsPage: {
						pageIndex: 1,
						pageNum: 4,
						pageCount: ''
					},

				},
				Camp: {
					id: 0,
					name: '',
					address: '',
					description: '',
					status: 0,
					cityId: 0,
					location: '',
					image: '',
					tel: '123'
				},
				campImg: [{}],
				Car: [
					{
					id: '',
					type: '',
					name: '',
					description: '',
					image: '',
					cId: '',
					ownerId: '',
					preprice: '',
					price: '',
					status: '',
					type: '',
					endTime: '',
					startTime: '',
					EndTime: '',
					num: '',
					total: '',
					collected:''
				}
				],
				Acc: [{
					id: '',
					name: '',
					price: '',
					description: '',
					cId: '',
					typ: '',
					image: '',
					status: '',
					startTime: '',
					EndTime: '',
					num: '',
					total: '',
					collected:''
				}],
				Goods: [{
					id: '',
					name: '',
					cId: '',
					price: '',
					description: '',
					typ: '',
					number: '',
					image: '',
					startTime: '',
					EndTime: '',
					num: '',
					total: '',
					collected:''
				}]

			}

		},
		methods: {
			goodsType: function() {
				this.pageInfo.type = 3;
			},
			accType: function() {
				this.pageInfo.type = 2;
			},
			carType: function() {
				this.pageInfo.type = 1;
			},
			campById: function() {
				var _this = this;
				var id = this.$route.params.id;
				axios.get('http://localhost:10001/camp/campById?id=' + id + '')
					.then(function(data) {
						_this.Camp = data.data.obj;
						console.log("Camp:" + _this.Camp);
						if (_this.Camp.image != null) {
							if (_this.Camp.image.split(",").length > 1) {
								_this.campImg = _this.Camp.image.split(",");
							}
						}
					})
			},
			carByCid: function() {
				var _this = this;
				var id = this.$route.params.id;
				axios.get('http://localhost:10001/camp/rentDetail?cId=' + id + '&type=1&pageIndex=' +
						this.pageInfo.carPage.pageIndex + '&pageNum=' +
						this.pageInfo.carPage.pageNum + '')
					.then(function(data) {
						_this.Car = data.data.obj.records;
						_this.pageInfo.carPage.pageCount = data.data.obj.pages;
						for (var i = 0; i < _this.Car.length; i++) {
							if (_this.Car[i].image != null) {
								if (_this.Car[i].image.split(",").length > 1) {
									_this.Car[i].image = _this.Car[i].image.split(",")[0];
								} else {
									_this.Car[i].image = _this.Car[i].image.split(",");
								}
							}
						}
						console.log("Car:" + _this.Car);
					})
			},
			AccByCid: function() {
				var _this = this;
				var id = this.$route.params.id;
				axios.get('http://localhost:10001/camp/rentDetail?cId=' + id + '&type=2&pageIndex=' +
						this.pageInfo.accPage.pageIndex + '&pageNum=' +
						this.pageInfo.accPage.pageNum + '')
					.then(function(data) {
						_this.Acc = data.data.obj.records;
						_this.pageInfo.accPage.pageCount = data.data.obj.pages;
						for (var i = 0; i < _this.Acc.length; i++) {
							if (_this.Acc[i].image != null) {
								if (_this.Acc[i].image.split(",").length > 1) {
									_this.Acc[i].image = _this.Acc[i].image.split(",")[0];
								} else {
									_this.Acc[i].image = _this.Acc[i].image.split(",");
								}
							}
						}
						console.log("Acc:" + _this.Acc);
					})
			},
			GoodsByCid: function() {
				var _this = this;
				var id = this.$route.params.id;
				axios.get('http://localhost:10001/camp/rentDetail?cId=' + id + '&type=3&pageIndex=' +
						this.pageInfo.goodsPage.pageIndex + '&pageNum=' +
						this.pageInfo.goodsPage.pageNum + '')
					.then(function(data) {
						_this.Goods = data.data.obj.records;
						_this.pageInfo.goodsPage.pageCount = data.data.obj.pages;
						for (var i = 0; i < _this.Goods.length; i++) {
							if (_this.Goods[i].image != null) {
								if (_this.Goods[i].image.split(",").length > 1) {
									_this.Goods[i].image = _this.Goods[i].image.split(",")[0];
								} else {
									_this.Goods[i].image = _this.Goods[i].image.split(",");
								}
							}
						}
						console.log("Goods:" + _this.Goods);
					})
			},
			carType: function() {
				this.pageInfo.type = 1;
			},
			accType: function() {
				this.pageInfo.type = 2;
			},
			goodsPage: function() {
				this.pageInfo.type = 3;
			},
			prev: function() {
				if (this.pageInfo.type == 1) {
					if (this.pageInfo.carPage.pageIndex == 1) {
						alert("已经是第一页");
						return;
					} else {
						this.pageInfo.carPage.pageIndex = this.pageInfo.carPage.pageIndex + (-1);
						this.pageInfo.carPage.pageIndex = this.pageInfo.carPage.pageIndex + (-1);
						this.carByCid();
					}
				} else if (this.pageInfo.type == 2) {
					if (this.pageInfo.accPage.pageIndex == 1) {
						alert("已经是第一页");
						return;
					} else {
						this.pageInfo.accPage.pageIndex = this.pageInfo.accPage.pageIndex + (-1);
						this.AccByCid();
					}
				} else if (this.pageInfo.type == 3) {
					if (this.pageInfo.goodsPage.pageIndex == 1) {
						alert("已经是第一页");
						return;
					} else {
						this.pageInfo.goodsPage.pageIndex = this.pageInfo.goodsPage.pageIndex + (-1);
						this.GoodsByCid();
					}
				}
			},
			nextPage: function() {
				if (this.pageInfo.type == 1) {
					if (this.pageInfo.carPage.pageIndex == this.pageInfo.carPage.pageCount) {
						alert("已经是最后一页");
						return;
					} else {
						this.pageInfo.carPage.pageIndex = this.pageInfo.carPage.pageIndex + 1;
						this.carByCid();
					}
				} else if (this.pageInfo.type == 2) {
					if (this.pageInfo.accPage.pageIndex == this.pageInfo.accPage.pageCount) {
						alert("已经是最后一页");
						return;
					} else {
						this.pageInfo.accPage.pageIndex = this.pageInfo.accPage.pageIndex + 1;
						this.AccByCid();
					}
				} else if (this.pageInfo.type == 3) {
					if (this.pageInfo.goodsPage.pageIndex == this.pageInfo.goodsPage.pageCount) {
						alert("已经是最后一页");
						return;
					} else {
						this.pageInfo.goodsPage.pageIndex = this.pageInfo.goodsPage.pageIndex + 1;
						this.GoodsByCid();
					}
				}
			},
			InitTime: function() {
				//得到当前时间
				var date_now = new Date();
				//得到当前年份
				var year = date_now.getFullYear();
				//得到当前月份
				//注：
				//  1：js中获取Date中的month时，会比当前月份少一个月，所以这里需要先加一
				//  2: 判断当前月份是否小于10，如果小于，那么就在月份的前面加一个 '0' ， 如果大于，就显示当前月份
				var month = date_now.getMonth() + 1 < 10 ? "0" + (date_now.getMonth() + 1) : (date_now.getMonth() + 1);
				//得到当前日子（多少号）
				var date = date_now.getDate() < 10 ? "0" + date_now.getDate() : date_now.getDate();
				//设置input标签的max属性
				this.initTime = year + "-" + month + "-" + date;
			},
			getNum: function(sDate1, sDate2) { //sDate1和sDate2是2006-12-18格式 
				var dateSpan,
					tempDate,
					iDays;
				sDate1 = Date.parse(sDate1);
				sDate2 = Date.parse(sDate2);
				dateSpan = sDate2 - sDate1;
				dateSpan = Math.abs(dateSpan);
				iDays = Math.floor(dateSpan / (24 * 3600 * 1000));
				return iDays
			},
			createOrderType4:function(data){
				console.log("data.pid:"+data.id+"data.num:"+data.num
				+"data.startTime:"+data.startTime+"data.EndTime:"
				+data.EndTime);
				var orderParam = {
					pid : data.id,
					num : data.num,
					startTime : data.startTime,
					endTime : data.EndTime,
					type : 4,
					price: data.price,
					preprice :data.preprice
				};
				console.log("orderParam.pid:"+orderParam.pid+"orderParam.num:"+orderParam.num
				+"orderParam.startTime:"+orderParam.startTime+"orderParam.EndTime:"
				+orderParam.endTime+"orderParam.type:"+orderParam.type);
				if(this.orders!=null&&this.orders.length>0){
					console.log(999);
					for(var i = 0 ; i<this.orders.length ; i++){
						if(this.orders[i].pid == orderParam.pid && this.orders[i].type == orderParam.type){
							this.orders[i] = orderParam;
							this.initTotal();
							console.log(this.orders);
							return;
						}
					}
					this.orders.push(orderParam);
					this.initTotal();
				}else{
					console.log(1000);
					this.orders.push(orderParam);
					this.initTotal();
				}
				console.log(this.orders);
			},
			createOrderType5:function(data){
				console.log("data.pid:"+data.id+"data.num:"+data.num
				+"data.startTime:"+data.startTime+"data.EndTime:"
				+data.EndTime);
				var orderParam = {
					pid : data.id,
					num : data.num,
					startTime : data.startTime,
					endTime : data.EndTime,
					type : 5,
					price: data.price
				};
				console.log("orderParam.pid:"+orderParam.pid+"orderParam.num:"+orderParam.num
				+"orderParam.startTime:"+orderParam.startTime+"orderParam.EndTime:"
				+orderParam.endTime+"orderParam.type:"+orderParam.type);
				if(this.orders!=null&&this.orders.length>0){
					console.log(999);
					for(var i = 0 ; i<this.orders.length ; i++){
						if(this.orders[i].pid == orderParam.pid && this.orders[i].type == orderParam.type){
							this.orders[i] = orderParam;
							this.initTotal();
							console.log(this.orders);
							return;
						}
					}
					this.orders.push(orderParam);
					this.initTotal();
				}else{
					console.log(1000);
					this.orders.push(orderParam);
					this.initTotal();
				}
				console.log(this.orders);
			},
			createOrderType6:function(data){
				console.log("data.pid:"+data.id+"data.num:"+data.num
				+"data.startTime:"+data.startTime+"data.EndTime:"
				+data.EndTime);
				var orderParam = {
					pid : data.id,
					num : data.num,
					startTime : data.startTime,
					endTime : data.EndTime,
					type : 6,
					price: data.price
				};
				console.log("orderParam.pid:"+orderParam.pid+"orderParam.num:"+orderParam.num
				+"orderParam.startTime:"+orderParam.startTime+"orderParam.EndTime:"
				+orderParam.endTime+"orderParam.type:"+orderParam.type);
				if(this.orders!=null&&this.orders.length>0){
					console.log(999);
					for(var i = 0 ; i<this.orders.length ; i++){
						if(this.orders[i].pid == orderParam.pid && this.orders[i].type == orderParam.type){
							this.orders[i] = orderParam;
							this.initTotal();
							console.log(this.orders);
							return;
						}
					}
					this.orders.push(orderParam);
					this.initTotal();
				}else{
					console.log(1000);
					this.orders.push(orderParam);
					this.initTotal();
				}
				console.log(this.orders);
			},
			initTotal:function(){
				var initTotal = 0;
				if(this.orders!=null&&this.orders!="undefined"){
					for(var i=0;i<this.orders.length;i++){
						if(this.orders[i].type == 4){
							if(this.orders[i].num==0){
								initTotal +=0;
							}else{
								initTotal += this.orders[i].num * this.orders[i].price + this.orders[i].preprice;
							}
						}else{
							if(this.orders[i].num==0){
								initTotal +=0;
							}else{
								initTotal += this.orders[i].num * this.orders[i].price;
							}
						}
					}
				}
				this.orderTotal = initTotal;
			},
			createOrderAll:function(){
				var _this = this;
				var token = localStorage.getItem('token');
				console.log("Token:"+token);
				var orderParams = [];
				for(var i=0;i<_this.orders.length;i++){
					
				}
				axios.post('http://192.168.10.24:10001/order/upOrder',
				{	
						orderParams:_this.orders,
						totals:_this.orderTotal
				},{
					headers:{
						'X-Token':token,
						"Content-Type": "application/json;charset=utf-8" 
					}
				}).then(
					function(data){
						console.log(data);
					}
				)
			}

		},
		created: function() {
			this.campById();
			this.carByCid();
			this.AccByCid();
			this.GoodsByCid();
			this.InitTime();
		},
		watch: {
			Goods: {
				//深度监听 监听对象中属性的变化以及集合中对象的变化
				handler: function(n, o) {
					if (n != null) {
						console.log(3333);
						for (var i = 0; i < n.length; i++) {
							console.log(i + "  startTime:" + n[i].startTime);
							console.log(i + "  EndTime:" + n[i].EndTime);
							if ((n[i].startTime == null || n[i].startTime == "undefined") && n[i].EndTime != null) {
								alert("请先选择入住时间！");
								n[i].EndTime = null;
								return;
							} else
							if ((n[i].startTime != null && n[i].startTime != "undefined") && n[i].EndTime != null) {
								n[i].num = this.getNum(n[i].startTime, n[i].EndTime);
								n[i].total = n[i].num * n[i].price;
								console.log(i + "  :num:" + n[i].num);
								console.log(i + "  :total:" + n[i].total);
							}
						}
					}

				},
				deep: true
			},
			Car: {
				//深度监听 监听对象中属性的变化以及集合中对象的变化
				handler: function(n, o) {
					if (n != null) {
						console.log(1111);
						if(o!=null){
							console.log("nnnn:"+n);
							console.log("oooo:"+o);
						}
						for (var i = 0; i < n.length; i++) {
							console.log(i + "  startTime:" + n[i].startTime);
							console.log(i + "  EndTime:" + n[i].EndTime);
							if ((n[i].startTime == null || n[i].startTime == "undefined") && n[i].EndTime != null) {
								alert("请先选择入住时间！");
								n[i].EndTime = null;
								return;
							} else
							if ((n[i].startTime != null && n[i].startTime != "undefined") && n[i].EndTime != null) {
								n[i].num = this.getNum(n[i].startTime, n[i].EndTime);
								if(n[i].num!=0){
									n[i].total = n[i].num * n[i].price + n[i].preprice;
								}else{
									n[i].total=0;
								}
								console.log(i + "  :num:" + n[i].num);
								console.log(i + "  :total:" + n[i].total);
							}
						}
					}

				},
				deep: true
			},
			Acc: {
				//深度监听 监听对象中属性的变化以及集合中对象的变化
				handler: function(n, o) {
					var _this = this;
					if (n != null) {
						console.log(2222);
						for (var i = 0; i < n.length; i++) {
							console.log(i + "  startTime:" + n[i].startTime);
							console.log(i + "  EndTime:" + n[i].EndTime);
							if ((n[i].startTime == null || n[i].startTime == "undefined") && n[i].EndTime != null) {
								alert("请先选择入住时间！");
								n[i].EndTime = null;
								return;
							} else
							if ((n[i].startTime != null && n[i].startTime != "undefined") && n[i].EndTime != null) {
								n[i].num = this.getNum(n[i].startTime, n[i].EndTime);
								n[i].total = n[i].num * n[i].price;
								console.log(i + "  :num:" + n[i].num);
								console.log(i + "  :total:" + n[i].total);
							}
						}
					}

				},
				deep: true
			},
					
		}

	}
</script>

<style>
	.detail-main {
		width: 100%;
		height: 100%;
	}

	.detail-img {
		width: 30%;
		height: 300px;
		float: left;
	}

	.detail-td-img {
		width: 200px;
		height: 200px;
		float: left;
	}

	.detail-text {
		text-align: left;
		display: block;
	}
	
	.detail-font{
		font-size: 25px;
		font-weight: 800;
	}
	
	.detail-font-red{
		font-size: 25px;
		font-weight: 800;
		color: red;
	}
	
	.price{}
	
	.detail-li {
		margin-left: 30px;
	}
</style>
