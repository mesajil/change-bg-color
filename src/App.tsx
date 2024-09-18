import { useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [color, setColor] = useState<string>('')

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
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Update Background Color</h1>
      <div className='card'>
        <div>
          <input type='color' className='color-circle' onChange={handleColorChange} />
        </div>
        <h2>Selected color: {color}</h2>
      </div>
    </>
  )
}

export default App
