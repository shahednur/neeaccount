import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.scss';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import BalanceSheet from './pages/BalanceSheet';
import Journal from './pages/Journal';
import Report from './pages/Report';
import Configuration from './pages/Configuration';
import Transaction from './pages/Transaction';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route path="/balance-sheet" element={<BalanceSheet />} />
        <Route path="/report" element={<Report />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/configuration" element={<Configuration />} />
        <Route exact="true" path="/" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
