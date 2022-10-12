import React from 'react';

React.createContext('benim stateim!');

// Bir component değil context oluşturuyoruz.
const AuthContext = React.createContext({
    isLoggedIn: false
});

export default AuthContext;