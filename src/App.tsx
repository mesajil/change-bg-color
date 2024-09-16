import { useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [color, setColor] = useState('')

  // Update background color
  const changeBgColor = async () => {
    console.log('sayHello Clicked')
    let [tab] = await chrome.tabs.query({ active: true })
    if (tab.id) {
      console.log({ 'tab.id': tab.id })
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        args: [color],
        func: color => {
          document.body.style.backgroundColor = color
        },
      })
    }
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
      <h1>Update Bg Color</h1>
      <div className='card'>
        <div>
          <input type='color' className='color-circle' onChange={e => setColor(e.currentTarget.value)}></input>
        </div>
        <h2>Color selected: {color}</h2>
        <button
          onClick={changeBgColor}
          style={{
            backgroundColor: color,
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
          }}>
          Apply
        </button>
      </div>
    </>
  )
}

export default App
