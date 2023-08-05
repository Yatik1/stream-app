import { useEffect } from 'react'
import './App.scss'
import { fetchDataFromApi } from './utils/api'
import { useDispatch, useSelector } from 'react-redux'
import { getApiConfiguration } from './store/homeSlice'

function App() {
  
  const dispatch= useDispatch()
  const {url} = useSelector((state) => state.home);
  console.log(url)
   
  useEffect(() => {
    fetchData()
   },[])

  const fetchData = () => {
    fetchDataFromApi( "/movie/popular")
      .then((res) => {
        // console.log(res)
        dispatch(getApiConfiguration(res))
      })
  }

  return (
    <div className='App'>
      <h1>App</h1>
      {url?.total_pages}
    </div>
  )
}

export default App
