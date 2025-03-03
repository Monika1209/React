import { useLanguage } from "./LanguageContext";

const LanguageSelector = () => {
  const { changeLanguage } = useLanguage();

  return (
    <select onChange={(e) => changeLanguage(e.target.value)}>
      <option value="en">English</option>
      <option value="es">Español</option>
      <option value="fr">Français</option>
      <option value="hi">हिन्दी</option>
    </select>
  );
};

export default LanguageSelector;
