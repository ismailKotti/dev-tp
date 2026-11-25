import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import FilmList from './pages/FilmList'

function App() {
  const [activePage, setActivePage] = useState('accueil')

  return (
    <div>
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      <main style={{ padding: '20px' }}>
        {activePage === 'accueil' && <Home setActivePage={setActivePage} />}
        {activePage === 'films' && <FilmList />}
        {activePage === 'ajouter' && <h1>Ajouter un film</h1>}
        {activePage === 'favoris' && <h1>Favoris</h1>}
      </main>
    </div>
  )
}

export default App
