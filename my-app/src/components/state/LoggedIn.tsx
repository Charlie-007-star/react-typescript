import React from 'react';

export const LoggedIn = () => {

    const [isLoggedIn , setIsLoggedIn] = React.useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    }
    const handleLogout = () => {
        setIsLoggedIn(false);
    }

  return (
    <React.Fragment>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div>User is {isLoggedIn? 'logged In' : 'logged out'}</div>
    </React.Fragment>
  );
};
