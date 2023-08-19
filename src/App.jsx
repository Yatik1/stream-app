import { useEffect } from 'react'
import './App.scss'
import { fetchDataFromApi } from './utils/api'
import { useDispatch, useSelector } from 'react-redux'
import { getApiConfiguration , getGenres} from './store/homeSlice'
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
    fetchApiConfig()
    genresCall()
   },[])

  const fetchApiConfig = () => {
    fetchDataFromApi( "/configuration")
      .then((res) => {
        console.log(res)
        
        const url = {
          backdrop: res.images.secure_base_url + "original",
          poster: res.images.secure_base_url + "original",
          profile: res.images.secure_base_url + "original",      
        } 
        
        dispatch(getApiConfiguration(url))
      })
  }
  
  const genresCall =  async () => {
       let promises = [];
       let endPoints = ['tv','movie']
       let allGenres = {};

       endPoints.forEach((url) => {
        promises.push(fetchDataFromApi(`/genre/${url}/list`))
       })

       const data = await Promise.all(promises);
       console.log(data); 

       data.map(({genres}) => {
        return genres.map((item) => (allGenres[item.id] = item))
       })
        dispatch(getGenres(allGenres));
  }

  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
           <Route path='/' element={<HomePage />} />
           <Route path='/explore/:mediaType' element={<Explore />} />
           <Route path='/:mediaType/:id' element={<Details />} />
           <Route path='/search/:query' element={<SearchResult />}/>
           <Route path='*' element={<PageNotFound />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
