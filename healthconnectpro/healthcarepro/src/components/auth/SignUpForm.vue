<template>
	<form @submit.prevent="createUserAccount">
		<div
			class="alert alert-danger alert-dismissible fade show"
			role="alert"
			v-if="hasValidationError"
			@click="hasValidationError = false"
		>
			<i class="bx bx-error-circle mt-2"></i>
			Validation failed.
			<button
				type="button"
				class="btn-close"
				data-bs-dismiss="alert"
				aria-label="Close"
			></button>
		</div>
		<div
			class="alert alert-danger alert-dismissible fade show"
			role="alert"
			v-if="hasError"
			@click="hasError = false"
		>
			<i class="bx bx-error-circle mt-2"></i>
			The email {{ email }} is already in use.
			<button
				type="button"
				class="btn-close"
				data-bs-dismiss="alert"
				aria-label="Close"
			></button>
		</div>
		<div
			class="alert alert-success alert-dismissible fade show"
			role="alert"
			v-if="completed"
		>
			<i class="bx bx-check-double mt-2"></i>
			Sign up completed.
			<button
				type="button"
				class="btn-close"
				data-bs-dismiss="alert"
				aria-label="Close"
			></button>
		</div>
		<div class="mb-3">
			<label for="useremail" class="form-label">Name</label>
			<input
				type="text"
				class="form-control"
				id="name"
				v-model.trim="firstName"
				placeholder="First Name"
			/>
			<input
				type="text"
				class="form-control"
				id="name"
				v-model.trim="lastName"
				placeholder="Last Name"
			/>
			<small
				v-if="!v$.firstName.required"
				class="mt-2 d-block text-danger text-muted"
			>
				<i class="bx bxs-x-circle"></i>We need to know your name.
			</small>
		</div>
		<div class="mb-3">
			<label for="useremail" class="form-label">Email</label>
			<input
				type="email"
				class="form-control"
				v-model.trim="email"
				placeholder="Enter email"
			/>
			<small
				v-if="!v$.email.required"
				class="mt-2 d-block text-danger text-muted"
				><i class="bx bxs-x-circle"></i>Your email is required</small
			>
		</div>
		<div class="mb-3">
			<label for="userpassword" class="form-label">Password</label>
			<input
				type="password"
				class="form-control"
				v-model="password"
				placeholder="Enter password"
			/>
			<small
				v-if="!v$.password.required"
				class="mt-2 d-block text-danger text-muted"
				><i class="bx bxs-x-circle"></i>Password is required [Must include a
				capital letter, number and a special character]</small
			>
		</div>
		<div class="mb-3">
			<label for="userpassword" class="form-label">Confirm Password</label>
			<input
				type="password"
				class="form-control"
				v-model="confirmPassword"
				placeholder="Confirm Password"
			/>
			<small
				v-if="!v$.confirmPassword.required"
				class="mt-2 d-block text-danger text-muted"
				><i class="bx bxs-x-circle"></i>Your password does not match</small
			>
		</div>
		<div class="mb-3">
			<label for="userpassword" class="form-label">Phone Number</label>
			<input
				type="text"
				class="form-control"
				v-model="phoneNumber"
				placeholder="+1 (432)-981-2378"
			/>
			<small
				v-if="!v$.confirmPassword.required"
				class="mt-2 d-block text-danger text-muted"
				><i class="bx bxs-x-circle"></i>We need your phone number</small
			>
		</div>
		<div class="mt-4 d-grid">
			<button
				class="btn btn-primary waves-effect waves-light submit"
				ref="signUp"
				type="submit"
				:disabled="isFormSubmitted"
			>
				Register
			</button>
		</div>
		<div class="mt-4 text-center">
			<p class="mb-0">
				By registering you agree to the call up
				<router-link to="#" class="text-primary">Terms of Use</router-link>
			</p>
		</div>
	</form>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, sameAs } from "@vuelidate/validators";
export default {
	data() {
		return {
			isFormSubmitted: false,
			hasError: false,
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			confirmPassword: "",
			userType: "user",
			phoneNumber: "",
			hasValidationError: false,
			completed: false,
		};
	},
	setup() {
		return { v$: useVuelidate() };
	},
	validations() {
		return {
			firstName: { required },
			lastName: { required },
			email: { required, email },
			password: {
				required,
				minLength: minLength(8),
			},
			confirmPassword: {
				required,
				sameAs: sameAs(this.password),
			},
			userType: {
				required,
			},
			phoneNumber: { required, Array: minLength(1) },
		};
	},
	computed: {
		getProfileTypes() {
			return this.$store.getters.getProfileTypes;
		},
	},
	methods: {
		async createUserAccount() {
			this.v$.$touch();
			if (this.v$.$error) {
				this.hasValidationError = true;
				return;
			}
			this.isFormSubmitted = true;
			this.$refs.signUp.innerHTML =
				'<i class="bx bx-loader bx-spin"></i> Please wait...';

			try {
				const formData = {
					firstName: this.firstName,
					lastName: this.lastName,
					email: this.email,
					password: this.password,
					confirmPassword: this.confirmPassword,
					phoneNumber: this.phoneNumber,
					userType: this.userType,
				};
				const signUpRequest = await this.$store.dispatch(
					"createUserAccount",
					formData
				);
				if (signUpRequest.status === 201) {
					await new Promise((resolve) => setTimeout(resolve, 5000));
					this.$router.push("/login");
				}

				if (signUpRequest.status === 422) {
					this.hasValidationError = true;
					this.isFormSubmitted = false;
					this.$refs.signUp.innerHTML = "Register";
				}
				if (signUpRequest.data.email.msg.statusCode === 409) {
					this.hasError = true;
					this.isFormSubmitted = false;
					this.$refs.signUp.innerHTML = "Register";
					return false;
				}
			} catch (err) {
				return err.message;
			}
		},
	},
};
</script>
