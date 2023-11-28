<template>
	<div class="chat-messages">
		<!-- Messages will go here -->
		<PatientChatItem
			v-for="(chatItem, index) in currentChats.logs"
			:key="chatItem.timestamp"
			:user="chatItem.userAsked"
			:bot="chatItem.botResponse"
			:length="currentChats.logs.length"
			:counter="index + 1"
		/>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PatientChatItem from "./PatientChatItem.vue";
export default {
	computed: {
		...mapGetters({
			currentChats: "getCurrentChats",
		}),
	},
	components: {
		PatientChatItem,
	},
	methods: {
		...mapActions({
			previewSelectedChat: "previewSelectedChat",
		}),
	},

	watch: {
		async "$route.params.chatId"(newChatId, oldChatId) {
			if (newChatId !== oldChatId) {
				await this.previewSelectedChat(this.$route.params);
			}
		},
	},

	beforeCreate() {
		if (localStorage.getItem("currentChat")) {
			return this.currentChats;
		}
	},

	async beforeMount() {
		const { chatId, timestamp } = this.$route.params;
		if (!chatId) return;
		await this.previewSelectedChat({ chatId, timestamp });
	},
};
</script>


<style scoped>
.chat-messages {
	padding: 10px;
	overflow-y: auto;
	max-height: calc(
		100vh - 60px
	); /* Adjusted to leave space for the input box */
}
</style>