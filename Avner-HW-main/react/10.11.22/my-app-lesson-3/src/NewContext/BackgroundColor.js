import React from 'react'
import Button from './Button'


export default function BackgroundColor() {
    return (
        <div>
            <h1>Change background color</h1>
            <Button
                color="black"
                text="Change the background color to black"
            />
            <Button
                color="white"
                text="Change the background color to white"
            />
        </div>
    )
}
