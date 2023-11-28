<template>
	<design-layout>
		<div class="page-content">
			<div class="container-fluid">
				<div class="row">
					<div class="col-12">
						<div
							class="page-title-box d-sm-flex align-items-center justify-content-between"
							v-if="userType == 'doctor'"
						>
							<h4 class="mb-sm-0 font-size-18">Dashboard</h4>
							<div class="page-title-right">
								<ol class="breadcrumb m-0">
									<li class="breadcrumb-item">
										<router-link :to="{ name: 'dashboard' }"
											>Dashboard</router-link
										>
									</li>
									<li class="breadcrumb-item active">
										<span v-if="userType === 'doctor'">Doctor</span>
										<span v-else>User</span>
									</li>
								</ol>
							</div>
						</div>
					</div>

					<doctor-dashboard v-if="userType === 'doctor'" />
					<user-dashboard v-if="userType === 'user'" />
				</div>
			</div>
		</div>
	</design-layout>
</template>

<script>
import DoctorDashboard from "../components/dashboard/Doctor.vue";
import UserDashboard from "../components/dashboard/User.vue";
export default {
	components: {
		"doctor-dashboard": DoctorDashboard,
		"user-dashboard": UserDashboard,
	},
	computed: {
		user() {
			return this.$store.state.user;
		},
		userType() {
			// return this.$store.state.user.userType;
			return this.user.userType;
		},
	},
};
</script>