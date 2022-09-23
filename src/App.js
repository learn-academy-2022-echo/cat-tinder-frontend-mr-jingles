import React, {useState} from 'react'
import { Routes, Route } from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import CatIndex from './pages/CatIndex'
import CatShow from './pages/CatShow'
import CatNew from './pages/CatNew'
import CatEdit from './pages/CatEdit'
import NotFound from './pages/NotFound'
import mockCats from "./mockCats"


function App() {
  const [cats, setCats] = useState(mockCats)
  console.log(cats)

const createCat =(cat) =>{
  console.log(cat)
}

const updateCat = (cat, id) => {
  console.log("cat:", cat);
  console.log("id:", id);
}

  return (
    <>
   <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/CatIndex" element={<CatIndex cats={cats}/>}/>
      <Route path="/CatShow/:id" element={<CatShow cats={cats} updateCat={updateCat}/>}/>
      <Route path="/CatNew" element={<CatNew createCat={createCat}/>}/>
      <Route path="/CatEdit/:id" element={<CatEdit cats={cats} updateCat={updateCat}/>}/>
      <Route path="/*" element={<NotFound/>}/>
    </Routes>
   <Footer/>
    </>
  );
}

export default App;
