<style scoped></style>

<template>
	<ul class="card">
		<li class="card_item shadow">
			<div class="card_item_pic">
				<img src="./images/map/map1.png" alt />
			</div>
			<div class="card_item_txt">
				<h3 class="title">全國素食-大安復興店</h3>
				<h4 class="address msgL" data-msg-l="地址：">台北市大 安區復興南路二段314號</h4>
				<h4 class="time msgL" data-msg-l="營業時間：">每日早上10：30～13：50，下午16：30～20：00</h4>
				<h4 class="phone msgL" data-msg-l="電話：">02-27361168</h4>
				<ul class="sort">
					<li class="sort_item">全素</li>
					<li class="sort_item">蛋素</li>
					<li class="sort_item">奶素</li>
				</ul>
				<button class="normal_btn">查看地圖</button>
				<i class="icon_collect" v-html="icon_all.collect"></i>
			</div>
		</li>
		<li class="card_item shadow">
			<div class="card_item_pic">
				<img src="./images/map/map1.png" alt />
			</div>
			<div class="card_item_txt">
				<h3 class="title">全國素食-大安復興店</h3>
				<h4 class="address msgL" data-msg-l="地址：">台北市大 安區復興南路二段314號</h4>
				<h4 class="time msgL" data-msg-l="營業時間：">每日早上10：30～13：50，下午16：30～20：00</h4>
				<h4 class="phone msgL" data-msg-l="電話：">02-27361168</h4>
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
	components: {},
	mounted() {},
	computed: {},
	methods: {}
};
</script>
