import './App.scss';
import { Menu } from './components/Menu';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { DriftPage } from './pages/DriftPage';
import { TimeAttackPage } from './pages/TimeAttackPage';
import { ForzaPage } from './pages/ForzaPage';

function App() {
  return (
    <>
    <header>
      <Menu />
    </header>
    
    <main className='page'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/drift' element={<DriftPage />} />
        <Route path='/timeattack' element={<TimeAttackPage />} />
        <Route path='/forza' element={<ForzaPage />} />
      </Routes>
    </main>
    </>
  );
}

export default App;
