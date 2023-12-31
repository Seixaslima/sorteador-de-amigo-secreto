import Configuracao from 'paginas/Configuracao';
import Sorteio from 'paginas/Sorteio';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<Configuracao />} />
          <Route path='/sorteio' element={<Sorteio />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
