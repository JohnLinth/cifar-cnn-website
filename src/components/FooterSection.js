import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import { useTranslation } from 'react-i18next';

const FooterSection = () => {
    const { t } = useTranslation();

  return (
    <footer className="py-4 text-white bg-gradient-to-r from-blue-600 to-blue-800">
  <div className='flex justify-between max-w-6xl mx-auto'>
    <div className="flex flex-col">
      <p className="mb-2">
        {t("designed and developed by john linthicum © sep. 2024")}
      </p>
      <div className="flex items-center">
        <button onClick={() => window.location.href = "https://johnlinth.dev"} className="px-2 py-1 font-bold text-black rounded-md bg-slate-300 hover:underline">
          johnlinth.dev
        </button>
      </div>
    </div>
    <div className="flex flex-col space-x-4">
        <p>{t("created with")}</p>
        <div className='flex flex-row justify-end'>
            <p>hi</p>
            <p>hi</p>
            <p>hi</p>
        {/* Icons 
      <ReactIcon className="w-6 h-6" />
      <TailwindIcon className="w-6 h-6" />
      <NodeJSIcon className="w-6 h-6" />
      */}
        </div>
    </div>
  </div>
</footer>

  )
}

export default FooterSection