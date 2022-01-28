import { useState, createContext } from "react"
import { login } from '../../services/LoginService';



const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState({ isAuthenticated: false, token: '' });

    const signIn = async (param, callback) => {

        const response = await login(param);

        if (response.error) {
            setTimeout(1000, callback({
                isSucceded:false,
                message:response.error
            }));
        } else {

            setAuth({
                isAuthenticated:true,
                token:response['token']
            });

            localStorage.setItem('token', response['token']);

            setTimeout(1000, callback({
                isSucceded:true,
                message:'Yönlendiriliyorsunuz...'
            }));
        }

    }

    const signOut = async (callback) => {

        setAuth({
            isAuthenticated:false,
            token:''
        });

        localStorage.removeItem('token');

        setTimeout(1000,callback('çıkış yapıldı'));
    }

    const values = {
        auth,
        signIn,
        signOut
    }



    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>

}


export default AuthContext;