import { useState } from 'react'
import './App.css'
import Footer from './popup/Footer/Footer'

function App() {
  const [color, setColor] = useState<string>('#000')

  // Function to update background color
  const changeBgColor = async (newColor: string) => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
    if (tab.id) {
      console.log({ 'tab.id': tab.id })
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        args: [newColor],
        func: (color: string) => {
          document.body.style.backgroundColor = color
        },
      })
    }
  }

  // Handler for color change event
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor: string = e.currentTarget.value
    setColor(newColor)
    changeBgColor(newColor)
  }

  // Popup
  return (
    <>
      <div></div>
      <h1>Update Background Color</h1>
      <div className='card'>
        <h2>Selected color: {color}</h2>
        <div>
          <input type='color' className='color-circle' onChange={handleColorChange} />
        </div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
