<template>
	<auth-wrapper title="Reset Password" titleSlug="Enter a valid email address">
		<template #authForm>
			<div class="p-2">
				<div class="alert alert-success text-center mb-4" role="alert">
					If we find a match for your email, instructions on how to reset your
					password will be sent.
				</div>
				<form class="form-horizontal">
					<div class="mb-3">
						<label for="useremail" class="form-label">Email</label>
						<input
							type="email"
							class="form-control"
							id="useremail"
							placeholder="Enter email"
						/>
					</div>
					<div class="text-end">
						<button
							class="btn btn-primary w-md waves-effect waves-light font-weight-bold"
							type="submit"
						>
							SEND PASSWORD RESET INSTRUCTIONS
						</button>
					</div>
				</form>
			</div>
		</template>
		<template #authFooter>
			<div>
				<p>
					Remember it?
					<router-link :to="login" class="fw-medium text-primary">
						Sign in here
					</router-link>
				</p>
			</div>
		</template>
	</auth-wrapper>
</template>

<script>
export default {
	computed: {
		login() {
			return {
				name: "login",
			};
		},
	},
};
</script>

<style scoped>
</style>