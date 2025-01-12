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
        className="block flex justify-center items-center w-full h-64 text-center text-white bg-blue-200 border-2 border-blue-500 border-dashed cursor-pointer"
      >
        {image ? (
          <img src={image} alt="Uploaded" className="object-contain h-full" />
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
