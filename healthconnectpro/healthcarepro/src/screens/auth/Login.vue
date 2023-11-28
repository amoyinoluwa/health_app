<template>
	<auth-wrapper title="Welcome Back!" titleSlug="Login to HealthConnectPro.">
		<template #authForm>
			<login-form></login-form>
		</template>
		<template #authFooter>
			<div>
				<p>
					Don't have an account ?
					<router-link :to="signUp" class="fw-medium text-primary">
						Signup now
					</router-link>
				</p>
			</div>
		</template>
	</auth-wrapper>
</template>

<script>
import LoginForm from "../../components/auth/LoginForm.vue";
export default {
	name: "login",
	components: {
		LoginForm: LoginForm,
	},
	computed: {
		signUp() {
			return {
				name: "register",
			};
		},
	},
	created() {
		document.title = "Login";
	},
};
</script>