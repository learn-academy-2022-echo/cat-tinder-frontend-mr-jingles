import React, {usetState} from 'react'
import { Routes, Route } from "react-router-dom"
import Header from './compnonents/Header'
import Footer from './compnonents/Footer'
import Home from './pages/Home'
import CatIndex from './pages/CatIndex'
import CatShow from './pages/CatShow'
import CatNew from './pages/CatNew'
import CatEdit from './pages/CatEdit'
import NotFound from './pages/NotFound'
import mockCats from "./mockCats"



function App() {
  const [cats, setCats] = useState(mockCats)
  return (
    <>
   <Header/>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/catindex" element={<CatIndex/>}/>
    <Route path="/catshow" element={<CatShow/>}/>
    <Route path="/catnew" element={<CatNew/>}/>
    <Route path="/catedit" element={<CatEdit/>}/>
    <Route path="/*" element={<NotFound/>}/>
   </Routes>
   <Footer/>
    </>
  );
}

export default App;