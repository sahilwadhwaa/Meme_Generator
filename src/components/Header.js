import React from "react"

export default function Header(){
    return(
        <header className="header">
            <img 
                src="./images/Troll Face.png" 
                className="header--image" alt="troll-face"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React - Project</h4>
        </header>
    )
}