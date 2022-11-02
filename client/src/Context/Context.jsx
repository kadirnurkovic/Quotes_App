import { createContext, useState } from "react";

const QuotesContext = createContext();

const QuotesContextProvider = ({children}) => {

    const [token, setToken] = useState(null);
    const [login, setLogin] = useState(false);
    const values = {
        token,
        setToken,
        setLogin
    }
    return(
    <div>
       <QuotesContext.Provider value={values}>
           {children}
       </QuotesContext.Provider>
    </div>
  )
}

export { QuotesContext, QuotesContextProvider }