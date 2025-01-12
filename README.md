# CIFAR CNN Image Classifier
A web interface for a Convolutional Neural Network (CNN) trained on the CIFAR-10 dataset. The application can classify images into 10 different categories:

🎯 **Categories**: 
- ✈️ Airplane 
- 🚗 Automobile 
- 🐦 Bird 
- 🐱 Cat 
- 🦌 Deer 
- 🐶 Dog 
- 🐸 Frog 
- 🐴 Horse 
- 🚢 Ship 
- 🚚 Truck

## Features

- 📸 Drag-and-drop or click-to-upload image interface
- 🔄 Real-time image classification
- 🌐 Supports English and German languages
- 📱 Responsive design for mobile and desktop
- ℹ️ Detailed explanation of CNN operation

## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Python Flask API
- **ML Model**: TensorFlow/Keras CNN
- **Dataset**: CIFAR-10

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/cifar-cnn-website.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```bash
   REACT_APP_API_URL=http://your-api-url:5000
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## How It Works

1. **Image Upload**: User uploads or drops an image
2. **Preprocessing**: Image is resized to 32x32 pixels
3. **Classification**: CNN processes the image through multiple layers
4. **Prediction**: Model outputs the most likely category

## Model Architecture

The CNN model was trained on the CIFAR-10 dataset and achieves approximately 72% accuracy. It uses:
- Convolutional layers for feature extraction
- Max pooling layers for dimensionality reduction
- Dense layers for final classification

The model training code and scripts can be found here: [cnn-trainer-cifar-10](https://github.com/JohnLinth/cnn-trainer-cifar-10)

## Resources

- [CIFAR-10 Dataset](https://www.cs.toronto.edu/~kriz/cifar.html)
- [CNN Explanation Video](https://www.youtube.com/watch?v=KuXjwB4LzSA)
- [Model Training Repository](https://github.com/JohnLinth/cnn-trainer-cifar-10)

## License

MIT License - feel free to use this project for learning and development!
