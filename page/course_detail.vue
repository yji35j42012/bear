<style scoped></style>

<template>
	<div class="container">
		<div class="course_box _detail">
			<div class="course_detail shadow">
				<div class="course_detail_pic">
					<img src="../images/course/course_detail1_1.png" alt />
				</div>
				<h3 class="course_detail_txt">
					超級食物「地瓜」含有豐富的膳食纖維、β-胡蘿蔔素、鎂、鉀等營養素。
					是世界衛生組織評選出來「十大最佳蔬菜」的冠軍，地瓜含有脫氫表雄酮，
					可以預防乳腺癌和結腸癌，地瓜屬於抗性澱粉，不易在小腸吸收利用，高纖、低GI，
					因此非常適合減重朋友食用，製作成地瓜餅當早餐或點心都很適合，老少咸宜喔!
				</h3>
				<div class="course_detail_pic _half">
					<img src="../images/course/course_detail1_1.png" alt />
				</div>
				<div class="course_detail_pic _half">
					<img src="../images/course/course_detail1_1.png" alt />
				</div>
				<h3 class="course_detail_txt">
					注意事項:
					<br>1.因教室空間有限，並有爐火、刀具等需謹慎操作之用品，為安全起見，僅開放給報名學員進場。
					<br>2.參與本活動時，視同同意公開展示本人之肖像，得使用於本活動之相關網路社群貼文使用。”熊齋”有權保存該照片、資料或影片作為系統資料存檔，僅作為內部結案與簡報使用。
					<br>3.參與本活動時，視為同意接受本活動所有內容及細則之規範；倘有違反本活動相關注意規範，並對於任何破壞本活動之行為保留法律追訴權。
					<br>4.本活動主辦單位保留擴大、修改、取消、終止本活動以及更改活動內容的權利，無法做出個別通知或解釋，僅於合理時間內盡速公布相關訊息於本活動網站，活動參加者需接受上列之規定，方可參加此活動，其他未盡事宜悉依主辦單位相關規定或解釋，並得隨時補充公告於活動網站
					<br><br>開課日前八天取消 ► 可全額退費或保留費用六十天內使用（自完成訂單日起計）。
					開課日前七天至前四天內取消 ► 退還當次課程報名費用之80%，且就”熊齋”原先為準備課程所需食材之購買費用，因取消而產生食材浪費，故尚需另外收取課程原價30%食材購買費用，並於退費時一併扣除。
					開課日前三天至課程當日取消 ► 恕不接受退費或保留費用。
					<br><br>例： 8/8（週六）的課程，最晚於7/31（週五）可全額退費或保留費用。
					8/8（週六）的課程，8/1（週六）的18:00前來電告知取消，退還當次課程報名費用之80%，並另收取課程原價30%食材購買費用。
					8/8（週六）的課程，若於8/5（週三）的18:00來電或來信告知欲取消，恕不接受退費或保留費用。
					<br><br>* 若因學員個人因素取消課程，退費部分之跨行手續費需由學員自行負擔。
					<br>* 若”熊齋”因不可抗力之因素取消課程，將全額退費或保留費用（自完成訂單日起計六十天內使用），跨行手續費將由窩廚房負擔。
				</h3>
			</div>
			<div class="course_func _detail shadow">
				<div class="course_func_title">地瓜餅 (奶素)</div>
				<div class="course_func_pic">
					<img src="../images/course/course_detail1.png" alt />
				</div>
				<label class="normal_sel">
					<span class="normal_sel_txt">選擇課程日期</span>
					<ul class="normal_sel_group">
						<li class="normal_sel_item"></li>
					</ul>
				</label>
				<div class="course_func_num _people" data-txt="10">剩餘人數</div>
				<div class="course_func_num _price" data-txt="1,200">課程價格</div>
				<button class="normal_btn">加入購物車</button>
			</div>
		</div>
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
	mounted() {
		console.log(this.$route.params.detailId);
	},
	computed: {},
	methods: {}
};
</script>
