import './App.css';
import './components/atoms/buttons/Buttons.css';
import './components/atoms/formsParts/FormParts.css';
import './components/molecules/molecules.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MessageManager from './components/molecules/messageManager/MessageManager';
import { useState } from 'react';
import Home from './components/templates/Home';
import LogInForm from './components/molecules/forms/LoginForm';
import AppContext from './AppContext';

function App() {

  // Se comparte el token por contexto con toda la app, cuando se loguea el usuario se setea el mismo.
  // Se puede a partir de esto, chequear el token ante consultas a base de dato.
  const [token, setToken] = useState(null);
  // TODO: Se puede sino hacer un useEffect, que cada vez que reenderise el App consulte al back si el token
  // TODO: es valido y solo manejarlo aca, sin contexto.
  
  const routes = {
      home: '/',
      login: '/login',
      register: '/register'
  }

  return (
    <>
      <Router>
      <AppContext.Provider value={{ token, setToken, routes,  }}>
      <MessageManager>
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.login} element={<LogInForm />} />
      </Routes>
      </MessageManager>
      </AppContext.Provider>
      </Router>
    </>
  )
}

export default App