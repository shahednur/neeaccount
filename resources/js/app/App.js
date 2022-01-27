import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import Loadable from 'react-loadable';

import './css/style.scss';

import './charts/ChartjsConfig';

import Report from './pages/Report';
import { SemipolarLoading } from 'react-loadingg'
import Bus from './utils/Bus';

const Dashboard = Loadable({
  loader: () => import('./pages/Dashboard'),
  loading: SemipolarLoading,
});
const BalanceSheet = Loadable({
  loader: () => import('./pages/BalanceSheet'),
  loading: SemipolarLoading,
});
const Journal = Loadable({
  loader: () => import('./pages/Journal'),
  loading: SemipolarLoading,
});
const Transaction = Loadable({
  loader: () => import('./pages/Transaction'),
  loading: SemipolarLoading,
});
const Configuration = Loadable({
  loader: () => import('./pages/Configuration'),
  loading: SemipolarLoading,
});
const Region = Loadable({
  loader: () => import('./pages/Region'),
  loading: SemipolarLoading,
});
const Country = Loadable({
  loader: () => import('./pages/Country'),
  loading: SemipolarLoading,
});
const Unit = Loadable({
  loader: () => import('./pages/Unit'),
  loading: SemipolarLoading,
});
const Industry = Loadable({
  loader: () => import('./pages/Industry'),
  loading: SemipolarLoading,
});
const Currency = Loadable({
  loader: () => import('./pages/Currency'),
  loading: SemipolarLoading,
});
const Customer = Loadable({
  loader: () => import('./pages/Customer'),
  loading: SemipolarLoading,
});
const AddCustomer = Loadable({
  loader: () => import('./pages/AddCustomer'),
  loading: SemipolarLoading,
});

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change
  window.flash = (message, type="success") => Bus.emit('flash', ({message, type}));
  return (
    <>
      <Routes>
        <Route path="/add-customers" element={<AddCustomer />} />
        <Route path="/customers" element={<Customer />} />
        <Route path="/currency" element={<Currency />} />
        <Route path="/industry" element={<Industry />} />
        <Route path="/unit" element={<Unit />} />
        <Route path="/country" element={<Country />} />
        <Route path="/region" element={<Region />} />
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
