import Login from './components/Login/Login';
import Home from './components/Home/Home';
import { useSelector } from 'react-redux';
function App() {

  const isLogged = useSelector(state => state.auth.isLogged);

  return (
    <>
      {!isLogged && <Login />}
      {isLogged && <Home />}
    </>
  );
}

export default App;
