import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleChange = (e) => {
    const selectedLang = e.target.value;
    i18n.changeLanguage(selectedLang);
    document.body.dir = selectedLang === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <select onChange={handleChange} value={i18n.language}>
      <option value="en">🇬🇧 English</option>
      <option value="ar">🇸🇦 العربية</option>
    </select>
  );
};

export default LanguageSwitcher;
