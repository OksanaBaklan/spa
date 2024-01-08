import React from "react";
import { useContext } from "react";
import { LanguageContext } from "../LanguageContext.js/LanguageContext";

function LanguageChooser() {

    const {language, setLanguage} = useContext(LanguageContext)

    const handleChange = (e) =>{
        setLanguage(e.currentTarget.value)


    }
  return (
    <select className="form-select" aria-label="Default select example" value={language} onChange={handleChange}>
      <option selected>Open this select menu</option>
      <option value="Eng">Eng</option>
      <option value="Ger">Ger</option>
      <option value="Itl">Itl</option>
    </select>
  );
}

export default LanguageChooser;
