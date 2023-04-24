import './index.css'

import { BrowserRouter, Routes, Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Intro from './components/Intro';
import Programs from './components/Programs';
import Donate from './components/Donate';
import Benefactors from './components/Benefactors';
import Footer from './components/Footer';
import Disasters from './components/Disasters';
import Environment from './components/Environment';
import NewsAlerts from './components/NewsAlerts';
import Case from './components/Case';
import Members from './components/Members';
import Numbers from './components/Numbers';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Intro />
        <Programs />
        <Numbers />
        <Disasters />
        <Donate />
        <Benefactors />
        <Case />
        <Members />
        <Environment />
        <NewsAlerts />
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
