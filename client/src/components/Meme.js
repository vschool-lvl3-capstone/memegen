import React, { useState, useEffect } from "react"
import axios from "axios"

export default function Meme() {
//  created state to track Top-Bottom texts and current meme
//  created state array to track our saved user created memes 
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemes, setAllMemes] = useState([])


//  our useEffect function to make out api call
    
    useEffect(() => {
        console.log("useffect triggered")
        axios.get('https://api.imgflip.com/get_memes')
        
        .then(res => {console.log(res.data.data.memes) 
            setAllMemes(res.data.data.memes)})
        .catch(error => console.log(error))
        
      }, []);


//  getMemeImage function to grab our random meme

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }

// handleChange function to add text

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }


    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt=""/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            <button>SAVE MY CREATIVE MEME</button>
        </main>
    )
}
//yayayayaya