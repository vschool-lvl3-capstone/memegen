import React from "react"
import Image from "../images/troll-face.png"

export default function Header() {
    return (
        <header className="header">
            <img src={Image} className="header--image"/>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
            {/* <h5 className='header--project'>By Kyle Schutt and Angela Ellsworth</h5> */}
        </header>
    )
}