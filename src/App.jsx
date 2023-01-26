import Home from './pages/Home'
import './App.css'
import { HashRouter, Routes, Route, Outlet } from 'react-router-dom'
import Pokedex from './pages/Pokedex'
import Pokemon from './pages/Pokemon'
import ProtectedRoutes from './pages/ProtectedRoutes'

function App() {
  
  return (
    <HashRouter> 
      <div className="App">
        <Routes> 
          <Route
            path='/'
            element={<Home/>}
          /> 
          <Route element={<ProtectedRoutes/>}>   
            <Route
              path='/pokedex'
              element={<Pokedex/>}
            />
            <Route
              path='/pokedex/:id'
              element={<Pokemon/>}
            />
          </Route>
        </Routes>
      </div>
    </HashRouter>
  )
}
export default App
