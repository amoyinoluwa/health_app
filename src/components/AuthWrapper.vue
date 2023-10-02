<template>
	<div class="account-pages my-0 pt-sm-5">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-8 col-lg-6 col-xl-5">
					<div class="card overflow-hidden">
						<div class="bg-primary bg-soft">
							<div class="row">
								<div class="col-7">
									<div class="text-primary p-4">
										<h5 class="text-primary">{{ title }}</h5>
										<p>{{ titleSlug }}</p>
									</div>
								</div>
								<div class="col-5 align-self-end">
									<img
										src="../assets/images/profile-img.png"
										alt=""
										class="img-fluid"
									/>
								</div>
							</div>
						</div>
						<div class="card-body pt-0">
							<div class="p-2">
								<slot name="authForm"></slot>
							</div>
						</div>
					</div>
					<div class="mt-5 text-center">
						<slot name="authFooter"></slot>
						<p>Designed by Joseph, Daniel, and Olushola</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "login",
	props: {
		title: {
			require: true,
			type: String,
		},
		titleSlug: {
			require: true,
			type: String,
		},
	},
};
</script>