import { useEffect } from 'react'
import './App.scss'
import { fetchDataFromApi } from './utils/api'

function App() {
  
   useEffect(() => {
    fetchData()
   },[])

  const fetchData = () => {
    fetchDataFromApi( "/movie/popular")
      .then((res) => {
        console.log(res)
      })
  }

  return (
    <div className='App'>
      <h1>App</h1>
    </div>
  )
}

export default App
