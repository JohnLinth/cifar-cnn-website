import React, { useState } from "react";

const ImageUpload = ({ setPrediction, model }) => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));

    // Simulate prediction logic based on the selected model
    if (model === "CIFAR-10") {
      setPrediction("Horse"); // Example prediction for CIFAR-10
    } else if (model === "CIFAR-100") {
      setPrediction("Apple"); // Example prediction for CIFAR-100
    }
  };

  return (
    <div className="mb-6">
      <label
        htmlFor="file-upload"
        className="block w-full h-64 border-2 border-dashed border-blue-500 flex justify-center items-center cursor-pointer bg-blue-200 text-center text-white"
      >
        {image ? (
          <img src={image} alt="Uploaded" className="h-full object-contain" />
        ) : (
          <span>Choose Image</span>
        )}
      </label>
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />
    </div>
  );
};

export default ImageUpload;
