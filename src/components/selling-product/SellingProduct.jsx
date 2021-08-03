import './SellingProduct.scss';

const SellingProduct = () => {
	return (
		<>
			<div className="container d-flex wrapper">
				<div className="container left-container">
					<div className="container d-flex profile">
						<div className="profile" />
						<div className="photo-box">
							<img
								src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627339637/Front%20End/profile_yzozml.jpg"
								alt="profile"
							/>
						</div>
						<div className="container profile">
							<h1 className="profile-name">Johanes Mikael</h1>
							<div className="d-grid gap-2 d-flex update-profile">
								<i className="fa fa-pencil" aria-hidden="true" />
								<p className="update-profile">Ubah Profile</p>
							</div>
						</div>
					</div>
				</div>
				<div className="container right-container">
					<div className="container inventory">
						<div className="container title">Inventory</div>
						<div className="container name-of-goods">
							<div className="form-group">
								<label htmlFor="goods">Name of goods</label>
								<input className="form-control" placeholder />
							</div>
						</div>
					</div>
					<div className="container item-details-wrapper">
						<div className="container title">Item details</div>
						<div className="container details">
							<div className="form-group">
								<label htmlFor="unit-price">Unit price</label>
								<input className="form-control" placeholder />
							</div>
							<div className="form-group">
								<label htmlFor="stock">Stock</label>
								<input className="form-control" placeholder />
							</div>
							<h1>Stock</h1>
							<div className="form-check form-check-inline">
								<input
									className="form-check-input"
									type="radio"
									name="inlineRadioOptions"
									id="baru-radio"
									defaultValue="baru"
								/>
								<label className="form-check-label" htmlFor="inlineRadio1">
									Baru
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input
									className="form-check-input"
									type="radio"
									name="inlineRadioOptions"
									id="bekas-radio"
									defaultValue="bekas"
								/>
								<label className="form-check-label" htmlFor="inlineRadio2">
									Bekas
								</label>
							</div>
						</div>
					</div>
					<div className="photo-of-goods-wrapper">
						<div className="container title">Photo of goods</div>
						<div className="container photo-of-goods">
							<div className="container goods">
								<div className="photos">
									<img
										src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627948168/Front%20End/no-image_daqikm.svg"
										alt="product"
									/>
								</div>
							</div>
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
												<button
													type="button"
													className="close"
													data-dismiss="modal"
												>
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
													/>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="container description">
						<h1>Description</h1>
						<div className="form-group">
							<textarea
								className="form-control"
								id="exampleFormControlTextarea1"
								rows={10}
								defaultValue={''}
							/>
						</div>
					</div>
					<div className="sell-btn-container">
						<button className="btn-primary sell-btn">Jual</button>
					</div>
				</div>
			</div>
		</>
	);
};
export default SellingProduct;
