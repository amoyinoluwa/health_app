<template>
	<div class="card">
		<div class="chat-leftsidebar me-lg-4">
			<div class="">
				<div class="chat-leftsidebar-nav">
					<div class="tab-content py-2">
						<div class="tab-pane show active" id="chat" role="tabpanel">
							<div>
								<ul
									class="list-unstyled chat-list"
									data-simplebar="init"
									style="height: 550px"
								>
									<div class="simplebar-wrapper" style="margin: 0px">
										<div class="simplebar-height-auto-observer-wrapper">
											<div class="simplebar-height-auto-observer"></div>
										</div>
										<div class="simplebar-mask">
											<div
												class="simplebar-offset"
												style="right: -20px; bottom: 0px"
											>
												<div
													class="simplebar-content-wrapper"
													style="
														height: auto;
														padding-right: 20px;
														padding-bottom: 0px;
														overflow: hidden scroll;
													"
												>
													<div class="simplebar-content" style="padding: 0px">
														<li v-for="count in 5" :key="count">
															<a href="javascript: void(0);">
																<div class="d-flex">
																	<div
																		class="flex-shrink-0 align-self-center me-3"
																	>
																		<i
																			class="mdi mdi-circle text-success font-size-10"
																		></i>
																	</div>
																	<div class="avatar-xs align-self-center me-3">
																		<span
																			class="avatar-title rounded-circle bg-primary bg-soft text-primary"
																		>
																			K
																		</span>
																	</div>
																	<div class="flex-grow-1 overflow-hidden">
																		<h5 class="text-truncate font-size-14 mb-1">
																			Olushola O
																		</h5>
																		<p class="text-truncate mb-0">
																			What are the symptoms of a Flu?...
																		</p>
																	</div>
																	<div class="font-size-11">
																		24 min ago <br />
																		<span class="text-truncate mb-0">
																			<i
																				class="bx bx-check-shield bx-sm text-success pe-2"
																			></i>
																			<i
																				class="bx bx-video bx-sm text-primary"
																			></i>
																		</span>
																	</div>
																</div>
															</a>
														</li>
													</div>
												</div>
											</div>
										</div>
										<div
											class="simplebar-placeholder"
											style="width: auto; height: 485px"
										></div>
									</div>
									<div
										class="simplebar-track simplebar-horizontal"
										style="visibility: hidden"
									>
										<div
											class="simplebar-scrollbar"
											style="
												transform: translate3d(0px, 0px, 0px);
												display: none;
											"
										></div>
									</div>
									<div
										class="simplebar-track simplebar-vertical"
										style="visibility: visible"
									>
										<div
											class="simplebar-scrollbar"
											style="
												height: 361px;
												transform: translate3d(0px, 0px, 0px);
												display: block;
											"
										></div>
									</div>
								</ul>
							</div>
						</div>

						<div class="tab-pane" id="groups" role="tabpanel">
							<h5 class="font-size-14 mb-3">Groups</h5>
							<ul
								class="list-unstyled chat-list"
								data-simplebar="init"
								style="max-height: 410px"
							>
								<div class="simplebar-wrapper" style="margin: 0px">
									<div class="simplebar-height-auto-observer-wrapper">
										<div class="simplebar-height-auto-observer"></div>
									</div>
									<div class="simplebar-mask">
										<div
											class="simplebar-offset"
											style="right: 0px; bottom: 0px"
										>
											<div
												class="simplebar-content-wrapper"
												style="
													height: auto;
													padding-right: 0px;
													padding-bottom: 0px;
													overflow: hidden;
												"
											>
												<div class="simplebar-content" style="padding: 0px">
													<li>
														<a href="javascript: void(0);">
															<div class="d-flex align-items-center">
																<div class="flex-shrink-0 me-3">
																	<div class="avatar-xs">
																		<span
																			class="avatar-title rounded-circle bg-primary bg-soft text-primary"
																		>
																			G
																		</span>
																	</div>
																</div>

																<div class="flex-grow-1">
																	<h5 class="font-size-14 mb-0">General</h5>
																</div>
															</div>
														</a>
													</li>

													<li>
														<a href="javascript: void(0);">
															<div class="d-flex align-items-center">
																<div class="flex-shrink-0 me-3">
																	<div class="avatar-xs">
																		<span
																			class="avatar-title rounded-circle bg-primary bg-soft text-primary"
																		>
																			R
																		</span>
																	</div>
																</div>

																<div class="flex-grow-1">
																	<h5 class="font-size-14 mb-0">Reporting</h5>
																</div>
															</div>
														</a>
													</li>

													<li>
														<a href="javascript: void(0);">
															<div class="d-flex align-items-center">
																<div class="flex-shrink-0 me-3">
																	<div class="avatar-xs">
																		<span
																			class="avatar-title rounded-circle bg-primary bg-soft text-primary"
																		>
																			M
																		</span>
																	</div>
																</div>

																<div class="flex-grow-1">
																	<h5 class="font-size-14 mb-0">Meeting</h5>
																</div>
															</div>
														</a>
													</li>

													<li>
														<a href="javascript: void(0);">
															<div class="d-flex align-items-center">
																<div class="flex-shrink-0 me-3">
																	<div class="avatar-xs">
																		<span
																			class="avatar-title rounded-circle bg-primary bg-soft text-primary"
																		>
																			A
																		</span>
																	</div>
																</div>

																<div class="flex-grow-1">
																	<h5 class="font-size-14 mb-0">Project A</h5>
																</div>
															</div>
														</a>
													</li>

													<li>
														<a href="javascript: void(0);">
															<div class="d-flex align-items-center">
																<div class="flex-shrink-0 me-3">
																	<div class="avatar-xs">
																		<span
																			class="avatar-title rounded-circle bg-primary bg-soft text-primary"
																		>
																			B
																		</span>
																	</div>
																</div>

																<div class="flex-grow-1">
																	<h5 class="font-size-14 mb-0">Project B</h5>
																</div>
															</div>
														</a>
													</li>
												</div>
											</div>
										</div>
									</div>
									<div
										class="simplebar-placeholder"
										style="width: 0px; height: 0px"
									></div>
								</div>
								<div
									class="simplebar-track simplebar-horizontal"
									style="visibility: hidden"
								>
									<div
										class="simplebar-scrollbar"
										style="transform: translate3d(0px, 0px, 0px); display: none"
									></div>
								</div>
								<div
									class="simplebar-track simplebar-vertical"
									style="visibility: hidden"
								>
									<div
										class="simplebar-scrollbar"
										style="transform: translate3d(0px, 0px, 0px); display: none"
									></div>
								</div>
							</ul>
						</div>

						<div class="tab-pane" id="contacts" role="tabpanel">
							<h5 class="font-size-14 mb-3">Contacts</h5>

							<div data-simplebar="init" style="max-height: 410px">
								<div class="simplebar-wrapper" style="margin: 0px">
									<div class="simplebar-height-auto-observer-wrapper">
										<div class="simplebar-height-auto-observer"></div>
									</div>
									<div class="simplebar-mask">
										<div
											class="simplebar-offset"
											style="right: 0px; bottom: 0px"
										>
											<div
												class="simplebar-content-wrapper"
												style="
													height: auto;
													padding-right: 0px;
													padding-bottom: 0px;
													overflow: hidden;
												"
											>
												<div class="simplebar-content" style="padding: 0px">
													<div>
														<div class="avatar-xs mb-3">
															<span
																class="avatar-title rounded-circle bg-primary bg-soft text-primary"
															>
																A
															</span>
														</div>

														<ul class="list-unstyled chat-list">
															<li>
																<a href="javascript: void(0);">
																	<h5 class="font-size-14 mb-0">Adam Miller</h5>
																</a>
															</li>

															<li>
																<a href="javascript: void(0);">
																	<h5 class="font-size-14 mb-0">
																		Alfonso Fisher
																	</h5>
																</a>
															</li>
														</ul>
													</div>

													<div class="mt-4">
														<div class="avatar-xs mb-3">
															<span
																class="avatar-title rounded-circle bg-primary bg-soft text-primary"
															>
																B
															</span>
														</div>

														<ul class="list-unstyled chat-list">
															<li>
																<a href="javascript: void(0);">
																	<h5 class="font-size-14 mb-0">
																		Bonnie Harney
																	</h5>
																</a>
															</li>
														</ul>
													</div>

													<div class="mt-4">
														<div class="avatar-xs mb-3">
															<span
																class="avatar-title rounded-circle bg-primary bg-soft text-primary"
															>
																C
															</span>
														</div>

														<ul class="list-unstyled chat-list">
															<li>
																<a href="javascript: void(0);">
																	<h5 class="font-size-14 mb-0">
																		Charles Brown
																	</h5>
																</a>
																<a href="javascript: void(0);">
																	<h5 class="font-size-14 mb-0">
																		Carmella Jones
																	</h5>
																</a>
																<a href="javascript: void(0);">
																	<h5 class="font-size-14 mb-0">
																		Carrie Williams
																	</h5>
																</a>
															</li>
														</ul>
													</div>

													<div class="mt-4">
														<div class="avatar-xs mb-3">
															<span
																class="avatar-title rounded-circle bg-primary bg-soft text-primary"
															>
																D
															</span>
														</div>

														<ul class="list-unstyled chat-list">
															<li>
																<a href="javascript: void(0);">
																	<h5 class="font-size-14 mb-0">
																		Dolores Minter
																	</h5>
																</a>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div
										class="simplebar-placeholder"
										style="width: 0px; height: 0px"
									></div>
								</div>
								<div
									class="simplebar-track simplebar-horizontal"
									style="visibility: hidden"
								>
									<div
										class="simplebar-scrollbar"
										style="transform: translate3d(0px, 0px, 0px); display: none"
									></div>
								</div>
								<div
									class="simplebar-track simplebar-vertical"
									style="visibility: hidden"
								>
									<div
										class="simplebar-scrollbar"
										style="transform: translate3d(0px, 0px, 0px); display: none"
									></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- end card -->
