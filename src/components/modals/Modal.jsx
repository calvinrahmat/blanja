const Modal = () => {
	return (
		<>
			<div className="button-container">
				<button
					data-bs-toggle="modal"
					data-bs-target="#myModal"
					className="btn-primary upload-btn"
				>
					Upload foto
				</button>
				{/* Modal */}
				<div
					className="modal"
					id="myModal"
					tabIndex={-1}
					role="dialog"
					aria-labelledby="myModalLabel"
					aria-hidden="true"
				>
					<div className="modal-dialog">
						{/* Modal content*/}
						<div className="modal-content">
							<div className="modal-header">
								<button type="button" className="close" data-dismiss="modal">
									×
								</button>
								<h4 className="modal-title">Modal Header</h4>
							</div>
							<div className="modal-body">
								<p>Please upload image</p>
							</div>
							<div className="modal-footer">
								<button
									type="button"
									className="btn btn-default"
									data-dismiss="modal"
								>
									Close
								</button>
							</div>
							<form>
								<div className="form-group">
									<input
										type="file"
										className="form-control-file"
										id="exampleFormControlFile1"
										name="img"
										value={img}
										onChange={(e) => onChange(e)}
									/>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Modal;
