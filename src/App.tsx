import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  // Update background color
  const changeBgColor = async () => {
    console.log('sayHello Clicked')
    let [tab] = await chrome.tabs.query({ active: true })
    if (tab.id) {
      console.log({ 'tab.id': tab.id })
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
          document.body.style.backgroundColor = 'red'
        },
      })
    }
  }

  // Example Function
  const sayHello = () => {
    console.log('Hello World!')
  }

  // JSX
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
      <h1>My Chrome Extension</h1>
      <div className='card'>
        <button onClick={changeBgColor}>Click Me!</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </>
  )
}

export default App
