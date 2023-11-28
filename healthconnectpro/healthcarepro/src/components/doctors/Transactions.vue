<template>
	<div class="row">
		<div class="col-lg-12">
			<div class="card">
				<div class="card-body">
					<h4 class="card-title mb-4">Activities</h4>
					<spinner v-if="!walletActivities" />
					<div class="table-responsive" v-else>
						<table class="table align-middle table-striped table-nowrap mb-0">
							<thead class="table-light">
								<tr>
									<th class="align-middle">Appointment ID</th>
									<th class="align-middle">Date</th>
									<th class="align-middle">Amount</th>
									<th class="align-middle">Mode of Appointment</th>
									<th class="align-middle">Payment Status</th>
									<th class="align-middle">Remark</th>
									<th class="align-middle">Action</th>
								</tr>
							</thead>
							<tbody>
								<record-not-found
									v-if="walletActivities.length < 1"
									colspan="10"
									label="No record found."
								></record-not-found>
								<transaction-history-item
									v-else
									v-for="transaction in walletActivities"
									:key="transaction._id"
									:transactionRef="transaction._id"
									:transactionDate="transaction.timestamp"
									:amount="transaction.amount"
									:transactionType="transaction.transactionType"
									:transactionStatus="transaction.transactionStatus"
									:paymentMode="transaction.modeOfPayment"
								>
								</transaction-history-item>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- end row -->
</template>

<script>
// import { mapActions, mapGetters } from "vuex";
import TransactionHistoryItem from "./TransactionHistoryItem.vue";
export default {
	components: {
		TransactionHistoryItem: TransactionHistoryItem,
	},
	data() {
		return {
			currentPage: 1,
			limit: 20,
		};
	},
	computed: {
		walletActivities() {
			return [
				{
					_id: "9102891928192XHGVC8298291892",
					timestamp: "2023-05-01",
					amount: 400,
					transactionType: "Zoom Meeting",
					transactionStatus: "Approved - Credit Card",
					modeOfPayment: "Lorem Ipsum",
				},
				{
					_id: "ADCVF91928192XHFVCDGUOWUEI",
					timestamp: "2023-05-01",
					amount: 100,
					transactionType: "Zoom Meeting",
					transactionStatus: "Approved - Credit Card",
					modeOfPayment: "Lorem Ipsum",
				},
				{
					_id: "31253891928192XHGVCPOPIWPEIV",
					timestamp: "2023-05-01",
					amount: 285,
					transactionType: "In Person",
					transactionStatus: "Approved - Credit Card",
					modeOfPayment: "Lorem Ipsum",
				},
				{
					_id: "42568231928V92XHGVCBCHIDHDC",
					timestamp: "2023-05-01",
					amount: 700,
					transactionType: "Google Meet Meeting",
					transactionStatus: "Cancelled",
					modeOfPayment: "Lorem Ipsum",
				},
			];
		},
	},
	// 	...mapGetters({
	// 		isWalletLoading: "transactionLogStatus",
	// 	}),
	// },
	// methods: {
	// 	...mapActions({
	// 		walletHistory: "walletHistory",
	// 	}),
	// },
	// mounted() {
	// 	this.walletHistory({ page: this.currentPage, limit: this.limit });
	// },
};
</script>