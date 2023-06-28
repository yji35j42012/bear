<style scoped></style>

<template>
	<ul class="card">
		<li class="card_item shadow" v-for="(item , index) in card_obj" :key="index">
			<div class="card_item_pic">
				<img src="./images/map/map1.png" alt />
			</div>
			<div class="card_item_txt">
				<h3 class="title">{{item.title}}</h3>
				<h4 class="address msgL" data-msg-l="地址：">{{item.address}}</h4>
				<h4 class="time msgL" data-msg-l="營業時間：">{{item.time}}</h4>
				<h4 class="phone msgL" data-msg-l="電話：">{{item.phone}}</h4>
				<ul class="sort">
					<li class="sort_item">全素</li>
					<li class="sort_item">蛋素</li>
					<li class="sort_item">奶素</li>
				</ul>
				<button class="normal_btn">查看地圖</button>
				<i class="icon_collect" v-html="icon_all.collect"></i>
			</div>
		</li>
	</ul>
</template>

<script>
module.exports = {
	data() {
		return {
			icon_all: icon_all
		};
	},
	props: ["card_obj"],
	components: {},
	mounted() {},
	computed: {},
	methods: {}
};
</script>
