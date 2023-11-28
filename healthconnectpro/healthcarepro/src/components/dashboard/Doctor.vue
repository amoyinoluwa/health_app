<template>
	<section>
		<div class="row">
			<div class="col-sm-4">
				<div class="card mini-stats-wid">
					<div class="card-body">
						<div class="d-flex">
							<div class="flex-shrink-0 me-3 align-self-center">
								<i class="bx bx-wallet h2 text-warning mb-0"></i>
							</div>
							<!-- <span><i class="bx bx-loader bx-spin"></i></span> -->
							<div class="flex-grow-1">
								<p class="text-muted mb-2">Total Number of Consultation</p>
								<h5 class="mb-1">{{ 1200 }}</h5>
								<p class="text-muted mb-2">
									{{ new Date().toUTCString().substr(0, 16) }}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-sm-4">
				<div class="card mini-stats-wid">
					<div class="card-body">
						<div class="d-flex">
							<div class="flex-shrink-0 me-3 align-self-center">
								<i class="bx bx-money h2 text-primary mb-0"></i>
							</div>
							<span v-if="parkLoadingStatus"
								><i class="bx bx-loader bx-spin"></i
							></span>
							<div class="flex-grow-1" v-else>
								<p class="text-muted mb-2">Amount Last Received</p>
								<h5 class="mb-0">${{ currencyFormatter(Number(300)) }}</h5>
								<p class="text-muted mb-2">10% decrease from last week.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-sm-4">
				<div class="card mini-stats-wid">
					<div class="card-body">
						<div class="d-flex">
							<div class="flex-shrink-0 me-3 align-self-center">
								<i class="bx bx-coin-stack h2 text-info mb-0"></i>
							</div>
							<span v-if="parkLoadingStatus"
								><i class="bx bx-loader bx-spin"></i
							></span>
							<div class="flex-grow-1" v-else>
								<p class="text-muted mb-2">Revenue Generated</p>
								<h5 class="mb-0">${{ currencyFormatter(Number(300)) }}</h5>
								<p class="text-muted mb-2">{{ 5 }}% increase from last week</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- end row -->

		<span v-if="parkLoadingStatus"><i class="bx bx-loader bx-spin"></i></span>
		<Transactions />
	</section>
</template>

<script>
import Transactions from "../doctors/Transactions.vue";
export default {
	data() {
		return {
			parkLoadingStatus: false,
		};
	},
	components: {
		Transactions,
	},

	beforeMount() {
		document.title = "Dashboard";
	},
};
</script>
