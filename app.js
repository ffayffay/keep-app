const noteButton = document.getElementById('note-button'); 
const notesWrapper = document.getElementById('card-wrap');
let notes = [];

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

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

function deleteNote(id) {
	notes = notes.filter(n => n.id !== id);
	renderNotes();
	console.log('yes')
}

function createNoteTemplate(note) {
	return `<div class="note-card">
				<button onclick="deleteNote('${note.id}')">X</button>
				<button>save</button>
				<p>${note.id}</p>
			</div>`
}

function renderNotes() {
	const notehtml = notes.map(note => createNoteTemplate(note));
	notesWrapper.innerHTML = notehtml;
}

noteButton.addEventListener("click", newNote);