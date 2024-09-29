import React, { useEffect, useState } from 'react'
import './App.css'
import Footer from './popup/Footer/Footer'
import { defaultColor, rgbToHex } from './lib/color'

function App() {
  const [bgColor, setBgColor] = useState<string>(defaultColor)

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
      const [{ result: pageBgColor }] = await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => window.getComputedStyle(document.body).backgroundColor,
      })
      setBgColor(rgbToHex(pageBgColor) || defaultColor)
    }
  }

  // UseEffect to get the background color when the component mounts
  useEffect(() => {
    getCurrentBgColor()
  }, [])

  // Handler for color change event
  const onColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedColor = e.currentTarget.value
    setBgColor(selectedColor)
    changeBgColor(selectedColor)
  }

  // Popup
  return (
    <>
      <div></div>
      <h1>Click to Change the Color</h1>
      <div className='card'>
        <div>
          <input type='color' className='color-circle' onChange={onColorChange} value={bgColor} />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
