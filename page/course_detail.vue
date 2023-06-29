<style scoped></style>

<template>
	<div class="container">detialsdfasd</div>
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
	methods: {
		course_more() {
			console.log(this.$route.fullPath + "/123");
			this.$router.push(this.$route.fullPath + "/123");
		}
	}
};
</script>
