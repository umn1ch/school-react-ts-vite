import React from 'react';
import { useTranslation } from 'react-i18next';
import useLocalStorage from '../hooks/use-localstorage';
import az from '../images/az.png'; 
import en from '../images/en.png';
import ru from '../images/ru.png';

const LanguageSwitcher: React.FC = () => {
  const { t, i18n } = useTranslation(); // Поменял местами t и i18n
  const [currentLanguage, setCurrentLanguage] = useLocalStorage<string>('language', 'en'); 
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng); 
  };

  return (
    <div className="language-switch">
      <img src={az} alt="Azerbaijan" width="35" onClick={() => changeLanguage('az')} />
      <img src={en} alt="UK" width="35" onClick={() => changeLanguage('en')} />
      <img src={ru} alt="Russia" width="35" onClick={() => changeLanguage('ru')} />
    </div>
  );
};

export default LanguageSwitcher;