</template>

<script>
import { mapGetters } from "vuex";
export default {
	data() {
		return {
			sampleRecords: [
				{
					id: 1,
					refid: "9012****09281",
					date: "2023-09-01",
					username: "Benjamin Franklyin",
				},
				{
					id: 2,
					refid: "9012****09282",
					date: "2023-09-02",
					username: "Grant Max",
				},
				{
					id: 3,
					refid: "9012****0923",
					date: "2023-09-03",
					username: "Yousuf Bonsour",
				},
				{
					id: 4,
					refid: "9012****0924",
					date: "2023-09-04",
					username: "Angelina Jolie",
				},
				{
					id: 5,
					refid: "9012****09211",
					date: "2023-09-05",
					username: "Alphonso Davies",
				},
				{
					id: 6,
					refid: "9012****0925",
					date: "2023-09-06",
					username: "Bill Edward",
				},
				{
					id: 7,
					refid: "9012****0926",
					date: "2023-09-07",
					username: "Jack Ma",
				},
				{
					id: 8,
					refid: "9012****0927",
					date: "2023-09-08",
					username: "Samuel Adeniyi",
				},
				{
					id: 9,
					refid: "9012****0928",
					date: "2023-09-09",
					username: "Leonard Trossard",
				},
				{
					id: 10,
					refid: "9012****0929",
					date: "2023-09-10",
					username: "Hashim Bilal",
				},
				{
					id: 11,
					refid: "9012****09210",
					date: "2023-09-11",
					username: "Noushin Tahir",
				},
			],
		};
	},
	props: {
		onEdit: {
			require: true,
			type: Object,
		},
	},
	// data: () => {
	// 	return {
	// 		serverResponse: "",
	// 		formData: {
	// 			contact: {
	// 				phoneNos: [],
	// 			},
	// 		},
	// 		statusCode: null,
	// 	};
	// },
	watch: {
		onEdit(value) {
			this.formData = value;
		},
	},
	computed: {
		...mapGetters({
			isLoading: "getFetchResource",
			terminal: "getTerminal",
			ports: "getPorts",
		}),
	},
	methods: {
		async addTerminal() {
			const setupTerminal = await this.$store.dispatch(
				"addTerminal",
				this.formData
			);
			this.statusCode = setupTerminal.status;
			this.clearForm();
		},
		async updateTerminal() {
			const updateTerminal = await this.$store.dispatch(
				"updateTerminal",
				this.formData
			);
			this.statusCode = updateTerminal.status;
			//this.clearForm();
		},
		addPhoneNo(e) {
			const check = this.formData.contact.phoneNos.findIndex(
				(phoneNo) => phoneNo === e.target.value
			);
			if (check < 0) {
				this.formData.contact.phoneNos.push(e.target.value);
			}
			e.target.value = "";
		},
		removePhoneNo(target) {
			this.formData.contact.phoneNos.splice(target, 1);
		},
		removeStatus() {
			this.statusCode = null;
		},
		clearForm() {
			this.formData = {
				contact: {
					phoneNos: [],
				},
			};
		},
	},
	async mounted() {
		await this.$store.dispatch("fetchPorts");
	},
};
</script>

<style scoped>
input,
div {
	border-radius: 0;
}
#phoneNo input {
	border: none;
	outline: none;
	width: auto;
}
</style>