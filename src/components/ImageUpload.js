import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";

const ImageUpload = ({ image, setImage }) => {
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef(null); 
  const { t } = useTranslation();

  const handleImageUpload = (file) => {
    setImage({
      preview: URL.createObjectURL(file), 
      file: file, 
    });
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleImageUpload(file);
    }
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      handleImageUpload(file);
    }
  };

  const resetImage = () => {
    setImage(null);
  };

  const triggerFileSelect = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="relative mb-6">
      <div
        className={`block w-full h-64 border-2 border-dashed ${
          dragging ? "border-blue-600" : "border-blue-500"
        } flex justify-center items-center cursor-pointer bg-blue-200 text-center text-white relative`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={triggerFileSelect} 
      >
        {image ? (
          <>
            <img src={image.preview} alt="Uploaded" className="object-contain h-full" />
            <button
              onClick={(e) => {
                e.stopPropagation();
                resetImage();
              }}
              className="absolute flex items-center justify-center w-6 h-6 text-white bg-red-500 rounded-full top-2 right-2"
            >
              X
            </button>
          </>
        ) : (
          <span>{dragging ? t("Drop image here") : t("Click or Drop Image")}</span>
        )}
      </div>
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
        ref={fileInputRef} 
      />
    </div>
  );
};

export default ImageUpload;
