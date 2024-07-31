import React, {useContext} from 'react'
import {ThemeContext} from "./themeContext";

export default function Footer(){

    const context = useContext(ThemeContext)

    return(
<>
{/* <footer className={`footer ${varName of your context useState}-theme`}> */}
<footer className={`footer ${context.color}-theme`}>
    Courtney Hamilton
</footer>
</>
)
}