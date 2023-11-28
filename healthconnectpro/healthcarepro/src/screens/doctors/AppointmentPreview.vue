<template>
	<section class="card">
		<div class="d-lg-flex">
			<div class="w-100 user-chat">
				<div class="card">
					<div class="p-4 border-bottom">
						<div class="row">
							<div class="col-md-12 col-12">
								<h5 class="font-size-15 mb-1">Olushola O</h5>
								<p class="text-muted mb-0">
									<i class="mdi mdi-circle text-success align-middle me-1"></i>
									What are the symptoms of a Flu?
								</p>
							</div>
						</div>
					</div>

					<div>
						<div class="chat-conversation p-3">
							<ul
								class="list-unstyled mb-0"
								data-simplebar="init"
								style="max-height: 350px"
							>
								<div class="simplebar-wrapper" style="margin: 0px">
									<div class="simplebar-height-auto-observer-wrapper">
										<div class="simplebar-height-auto-observer"></div>
									</div>
									<div class="simplebar-mask">
										<div
											class="simplebar-offset"
											style="right: -20px; bottom: 0px"
										>
											<div
												class="simplebar-content-wrapper"
												style="
													height: auto;
													padding-right: 20px;
													padding-bottom: 0px;
													overflow: hidden scroll;
												"
											>
												<div class="simplebar-content" style="padding: 0px">
													<li>
														<div class="chat-day-title">
															<span class="title">Today</span>
														</div>
													</li>
													<li>
														<div class="conversation-list">
															<div class="ctext-wrap">
																<div class="conversation-name">Olushola O.</div>
																<p>Hello</p>
																<p class="chat-time mb-0">
																	<i
																		class="bx bx-time-five align-middle me-1"
																	></i>
																	10:00 AM
																</p>
															</div>
														</div>
													</li>

													<li class="right">
														<div class="conversation-list">
															<div class="ctext-wrap">
																<div class="conversation-name">
																	HealthConnectPro AI
																</div>
																<p>
																	Hi, How are you? What about our next meeting?
																	AM
																</p>

																<p class="chat-time mb-0">
																	<i
																		class="bx bx-time-five align-middle me-1"
																	></i>
																	10:02 AM
																</p>
															</div>
														</div>
													</li>

													<li>
														<div class="conversation-list">
															<div class="ctext-wrap">
																<div class="conversation-name">Olushola O.</div>
																<p>Hello</p>
																<p class="chat-time mb-0">
																	<i
																		class="bx bx-time-five align-middle me-1"
																	></i>
																	10:00 AM
																</p>
															</div>
														</div>
													</li>

													<li class="right">
														<div class="conversation-list">
															<div class="ctext-wrap">
																<div class="conversation-name">
																	HealthConnectPro AI
																</div>
																<p>
																	Hi, How are you? What about our next meeting?
																	AM
																</p>

																<p class="chat-time mb-0">
																	<i
																		class="bx bx-time-five align-middle me-1"
																	></i>
																	10:02 AM
																</p>
															</div>
														</div>
													</li>
												</div>
											</div>
										</div>
									</div>
									<div
										class="simplebar-placeholder"
										style="width: auto; height: 664px"
									></div>
								</div>
							</ul>
						</div>
						<div class="p-3">
							<div class="row">
								<div class="col">
									<div class="position-relative">
										<textarea
											type="text"
											class="form-control"
											placeholder="Enter Message..."
										></textarea>
									</div>
								</div>
								<div class="col-auto">
									<button
										type="submit"
										class="btn btn-primary btn-rounded chat-send w-md waves-effect waves-light"
									>
										<span class="d-none d-sm-inline-block me-2">Send</span>
										<i class="mdi mdi-send"></i>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {};
</script>

<style scoped>
.pointer {
	cursor: pointer;
}
</style>