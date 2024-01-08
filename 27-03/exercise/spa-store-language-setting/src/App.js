import { useState } from "react";
import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";
import { LanguageContext } from "./LanguageContext.js/LanguageContext";
import LanguageProvider from "./LanguageContext.js/LanguageProvider";

function App() {
  const [language, setLanguage] = useState("Eng");
  return (
    /* Another Cleaner way of using Context Api */
    /* Was not working because we were creating two different Context Providers   */
    /* To solve the issue you can simply wrap the Header and Content inside one LanguageProvider */
    <div className="App">
      Language Apps
      <LanguageProvider>
        <Header />
        <Content />
      </LanguageProvider>
    </div> 

   /*  <div className="App">
      <h3 lang="EN">
        Language App
        </h3>
      <LanguageContext.Provider value={{language, setLanguage}}>
        <Header />
        <Content />
      </LanguageContext.Provider> 
      </div>
      */
  );
}

export default App;
