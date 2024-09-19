// import './App.css';
import { Outlet , useLocation} from 'react-router-dom';
import Header from './components/Header'


function App() {

  const location = useLocation();

  // Hide the header if on the Profile page (i.e., "/profile")
  const hideHeader = location.pathname === '/';

  return (
    <>
    {!hideHeader && <Header />} {/* Conditionally render the header */}
    <main>
      <Outlet />
    </main>
    {/* <Footer/> */}
  </>
);
}
    
    export default App;