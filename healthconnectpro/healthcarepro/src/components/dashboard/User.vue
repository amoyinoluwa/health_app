<template>
	<section>
		<div class="chat-container">
			<div class="schedule-appointment">
				<p>&nbsp;</p>
				<button class="btn btn-success" @click="scheduleAppointment">
					<i class="bx bx-calendar"></i> Schedule an Appointment
				</button>
			</div>
			<PatientChats v-if="isChatting" />
			<NewChatPlaceholder v-else />
		</div>

		<ChatInput />
	</section>
	<BookAppointment v-if="showAppointMentModal" />
</template>

<script>
import BookAppointment from "../patients/BookAppointment.vue";
import PatientChats from "../patients/PatientChats.vue";
import NewChatPlaceholder from "../patients/NewChatPlaceholder.vue";
import ChatInput from "../patients/ChatInput.vue";
import { mapGetters } from "vuex";
export default {
	data() {
		return {};
	},

	computed: {
		showAppointMentModal() {
			return this.$store.state.showUserAppointmentModal;
		},
		results() {
			return this.$store.state;
		},

		...mapGetters({
			isChatting: "getChattingStatus",
		}),
	},

	methods: {
		scheduleAppointment() {
			this.$store.state.selectedHoldingBay = "Sola";
			this.$store.state.showUserAppointmentModal = true;
		},
	},
	components: {
		BookAppointment,
		PatientChats,
		NewChatPlaceholder,
		ChatInput,
	},
};
</script>

<style>
.chat-container {
	max-width: 800px;
	margin: 20px auto;
	overflow: hidden;
	position: relative;
	height: 70vh;
	z-index: 1000;
}

.schedule-appointment {
	display: flex;
	justify-content: space-between;
	padding: auto;
	margin: auto 60px;
}

/* Responsive Styles */
@media screen and (max-width: 600px) {
	.chat-container {
		width: 100%;
		border-radius: 0;
	}
}
</style>

