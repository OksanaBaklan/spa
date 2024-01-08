import React from "react";
import { useContext } from "react";
import { LanguageContext } from "../LanguageContext.js/LanguageContext";

function WelcomeMessage() {
  const { language } = useContext(LanguageContext);


  // If you want to make your code more cleaner you can declare messages as key value pair in object
  // This is one way for conditional rendering

  console.log(useContext(LanguageContext));
  const messages = {
    Eng: "Hello World",
    Ger: "Hallo Welt",
    Itl: "Ciao Mondo",
  };
  return (
    <div>
      <p>{language}</p>
      {console.log("language in wel", language)}
      <h2>{messages[language]}</h2>

      {/* It is second way for conditional rendering */}

      {/*   
        {language === "Eng" && <h1>Hello World</h1>}
        {language === "Ger" && <h1>Hallo Welt</h1>}
        {language === "Itl" && <h1>Ciao mondo</h1>} 
      */}

      {/* 
        Third way for conditional rendering: 

       {language === "Eng" ? (
        <h1>Hello World</h1>
      ) : language === "Ger" ? (
        <h1>Hallo Welt</h1>
      ) : (
        <h1>In Italian</h1>
      )} 
      */}
    </div>
  );
}

export default WelcomeMessage;
