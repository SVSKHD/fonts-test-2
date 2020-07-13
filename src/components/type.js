import React from 'react'
import Typed from "react-typed"

export default function Type() {
    return (
        <div>
        <div className="type">
        <Typed
        strings={["🤖Get yourself the best tech😎", "🤖Get yourself a close look on tech 👽 ", "🤖Get yourself well versed with tech 🦿"]}
        typeSpeed={80}
        backSpeed={40}
        backDelay={1}
        loop
        smartBackspace
        cursorChar="|"
        />
        </div>
        </div>
    )
}
