<template>
	<design-layout>
		<div class="page-content">
			<div class="container-fluid">
				<!-- start page title -->
				<div class="row">
					<div class="col-12">
						<div
							class="page-title-box d-sm-flex align-items-center justify-content-between"
						>
							<h4 class="mb-sm-0 font-size-18">Appointment Logs.</h4>
						</div>
					</div>
				</div>
				<!-- end page title -->
				<div class="row">
					<div class="col-md-5">
						<appointment-log :onEdit="terminalInfo"></appointment-log>
					</div>
					<div class="col-md-7">
						<appointment-preview
							@editTerminal="updateTerminalInfo"
							class="m-0"
						></appointment-preview>
					</div>
				</div>
				<section>
					<!-- <modal>
						<template #modalHeader> Ref ID </template>
						<h3>Use this modal, when the doctor certify completion</h3>
						<template #modalFooter>
							<p>create a button to close the modal state</p>
						</template>
					</modal> -->
					<!-- <textarea
						class="form-control form-control-lg"
						style="poisition: fixed"
						placeholder="Doctor's Note"
					></textarea> -->
				</section>
			</div>
		</div>
	</design-layout>
</template>

<script>
import AppointmentForm from "./AppointmentLog.vue";
import AppointmentPreview from "./AppointmentPreview";
export default {
	components: {
		"appointment-log": AppointmentForm,
		"appointment-preview": AppointmentPreview,
	},
	data() {
		return {
			terminalInfo: {},
			userType: this.$store.state.user.userType,
			dailyCapacityModal: false,
			emptyCapacityModal: false,
		};
	},
	computed: {
		showModal() {
			return this.$store.state.displayModal;
		},
	},
	methods: {
		displayDailyCapacity() {
			console.log("Got Here");
		},
		displayEmptyCapacity() {
			console.log("Got here");
		},
		updateTerminalInfo(value) {
			console.log(value);
		},
	},
};
</script>

<style scoped>
.hover:hover {
	text-decoration: underline;
	cursor: pointer;
}
</style>

