import { useState } from 'react';
import { Container } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import ImageUploading from 'react-images-uploading';

import './styles.scss';

function Testing() {
	const [images, setImages] = useState([]);
	const maxNumber = 4;
	const onChange = (imageList, addUpdateIndex) => {
		// data for submit
		console.log(imageList, addUpdateIndex);
		setImages(imageList);
	};

	return (
		<div className="App">
			<ImageUploading
				multiple
				value={images}
				onChange={onChange}
				maxNumber={maxNumber}
				dataURLKey="data_url"
			>
				{({
					imageList,
					onImageUpload,
					onImageRemoveAll,
					onImageUpdate,
					onImageRemove,
					isDragging,
					dragProps,
				}) => (
					// write your building UI
					<div className="upload__image-wrapper">
						<div className="container photo-of-goods " {...dragProps}>
							<div className="container goods">
								<div className="photos">
									{imageList.map((image, index) => (
										<div key={index} className="image-item">
											<img src={image.data_url} alt="" className="image" />
											<div className="image-item__btn-wrapper">
												<button onClick={() => onImageUpdate(index)}>
													Update
												</button>
												<button onClick={() => onImageRemove(index)}>
													Remove
												</button>
											</div>
										</div>
									))}
								</div>
							</div>
							<div className="button-container">
								<input
									type="file"
									id="files"
									class="hidden"
									name="image-upload"
									onChange={(e) => onChange(e)}
								/>
								<label for="files">
									<div
										className="btn btn-primary upload-btn"
										onClick={onImageUpload}
									>
										Upload
									</div>
								</label>
							</div>
						</div>
					</div>
				)}
			</ImageUploading>
		</div>
	);
}

export default Testing;
