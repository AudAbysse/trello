import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Tasks from './pages/Tasks'
import ApplicationContextProvider from './context/ApplicationContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ApplicationContextProvider>
      <>
        <Header />
        <Tasks />
        <Footer />
      </>
    </ApplicationContextProvider>
  )
}

export default App
