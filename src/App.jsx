
import Header from './layouts/header';
import Footer from './layouts/footer';
import { Outlet } from 'react-router-dom';
import { getAccountAPI } from './services/api.services';
import { useEffect, useContext } from 'react';
import { AuthContext } from './components/context/auth.context';


const App = () => {
  const { setUser } = useContext(AuthContext);
  useEffect(() => {
    fetchUserInfo();
  }, [])

  const fetchUserInfo = async () => {
    const res = await getAccountAPI();
    if (res.data) {
      setUser(res.data.user);
      console.log(">>> check user data: ", res.data)
    }
  }

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
