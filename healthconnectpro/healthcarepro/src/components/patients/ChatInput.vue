<template>
	<div class="chatInput">
		<input
			type="text"
			placeholder="Message HealthConnectPro..."
			v-model="chat"
			ref="chatInput"
			@keydown.enter="messageHealthCarePro"
		/>
		<span class="bx bx-stop-circle"></span>
	</div>
</template>

<script>
export default {
	data() {
		return {
			chat: "",
			status: "",
		};
	},
	methods: {
		async messageHealthCarePro() {
			if (!this.chat) {
				return;
			}

			if (!localStorage.getItem("isChatting")) {
				this.status = "save";
			} else {
				this.status = "update";
			}

			this.$store.state.Patient.isChatting = true;
			localStorage.setItem("isChatting", true);

			const sendRequest = await this.$store.dispatch("askHealthCarePro", {
				chat: this.chat,
				status: this.status,
			});
			console.log(sendRequest);
			this.chat = "";
		},
	},

	beforeMount() {
		this.$store.state.Patient.isChatting =
			localStorage.getItem("isChatting") || false;
	},

	mounted() {
		this.$refs.chatInput.focus();
	},
};
</script>

<style scoped>
.chatInput {
	position: fixed;
	width: 50%;
	display: flex;
	align-items: center;
	padding: 10px;
	margin: 10px 200px;
}

.chatInput input {
	flex: 1;
	padding: 8px;
	border: 1px solid #ccc;
	border-radius: 8px;
	outline: none;
}

@media screen and (max-width: 600px) {
	.chatInput {
		width: 100%;
		border-radius: 0;
		margin: auto;
	}
	.chatInput textarea {
		margin: 10px;
	}
}
</style>

