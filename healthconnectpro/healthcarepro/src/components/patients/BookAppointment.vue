<template>
	<modal>
		<template #modalHeader>
			<h2>Book an Appointment</h2>
		</template>
		<form>
			<div class="row mb-4 mt-4">
				<label class="col-sm-2 col-form-label">When</label>
				<div class="col-sm-10">
					<input type="date" class="form-control" />
				</div>
			</div>
			<div class="row mb-4">
				<label class="col-sm-2 col-form-label">Timezone</label>
				<div class="col-sm-10">
					<select class="form-control">
						<option>Select Timezone</option>
					</select>
				</div>
			</div>
			<div class="row mb-4">
				<label class="col-sm-2 col-form-label">Remark</label>
				<div class="col-sm-10">
					<textarea
						class="form-control"
						placeholder="Additional Remark"
					></textarea>
				</div>
			</div>

			<div class="row">
				<label class="col-sm-12 col-form-label"
					>Choose your preferred appointment option</label
				>
			</div>

			<div class="row">
				<div
					class="col-sm-12"
					style="display: flex; justify-content: space-evenly"
				>
					<div class="form-check form-radio-outline form-radio-primary mb-3">
						<input class="form-check-input" type="radio" />
						<label class="form-check-label" for="formRadio1">
							Virtual - Zoom.
						</label>
					</div>
					&nbsp;&nbsp;&nbsp;&nbsp;
					<div class="form-check form-radio-outline form-radio-primary mb-3">
						<input class="form-check-input" type="radio" />
						<label class="form-check-label" for="formRadio1">
							Virtual - Google Meet.
						</label>
					</div>

					<div class="form-check form-radio-outline form-radio-primary mb-3">
						<input class="form-check-input" type="radio" />
						<label class="form-check-label" for="formRadio1">
							In-person.
						</label>
					</div>
				</div>
			</div>

			<div class="row">
				<label class="col-sm-12 col-form-label"
					>Would you like to share your chat history?</label
				>
			</div>

			<div class="row">
				<div
					class="col-sm-12"
					style="display: flex; justify-content: flex-start"
				>
					<div
						class="form-check form-radio-outline form-radio-primary mb-3 ml-4"
					>
						<input class="form-check-input" type="radio" />
						<label class="form-check-label" for="formRadio1"> Agree. </label>
					</div>
					&nbsp;&nbsp;&nbsp;&nbsp;
					<div class="form-check form-radio-outline form-radio-danger mb-3">
						<input class="form-check-input" type="radio" />
						<label class="form-check-label" for="formRadio1"> Deline. </label>
					</div>
				</div>
			</div>

			<div style="display: flex; justify-content: space-around">
				<button type="submit" class="btn btn-primary w-md">Schedule</button>
			</div>
		</form>
	</modal>
</template>