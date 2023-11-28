<template>
	<div>
		<section class="container user-chat">
			<div class="row">
				<div class="col-md-12">
					<div class="user-message">
						<p>User:</p>
						<span>{{ user }}</span>
					</div>
				</div>
			</div>
		</section>

		<section class="container bot-chat">
			<div class="row">
				<div class="col-md-12">
					<div class="bot-message">
						<p>HealthCarePro AI:</p>
						<!-- Use ref to reference the element -->
						<span
							v-if="counter === length"
							ref="typingElement"
							id="displayBotTyping"
						>
							{{ content }}
						</span>
						<span v-else>{{ bot }}</span>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	props: ["user", "bot", "counter", "length"],
	data() {
		return {
			index: 0,
			content: this.bot,
			isMounted: false, // Flag to track whether the component is mounted
		};
	},

	methods: {
		async type() {
			if (this.isMounted) {
				this.$refs.typingElement.textContent = this.content.substring(
					0,
					this.index
				);
				this.index++;
				if (this.index < this.content.length) {
					setTimeout(this.type, 100);
				}
			}
		},
	},

	// Watch for changes in counter or length props
	watch: {
		length(newLength, oldLength) {
			console.log(newLength, oldLength);
			if (newLength !== oldLength) {
				this.index = 0; // Reset the index
				this.type(); // Trigger the type function
			}
		},
	},

	mounted() {
		// Set the isMounted flag to true when the component is mounted
		this.isMounted = true;
		// Call the type method after the component is mounted
		this.type();
	},
};
</script>



<style scoped>
.user-chat {
	margin-top: 10px;
}

.user-message {
	color: #333;
	border-radius: 8px;
	cursor: pointer;
	margin: 5px 0px;
	padding: 10px;
	border: 1px solid black;
}

.bot-chat {
	margin-top: 10px;
}

.bot-message {
	background: #f1f1f1;
	border-radius: 8px;
	cursor: pointer;
	margin: 5px 0px;
	padding: 10px;
	border: 1px solid #333;
}

.user-message > p,
.bot-message > p {
	margin: 0;
	font-weight: bold;
}

.user-message > span,
.bot-message > span {
	padding: 0;
	margin: 12px 0px auto 0px;
	font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
		"Lucida Sans", Arial, sans-serif;
	color: #333;
	font-size: 14px;
}
</style>