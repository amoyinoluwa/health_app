<template>
	<body data-sidebar="dark">
		<!-- Begin page -->
		<div id="layout-wrapper">
			<header id="page-topbar">
				<div class="navbar-header">
					<div class="d-flex">
						<!-- LOGO -->
						<div class="navbar-brand-box">
							<a
								role="none"
								class="logo logo-light"
								v-if="userType === 'user'"
								@click="startNewChat"
							>
								<span class="logo-sm">
									<button class="btn text-white">
										<i class="bx bx-pencil"></i>New Chat
									</button></span
								>

								<a
									role="none"
									class="logo logo-light"
									v-if="userType === 'user'"
									@click="startNewChat"
								>
									<span class="logo-lg">
										<button class="btn text-white">
											<i class="bx bx-pencil"></i>New Chat
										</button></span
									></a
								>
							</a>

							<a href="index.html" class="logo logo-light" v-else>
								<span class="logo-sm">
									<button class="btn-primary">Appointments</button></span
								>
								<router-link :to="{ name: 'appointments' }">
									<span class="logo-lg">
										<button class="btn text-white">
											<i class="bx bx-calendar"></i> Appointments
											<span class="badge bg-danger rounded-pill">0</span>
										</button>
									</span>
								</router-link>
							</a>
						</div>

						<button
							type="button"
							class="btn btn-sm px-3 font-size-16 header-item waves-effect"
							id="vertical-menu-btn"
							@click="showNavigation"
						>
							<i
								class="bx bx-menu-alt-left bx-sm d-block d-sm-block d-md-none"
							></i>
						</button>

						<!-- App Search-->
						<form class="app-search d-none d-lg-block">
							<div class="position-relative">
								<input
									type="text"
									class="form-control"
									placeholder="Search..."
								/>
								<span class="bx bx-search-alt"></span>
							</div>
						</form>
					</div>

					<div class="d-flex">
						<div class="dropdown d-inline-block d-lg-none ms-2">
							<button
								type="button"
								class="btn header-item noti-icon waves-effect"
								id="page-header-search-dropdown"
								data-bs-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								<i class="mdi mdi-magnify"></i>
							</button>
							<div
								class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
								aria-labelledby="page-header-search-dropdown"
							>
								<form class="p-3">
									<div class="form-group m-0">
										<div class="input-group">
											<input
												type="text"
												class="form-control"
												placeholder="Search ..."
												aria-label="Recipient's username"
											/>
											<div class="input-group-append">
												<button class="btn btn-primary" type="submit">
													<i class="mdi mdi-magnify"></i>
												</button>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>

						<div class="dropdown d-inline-block">
							<button
								type="button"
								class="btn header-item noti-icon waves-effect"
								id="page-header-notifications-dropdown"
								data-bs-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								<i class="bx bx-bell"></i>
								<span class="badge bg-danger rounded-pill">0</span>
							</button>
							<div
								class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
								aria-labelledby="page-header-notifications-dropdown"
							>
								<div class="p-3">
									<div class="row align-items-center">
										<div class="col">
											<h6 class="m-0" key="t-notifications">Notifications</h6>
										</div>
										<div class="col-auto">
											<a href="#!" class="small" key="t-view-all"> View All</a>
										</div>
									</div>
								</div>
								<div data-simplebar style="max-height: 230px">
									<a
										href="javascript: void(0);"
										class="text-reset notification-item"
									>
										<div class="d-flex">
											<div class="avatar-xs me-3">
												<span
													class="avatar-title bg-primary rounded-circle font-size-16"
												>
													<i class="bx bx-cart"></i>
												</span>
											</div>
											<div class="flex-grow-1">
												<h6 class="mb-1" key="t-your-order">Funded Wallet.</h6>
												<div class="font-size-12 text-muted">
													<p class="mb-1" key="t-grammer">
														Your credit of &#x20A6;0.00
													</p>
													<p class="mb-0">
														<i class="mdi mdi-clock-outline"></i>
														<span key="t-min-ago">3 min ago</span>
													</p>
												</div>
											</div>
										</div>
									</a>
									<a
										href="javascript: void(0);"
										class="text-reset notification-item"
									>
										<div class="d-flex">
											<img
												src="../../assets/images/users/avatar-3.jpg"
												class="me-3 rounded-circle avatar-xs"
												alt="user-pic"
											/>
											<div class="flex-grow-1">
												<h6 class="mb-1">Olushola O.</h6>
												<div class="font-size-12 text-muted">
													<p class="mb-1" key="t-simplified">
														Olushola transferred &#x20A6;5,000.00 credit unit.
													</p>
													<p class="mb-0">
														<i class="mdi mdi-clock-outline"></i>
														<span key="t-hours-ago">1 hours ago</span>
													</p>
												</div>
											</div>
										</div>
									</a>
									<a
										href="javascript: void(0);"
										class="text-reset notification-item"
									>
										<div class="d-flex">
											<div class="avatar-xs me-3">
												<span
													class="avatar-title bg-success rounded-circle font-size-16"
												>
													<i class="bx bx-badge-check"></i>
												</span>
											</div>
											<div class="flex-grow-1">
												<h6 class="mb-1" key="t-shipped">Truck Update</h6>
												<div class="font-size-12 text-muted">
													<p class="mb-1" key="t-grammer">
														ABC 123 XY status been verified.
													</p>
													<p class="mb-0">
														<i class="mdi mdi-clock-outline"></i>
														<span key="t-min-ago">3 min ago</span>
													</p>
												</div>
											</div>
										</div>
									</a>
								</div>
								<div class="p-2 border-top d-grid">
									<a
										class="btn btn-sm btn-link font-size-14 text-center"
										href="javascript:void(0)"
									>
										<i class="mdi mdi-arrow-right-circle me-1"></i>
										<span key="t-view-more">View More..</span>
									</a>
								</div>
							</div>
						</div>

						<div class="dropdown d-inline-block">
							<button
								type="button"
								class="btn header-item waves-effect"
								id="page-header-user-dropdown"
								data-bs-toggle="dropdown"
								@click="showAdditionalOptions"
							>
								<img
									class="rounded-circle header-profile-user"
									src="../../assets/images/users/avatar-1.jpg"
									alt="Header Avatar"
								/>
								<span class="d-none d-xl-inline-block ms-1" key="t-henry"
									>Olushola</span
								>
								<i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
							</button>
							<div
								class="dropdown-menu dropdown-menu-end"
								:class="showLogout ? 'show' : ''"
							>
								<!-- item-->
								<a class="dropdown-item" href="#"
									><i class="bx bx-user font-size-16 align-middle me-1"></i>
									<span key="t-profile">Profile</span></a
								>

								<a class="dropdown-item d-block" href="#"
									><span class="badge bg-success float-end">0</span
									><i class="bx bx-wrench font-size-16 align-middle me-1"></i>
									<span key="t-settings">Settings</span></a
								>
								<div class="dropdown-divider"></div>
								<span class="dropdown-item text-danger" @click="logout">
									<i
										class="bx bx-power-off font-size-16 align-middle me-1 text-danger"
									></i>
									<span key="t-logout">Logout</span>
								</span>
							</div>
						</div>
					</div>
				</div>
			</header>

			<!-- ========== Left Sidebar Start ========== -->
			<div
				class="vertical-menu"
				style="overflow: auto"
				:style="showNav ? { display: 'block' } : ''"
				:class="showNav ? 'slide-out' : 'slide-in'"
			>
				<div class="h-50">
					<!--- Sidemenu -->
					<div id="sidebar-menu">
						<!-- Left Menu Start -->
						<ul class="metismenu list-unstyled" id="side-menu">
							<li class="menu-title" key="t-menu1" v-if="userType === 'user'">
								Chat History
							</li>
							<li class="menu-title" key="t-menu2" v-else>
								Appointment History
							</li>

							<li v-for="chat in chatHistory" :key="chat.chatStartedAt">
								<router-link
									:to="{
										name: 'show-previous-chat',
										params: { chatId: chat.id, timestamp: chat.chatStartedAt },
									}"
									class="waves-effect"
								>
									<i class="bx bx-chat"></i>
									<span key="t-dashboards">{{
										truncateString(chat.chatTopic, 20)
									}}</span>
								</router-link>
							</li>
						</ul>
					</div>
					<!-- Sidebar -->
				</div>
			</div>
			<!-- Left Sidebar End -->

			<!-- ============================================================== -->
			<!-- Start right Content here -->
			<!-- ============================================================== -->
			<div class="main-content">
				<slot>
					<router-view></router-view>
				</slot>
				<!-- End Page-content -->
				<footer class="footer" v-if="userType === 'doctor'">
					<div class="container-fluid">
						<div class="row">
							<div class="col-sm-6">
								Human Computer Interaction - Fall,
								{{ new Date().getFullYear() }}
							</div>
							<div class="col-sm-6">
								<div class="text-sm-end d-none d-sm-block">
									Design & Develop by Joseph, Daniel, and Olushola.
								</div>
							</div>
						</div>
					</div>
				</footer>
			</div>
			<!-- end main content-->
		</div>
		<!-- END layout-wrapper -->

		<!-- Right bar overlay-->
		<div class="rightbar-overlay"></div>
	</body>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
	data() {
		return {
			showLogout: false,
			showNav: false,
		};
	},
	computed: {
		...mapGetters({
			chatHistory: "getChatHistory",
		}),
		userType() {
			return this.$store.state.user.userType;
		},
	},
	methods: {
		async logout() {
			const logOutState = await this.$store.dispatch("logOutUser");
			if (logOutState) {
				this.$router.go("/login");
			}
		},
		showAdditionalOptions() {
			this.showLogout = !this.showLogout;
		},
		showNavigation() {
			this.showNav = !this.showNav;
		},

		truncateString(inputString, maxLength) {
			if (inputString.length > maxLength) {
				return inputString.substring(0, maxLength) + "...";
			} else {
				return inputString;
			}
		},

		startNewChat() {
			localStorage.removeItem("isChatting");
			localStorage.removeItem("currentChat");
			this.$store.state.Patient.isChatting = false;
			this.$store.state.Patient.currentChat = null;
			localStorage.removeItem("currentChatId");

			this.$router.push("/dashboard");
		},
		...mapActions({
			chatHistoryPreview: "previousChatHistory",
		}),
	},

	async created() {
		await this.chatHistoryPreview();
	},
};
</script>

<style scoped>
.slide-in {
	animation: slide-in 0.5s forwards;
}

.slide-out {
	animation: slide-out 0.5s ease-in-out;
}

@keyframes slide-in {
	100% {
		transform: translateX(0%);
	}
}

@keyframes slide-out {
	0% {
		transform: translateX(0%);
	}
	50% {
		transform: translateX(10%);
	}
	100% {
		transform: translateX(0%);
	}
}
</style>

