<template>
	<auth-wrapper title="Signup!" titleSlug="HealthCarePro account is free.">
		<template #authForm>
			<sign-up-form></sign-up-form>
		</template>
		<template #authFooter>
			<div>
				<p>
					Already have an account ?
					<router-link :to="login" class="fw-medium text-primary">
						Login
					</router-link>
				</p>
			</div>
		</template>
	</auth-wrapper>
</template>

<script>
import SignUpForm from "../../components/auth/SignUpForm.vue";
export default {
	components: {
		signUpForm: SignUpForm,
	},
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