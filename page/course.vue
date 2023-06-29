<style scoped></style>

<template>
	<div class="container">
		<div class="content_head">
			<h1 class="content_title">廚藝教室</h1>
			<div class="content_pic">
				<img src="./images/course/course_title.png" alt />
			</div>
		</div>
		<div class="course_box">
			<ul class="course_card">
				<li class="course_card_item shadow">
					<div class="course_card_pic">
						<img src="../images/course/course_pic1.png" />
					</div>
					<div class="course_card_txt">
						<div class="title">地瓜餅 (奶素)</div>
						<div
							class="detail"
						>超級食物「地瓜」含有豐富的膳食纖維、β-胡蘿蔔素、鎂、鉀等營養素。是世界衛生組織評選出來「十大最佳蔬菜」的冠軍，地瓜含有脫氫表雄酮，可以預防乳腺癌和結腸癌，地瓜屬於抗性澱粉，不易在小腸吸收利用，高纖、低GI，因此非常適合減重朋友食用，製作成地瓜餅當早餐或點心都很適合，老少咸宜喔!</div>
						<div class="price" data-price="1,200">課程價格</div>
						<div class="time" data-time="開課時間">
							10月21日(五) 19:00-21:00
							<br />11月18日(五) 19:00-21:00
						</div>
						<button class="normal_btn">了解更多</button>
						<i class="icon_collect" v-html="icon_all.collect"></i>
					</div>
				</li>
				<li class="course_card_item shadow">
					<div class="course_card_pic">
						<img src="../images/course/course_pic1.png" />
					</div>
					<div class="course_card_txt">
						<div class="title">地瓜餅 (奶素)</div>
						<div
							class="detail"
						>超級食物「地瓜」含有豐富的膳食纖維、β-胡蘿蔔素、鎂、鉀等營養素。是世界衛生組織評選出來「十大最佳蔬菜」的冠軍，地瓜含有脫氫表雄酮，可以預防乳腺癌和結腸癌，地瓜屬於抗性澱粉，不易在小腸吸收利用，高纖、低GI，因此非常適合減重朋友食用，製作成地瓜餅當早餐或點心都很適合，老少咸宜喔!</div>
						<div class="price" data-price="1,200">課程價格</div>
						<div class="time" data-time="開課時間">
							10月21日(五) 19:00-21:00
							<br />11月18日(五) 19:00-21:00
						</div>
						<button class="normal_btn">了解更多</button>
						<i class="icon_collect" v-html="icon_all.collect"></i>
					</div>
				</li>
			</ul>
			<div class="course_func shadow">
				<div class="course_func_title">條件篩選</div>
				<label class="normal_sel">
					<span class="normal_sel_txt">推薦排序</span>
					<ul class="normal_sel_group">
						<li class="normal_sel_item"></li>
					</ul>
				</label>
				<label class="normal_sel">
					<span class="normal_sel_txt">選擇課程日期</span>
					<ul class="normal_sel_group">
						<li class="normal_sel_item"></li>
					</ul>
				</label>
				<div class="course_func_sort">素食分類</div>
				<label class="normal_check">
					<input type="checkbox" />
					<span class="normal_check_box"></span>
					全素
				</label>
				<label class="normal_check">
					<input type="checkbox" />
					<span class="normal_check_box"></span>
					蛋素
				</label>
				<label class="normal_check">
					<input type="checkbox" />
					<span class="normal_check_box"></span>
					五辛素
				</label>
				<label class="normal_check">
					<input type="checkbox" />
					<span class="normal_check_box"></span>
					奶素
				</label>
				<label class="normal_check">
					<input type="checkbox" />
					<span class="normal_check_box"></span>
					蛋奶素
				</label>
				<div class="course_func_sort">價格</div>
				<label class="normal_check">
					<input type="checkbox" />
					<span class="normal_check_box"></span>
					$800 以下
				</label>
				<label class="normal_check">
					<input type="checkbox" />
					<span class="normal_check_box"></span>
					$800 ~ $1500
				</label>
				<label class="normal_check">
					<input type="checkbox" />
					<span class="normal_check_box"></span>
					$1500 以上
				</label>
			</div>
		</div>
		<div class="func" style="display:none">
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
			icon_all: icon_all
		};
	},
	components: {},
	mounted() {},
	computed: {},
	methods: {}
};
</script>
