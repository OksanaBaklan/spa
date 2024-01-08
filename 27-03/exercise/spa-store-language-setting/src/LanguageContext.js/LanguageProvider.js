import React,  {useState} from 'react'
import { useEffect } from 'react';
import { LanguageContext } from './LanguageContext';

function LanguageProvider({children}) {
    const [language, setLanguage] = useState("Ger");
   useEffect(()=>console.log("rerendered", language))

    return (
        <LanguageContext.Provider value={{language, setLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageProvider
