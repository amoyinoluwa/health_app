<template>
	<div>
		<section class="container default_logo_holder">
			<h4>Welcome to HealthConnectPro! How can I be of help?</h4>
		</section>

		<section class="container">
			<div class="row">
				<div class="col-md-5 default_chat">
					<p>How can I manage stress with a busy schedule?</p>
					<span>for my work life balance</span>
				</div>

				<div class="col-md-5 default_chat">
					<p>What's a good sleep routine?</p>
					<span>to help my physical posture</span>
				</div>

				<div class="col-md-5 default_chat">
					<p>Suggest simple exercises for improving physique</p>
					<span>you can help with different means</span>
				</div>
				<div class="col-md-5 default_chat">
					<p>What are healthy snacks to boost energy?</p>
					<span>fast, quick and healthy meal for busy day</span>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
};
</script>

<style scoped>
.default_logo_holder {
	position: relative;
	height: 300px;
	font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande";
	display: flex;
	align-items: center;
	justify-content: center;
}

.default_chat {
	background: #f1f1f1;
	border-radius: 8px;
	cursor: pointer;
	margin: 5px 20px;
	padding: 10px;
}

.default_chat > p {
	padding: 0;
	margin: 12px 0px auto 0px;
	font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
		"Lucida Sans", Arial, sans-serif;
	color: #333;
	font-size: 14px;
}

.default_chat > span {
	padding: 0;
	margin: 12px 0px auto 0px;
	font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
		"Lucida Sans", Arial, sans-serif;
	color: #333;
	font-size: 11px;
}
</style>