import React from "react";
import { useTranslation } from "react-i18next";

const PredictionOutput = ({ prediction, loading }) => {
    const { t } = useTranslation();

  return (
    <div className="text-center">
      <p className="mb-4 text-gray-700">{t("This image was predicted to be a...")}</p>
      <button className="px-4 py-2 text-xl text-white rounded-lg bg-slate-500">
        {loading ? t("Waiting for prediction...") : prediction || t("No prediction yet.")}
      </button>
      <p className="font-light">{t("be patient, sometimes the prediction can take a few seconds...")}</p>
    </div>
  );
};

export default PredictionOutput;
