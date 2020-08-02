const noteButton = document.getElementById('note-button'); 
const notesWrapper = document.getElementById('card-wrap');
let notes = [];

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}


// CREATE
function newNote() {
	const note = {
		id: uuidv4(),
		text: "",
		date: new Date()
	}

	notes.push(note);
	renderNotes();
	console.log(notes);
}

// DELETE
function deleteNote(id) {
	notes = notes.filter(n => n.id !== id);
	renderNotes();
	console.log('yes')
}

// function saveNote(id) {
// 	const note = notes.find(n => n.id == id);
// 	const newText = document.getElementById('text-' + note.id).value;

// 	note.text = newText;
// 	const newNote = Object.assign({}, note);

// 	renderNotes();
// }

function saveNote(id) {
	const note = notes.find(n => n.id == id);
	const newText = document.getElementById('text-' + note.id).value;
	const newNote = {
		...note,
		text: newText
	};

	notes = notes.map(n => n.id === id ? newNote : n)
	renderNotes();
	console.log(newNote);
}

function createNoteTemplate(note) {
	return `<div class="note-card">
				<button onclick="deleteNote('${note.id}')">X</button>
				<button onclick="saveNote('${note.id}')">save</button>
				<p>${note.id}</p>
				<form>
					<textarea id="text-${note.id}" placeholder="Take a note...">${note.text}</textarea>
				</form>
			</div>`
}

// READ
function renderNotes() {
	const notehtml = notes.map(note => createNoteTemplate(note));
	notesWrapper.innerHTML = notehtml;
}

noteButton.addEventListener("click", newNote);

// Need edit and update functions