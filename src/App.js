import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ImageUpload from "./components/ImageUpload";
import PredictionOutput from "./components/PredictionOutput";
import axios from "axios";
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Route, Routes, useSearchParams } from 'react-router-dom';
import horseBefore from './images/horsebefore.jpg';
import horseAfter from './images/horseafter.jpg';
import GitHubIcon from '@mui/icons-material/GitHub';
import FooterSection from "./components/FooterSection";

const App = () => {
  const { i18n, t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [prediction, setPrediction] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setSearchParams({ lang: lng });
  };

  const handlePrediction = () => {
    if (image && image.file) {
      const formData = new FormData();
      formData.append("file", image.file);

      setLoading(true);

      axios
        .post(`${process.env.REACT_APP_API_URL}/predict`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response.data);
          const predictedClass = response.data.predicted_class.toUpperCase();
          const emojiMap = {
            airplane: "✈️",
            automobile: "🚗",
            bird: "🐦",
            cat: "🐱",
            deer: "🦌",
            dog: "🐶",
            frog: "🐸",
            horse: "🐴",
            ship: "🚢",
            truck: "🚚",
          };

          const emoji = emojiMap[predictedClass.toLowerCase()] || "";
          setPrediction(`${emoji} ${t(predictedClass)}`);
        })
        .catch((error) => {
          console.error("There was an error making the request:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar changeLanguage={changeLanguage} />
      <div className="flex justify-center items-center mt-12">
        <div className="p-6 w-full max-w-screen-xl bg-white rounded-lg shadow-lg">
          <h2 className="mb-6 text-2xl font-bold text-center">
            {t("Object Classifier")}
          </h2>
          <p className="mb-6 text-sm text-center text-gray-600">
            {t("I can tell if an image is of a...")} <br />
            {t("✈️ Airplane 🚗 Automobile 🐦 Bird 🐱 Cat 🦌 Deer 🐶 Dog 🐸 Frog 🐴 Horse 🚢 Ship 🚚 Truck")}
          </p>
          <ImageUpload
            image={image}
            setImage={setImage}
            setPrediction={setPrediction}
          />
          <div className="flex relative justify-center pb-7 border-b-2 border-gray-700">
            {image && image.file ? (
              <button
                className="px-5 py-2 font-bold bg-purple-400 rounded-lg shadow-md hover:bg-purple-500"
                onClick={handlePrediction}
              >
                {t("Predict!")}
              </button>
            ) : (
              <div className="group">
                <button
                  className="px-5 py-2 font-bold bg-gray-400 rounded-lg shadow-md cursor-not-allowed"
                  onClick={(e) => e.preventDefault()}
                  style={{ cursor: "not-allowed" }}
                >
                 { t("Predict!")}
                </button>
                <div className="hidden absolute bottom-full px-2 py-1 mb-2 text-xs text-white bg-black rounded group-hover:block">
                  {t("Must select image first!")}
                </div>
              </div>
            )}
          </div>
          <PredictionOutput prediction={prediction} loading={loading} />
          <div className="px-2 py-6 sm:px-16">
          <h1 className="font-bold text-left">{t("How This App Makes Predictions")}</h1>
          <p>
              {t("app_description")} <a href="#sources">[1]</a>{t("dataset_description")}
            </p>
            <p className="pt-3">
              {t("model_accuracy")}
            </p>
            <p className="pt-3">
              {t("code_and_dataset_link")}
            </p>
            <div className="flex justify-center pt-2">
            <button 
              className="flex justify-center items-center px-3 py-1 space-x-2 bg-blue-500 rounded-md shadow-md hover:bg-blue-700"
              onClick={() => window.open('https://github.com/JohnLinth/cnn-trainer-cifar-10', '_blank')}
            >
              <GitHubIcon />
              <span>{t("Check out the code")}</span>
            </button>
            </div>
            <h1 className="pt-5 font-bold text-left">{t("The Prediction Process (Step-by-Step)")}</h1>
            <p><span className="font-semibold">{t("step_1")}</span>: {t("step_1_description")}</p>
            <p className="font-semibold">{t("example")}</p>
            <div className="flex flex-col space-x-0 md:flex-row md:space-x-3">
              <img src={horseBefore} className="w-56 h-56" />
              <img src={horseAfter} className="w-56 h-56" />
            </div>
            <p className="pt-2"><span className="font-semibold">{t("step_2")}</span>: {t("step_2_description")}</p>
            <p className="pt-2"><span className="font-semibold">{t("step_3")}</span>: {t("step_3_description")}</p>
            <p className="pt-2"><span className="font-semibold">{t("step_4")}</span>: {t("step_4_description")}</p>

            <h1 className="pt-2 font-bold">{t("sources")}</h1>
            <ul>
              <li>[1] CIFAR-10 Dataset - <a href="https://www.cs.toronto.edu/~kriz/cifar.html" target="_blank">https://www.cs.toronto.edu/~kriz/cifar.html</a></li>
              <li>[2] 3Blue1Brown's Video Series on ML (epecially this video) - <a href="https://www.youtube.com/watch?v=KuXjwB4LzSA" target="_blank">https://www.youtube.com/watch?v=KuXjwB4LzSA</a></li>
            </ul>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default App;
