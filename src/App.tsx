import React, { useState, useEffect } from 'react'
import './App.css'
import Footer from './popup/Footer/Footer'
import { black, hexToRgb, rgbToHex } from './utils/utils'

function App() {
  const [color, setColor] = useState<string>(black)

  // Function to update background color
  const changeBgColor = async (newColor: string) => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
    if (tab?.id) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        args: [newColor],
        func: (color: string) => {
          document.body.style.backgroundColor = color
        },
      })
    }
  }

  // Function to get the current background color of the page
  const getCurrentBgColor = async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
    if (tab?.id) {
      const [{ result: bgColor }] = await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
          const bgColor = window.getComputedStyle(document.body).backgroundColor
          return bgColor
        },
      })

      // Convert RGB color to Hex
      setColor(rgbToHex(bgColor) || black)
    }
  }

  // UseEffect to get the background color when the component mounts
  useEffect(() => {
    getCurrentBgColor()
  }, [])

  // Handler for color change event
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const hexColor: string = e.currentTarget.value
    setColor(hexColor)
    changeBgColor(hexColor)
  }

  // Popup
  return (
    <>
      <div></div>
      <h1>Change Background Color</h1>
      <div className='card'>
        <div>
          <input type='color' className='color-circle' onChange={handleColorChange} value={color} />
        </div>
        <h2>{hexToRgb(color).toUpperCase()}</h2>
        <Footer />
      </div>
    </>
  )
}

export default App
