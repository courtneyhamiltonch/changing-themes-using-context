import React, {useContext} from 'react'
import {ThemeContext} from "./themeContext";

export default function Main(){

    const context = useContext(ThemeContext)

    return(
<>
<p className={`main ${context.color}-theme`}>
    Click the button to toggle between light and dark mode!
</p>
<button onClick={context.ToggleTheme} className="button">Toggle</button>
</>
)
}