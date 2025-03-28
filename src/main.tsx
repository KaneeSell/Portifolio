import { createRoot } from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router'
import './styles/index.css'
import Home from './pages/Home'
import SobreMim from './pages/SobreMim'
import Projetos from './pages/Projetos'
import Contato from './pages/Contato'

createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sobre-mim' element={<SobreMim/>}/>
      <Route path='/projetos' element={<Projetos/>}/>
      <Route path='/contato' element={<Contato/>}/>
    </Routes>
  </HashRouter>
)
