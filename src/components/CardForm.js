import React from "react";

function CardForm({ cardData, handleChange, handleSubmit, handleCancel }) {
	return (
		<form onSubmit={handleSubmit}>
			<div className="form-group">
				<label>Front</label>
				<textarea
					id="front"
					name="front"
					className="form-control"
					onChange={handleChange}
					type="text"
					value={cardData.front}
				/>
			</div>
			<div className="form-group">
				<label>Back</label>
				<textarea
					id="back"
					name="back"
					className="form-control"
					onChange={handleChange}
					type="text"
					value={cardData.back}
				/>
			</div>
			<button className="btn btn-secondary mx-1" onClick={handleCancel}>
				Done
			</button>
			<button className="btn btn-primary mx-1" type="submit">
				Save
			</button>
		</form>
	);
}

export default CardForm;
