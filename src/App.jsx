import './App.css';
import './components/atoms/buttons/Buttons.css';
import './components/atoms/others/others.css'
import './components/atoms/formsParts/FormParts.css';
import './components/molecules/molecules.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/templates/Home';
import LogInForm from './components/molecules/forms/LoginForm';
import HeaderNavbar from './components/molecules/HeaderNavbar';
import RegisterForm from './components/molecules/forms/RegisterForm';
import { createRoutesSlice } from './store/slices/createRoutesSlice';
import MessageManager from './components/molecules/messageManager/MessageManager';

function App() {

  const { routes } = createRoutesSlice();

  return (
    <>
      <Router>
      <MessageManager />
        <HeaderNavbar />
          <Routes>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.login} element={<LogInForm />} />
            <Route path={routes.register} element={<RegisterForm />} />
        </Routes>
      </Router>
    </>
  )
}

export default App