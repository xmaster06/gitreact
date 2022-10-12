import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

import AuthContext from './store/auth-context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginInformation = localStorage.getItem('isLoggedIn');

  useEffect(()=>{
    // localStorage de bilgi varsa giriş yap
    // Her renderda yeniden setIsLoggedIn(true)
    // çalışmasın diye UseEffect ten yararlanıyoruz
    if(loginInformation === '1'){
      setIsLoggedIn(true);
    }
  },[]); //Uygulama başadığında bir kez çalışır

  const loginHandler = (email, password) => {
    // localStorage e giriş bilgilerini kaydet
    localStorage.setItem('isLoggedIn','1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    // localStorage giriş bilgilerini sil
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };
// AuthContexte tüm uygulamada ihtiyacımız olduğu için
// Onu burada kullanıyoruz! Bu sayede Auth.Provider 'ın 
// tüm child ları AuthContext e erişebilir.
// AuthContent.Provider sarmaladığı için React.Fragment a ihtiyacımız yok.

  return (
    <AuthContext.Provider 
        value={{
            isLoggedIn:isLoggedIn,
            onLogout:logoutHandler
        }}>
      <MainHeader/>
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
