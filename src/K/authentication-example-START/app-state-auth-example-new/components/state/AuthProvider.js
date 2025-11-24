// ~/components/state/AuthProvider.js

import { useState, useContext, createContext } from 'react';
import { login } from '@/utils/api/auth';

export const AuthenticationContext = createContext({});

// "custom hook" with default argument as a "convenience function" for consumers
export const useAuth = () => {
    const context = useContext(AuthenticationContext);
    if(!context) {
        throw new Error(`useAuth must be used with a AuthProvider component`);
    }
    return context;
}

export default function AuthProvider({children}) {
    // token - this contains the "access token" that our API will use for authenticating rest API requests
    const [token, setToken] = useState("");
    // user - details on the user
    const [user, setUser] = useState();
    // isAuthenticated - just a simple boolean
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // make the api request to sign in and then define the state.
    const signIn = ({email, password}) => {
        return login({email, password}).then((loginData) => {
            /*
                Note: This is going to contain both the access token and the user.
                This is not always the case with a login endpoint.
                For the response, please refer to
                https://www.npmjs.com/package/json-server-auth
            */
           setIsAuthenticated(true);
           setToken(loginData.accessToken);
           setUser(loginData.user);
        });
    }

    const signOut = () => {
        setIsAuthenticated(false);
        setUser();
        setToken("");
    }

    return <AuthenticationContext.Provider 
        value={ {token, user, isAuthenticated, signIn, signOut} }>
        {children}
    </AuthenticationContext.Provider>
}

