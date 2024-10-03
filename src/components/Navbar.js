import {useState} from "react";
import { useTranslation } from 'react-i18next';


const Navbar = ({changeLanguage}) => {
    const { t } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState('en');

    const toggleLanguage = () => {
        const newLanguage = currentLanguage === 'en' ? 'de' : 'en';
        setCurrentLanguage(newLanguage);
        changeLanguage(newLanguage);
      };

  return (
    <nav className="bg-purple-600 p-4 flex justify-between items-center">
    <h1 className="text-white text-xl font-semibold">
      {t("title")}
    </h1>
    <button onClick={toggleLanguage}>
    <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 focus:outline-none"
            >
              <img
                src={
                  currentLanguage === 'en'
                    ? 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg'
                    : 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg'
                }
                alt={currentLanguage === 'en' ? 'English' : 'German'}
                className="w-6 h-6"
              />
            </button>
    </button>
  </nav>
  );
};

export default Navbar;