import React, {useState} from "react";

const ThemeContext = React.createContext()

function ThemeContextProvider(props){
  
        const [color, setColor] = useState("dark")
      
        const ToggleTheme = () => {
          setColor(prevColor => prevColor === "dark" ? "light" : "dark")
        }

    return(
        <ThemeContext.Provider value={{
            color: color,
            ToggleTheme: ToggleTheme
          }}>
          {props.children}
          </ThemeContext.Provider>  
    )
}

export  {ThemeContext, ThemeContextProvider}