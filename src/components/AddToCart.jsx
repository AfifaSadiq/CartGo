import React, { useRef, useState } from 'react';
import './AddToCart.css';

const AddToCart = () => {
  const inputRef = useRef(null);
  const [image, setImage] = useState(null);

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  return (
    <>
      <h2 className='upload-heading'>Upload QR Code</h2>
      <div className="add-to-cart-container">
        <div className="upload-to-scan" onClick={handleImageClick}>
          <img 
            src="/src/assets/upload.png"
            alt="upload pic"
          />
          <input
            type="file"
            ref={inputRef}
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
        </div>
        <div>
        {image && (
            <div className="preview">
              <img src={URL.createObjectURL(image)} alt="Preview" />
              <p>Preview</p>
            </div>
        )}
        </div>
      </div>
    </>
  );
};

export default AddToCart;
