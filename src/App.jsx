import { useEffect } from 'react'
import './App.scss'
import { fetchDataFromApi } from './utils/api'
import { useDispatch, useSelector } from 'react-redux'
import { getApiConfiguration } from './store/homeSlice'

import { BrowserRouter,Routes,Route } from 'react-router-dom'

import HomePage from './pages/home/HomePage'
import Details from './pages/details/Details'
import Explore from './pages/explore/Explore'
import SearchResult from './pages/searchResult/searchResult'
import PageNotFound from './pages/404/pageNotFound'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

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
      <Header />
      <BrowserRouter>
        <Routes>
           <Route path='/' element={<HomePage />} />
           <Route path='/explore/:mediaType' element={<Explore />} />
           <Route path='/:mediaType/:id' element={<Details />} />
           <Route path='/search/:query' element={<SearchResult />}/>
           <Route path='*' element={<PageNotFound />}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
