import React from 'react';

type AuthUser = {
    name: string;
    email: string;
};

export const User = () => {

    const [user, setUser] = React.useState<null | AuthUser>(null);
    // React.useState<AuthUser>({} as AuthUser);

    const handleLogin = () => {
        setUser({
            name: 'Sujin',
            email: 'sujinsr2457@gmail.com'
        });
    }
    const handleLogout = () => {
        setUser(null);
    };

  return (
    <React.Fragment>
       <button onClick={handleLogin}>Login</button>
       <button onClick={handleLogout}>Logout</button>
       <div>
       {
         user ? (
                <div>user name is {user.name} <br /> user email is {user.email}</div>
         ): <div>Logged out</div>
       }  
     </div>
         
    </React.Fragment>
  );
};
