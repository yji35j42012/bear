<style scoped></style>

<template>
	<router-view></router-view>
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
	methods: {
		course_more() {
			this.$router.push(this.$route.fullPath + "/123");
		}
	}
};
</script>
