import React from 'react';
import { Route, Routes, useLocation, useParams } from 'react-router-dom';

import Header from './components/Header';
import Button from './components/Button';
import Clients from './components/Clients';
import ClientID from './components/ClientID';

import styles from './App.module.css';

function App() {
  const { pathname } = useLocation();

  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className={styles.actions}>
          {pathname === "/" ? (
            <Button to="/">Pegar clientes</Button>
          ) : (
            <Button to="/">Voltar</Button>
          )}
        </div>
        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<Clients />} />
            <Route path="/client/:id" element={<ClientID />} />
          </Routes>
        </div>
      </main>
    </>
  )
}

export default App
