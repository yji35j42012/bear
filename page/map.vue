<style scoped></style>

<template>
	<div class="container">
		<div class="content_head">
			<h1 class="content_title">素食地圖</h1>
			<div class="content_pic">
				<img src="./images/map/map_title.png" alt />
			</div>
		</div>
		<div class="func">
			<label class="normal_sel" data-txt="Step1">
				<span class="normal_sel_txt">選擇課程日期</span>
				<ul class="normal_sel_group">
					<li class="normal_sel_item"></li>
				</ul>
			</label>
			<label class="normal_sel" data-txt="Step2">
				<span class="normal_sel_txt">選擇課程日期</span>
				<ul class="normal_sel_group">
					<li class="normal_sel_item"></li>
				</ul>
			</label>
			<label class="normal_sel" data-txt="Step3">
				<span class="normal_sel_txt">選擇課程日期</span>
				<ul class="normal_sel_group">
					<li class="normal_sel_item"></li>
				</ul>
			</label>
		</div>
		<card :card_obj="mapData"></card>
		<ul class="page">
			<li class="page_prev"></li>
			<li class="page_item">1</li>
			<li class="page_item">2</li>
			<li class="page_item">3</li>
			<li class="page_next"></li>
		</ul>
	</div>
</template>

<script>
module.exports = {
	data() {
		return {
			icon_all: icon_all,
			mapData: [
				{
					title: "全國素食-大安復興店",
					address: "台北市大 安區復興南路二段314號",
					time: "每日早上10：30～13：50，下午16：30～20：00",
					phone: "02-27361168"
				}
			]
		};
	},
	components: {
		card: httpVueLoader("../components/Card.vue")
	},
	mounted() {},
	computed: {},
	methods: {}
};
</script>
