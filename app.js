


let noteButton = document.getElementById("note-button");
let listButton = document.getElementById('list-button');

function noteTemplate() {
	let template = `
	<div class="new-div">
		<textarea></textarea>
	</div>`;
	return template
}

function listTemplate() {
	let template = `
	<div class="new-div">
		<ul id="ul">
			<li>
				<input type="checkbox">
				<input type="text">
			</li>
		</ul>
	</div>`;
	return template
}

function checkboxTemplate() {
	let template = `
	<li>
		<input type="checkbox">
		<input type="text" id="input">
	</li>
	`
	return template
}

function displayNote() {
	let cardContainer = document.getElementById("card-wrap");
	cardContainer.insertAdjacentHTML("beforeend", noteTemplate());
}

function displayCheckbox() {
	let cardContainer = document.getElementById("card-wrap");
	cardContainer.insertAdjacentHTML("beforeend", listTemplate());
}

noteButton.addEventListener("click", displayNote);
listButton.addEventListener("click", displayCheckbox);

listButton.addEventListener('keypress', function (e) {
	debugger
    if (e.keycode === 13) {
      document.getElementById('input').insertAdjacentHTML("beforeend", checkboxTemplate())
    }
});