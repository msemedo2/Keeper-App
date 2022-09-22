import React, { useState } from 'react';

function CreateArea(props) {
	const [note, setNote] = useState({
		title: '',
		content: '',
	});

	function handleChange(e) {
		const { name, value } = e.target;
		setNote((prevNote) => {
			return {
				...prevNote,
				[name]: value,
			};
		});
	}

	function submitNote(e) {
		props.onAdd(note);
		setNote({
			title: '',
			content: '',
		});
		e.preventDefault();
	}

	return (
		<div>
			<form>
				<input
					onChange={handleChange}
					name="title"
					type="text"
					placeholder="Title"
					value={note.title}
				></input>
				<textarea
					onChange={handleChange}
					name="content"
					type="text"
					placeholder="Take a note..."
					rows="3"
					value={note.content}
				></textarea>
				<button onClick={submitNote}>Add</button>
			</form>
		</div>
	);
}

export default CreateArea;
