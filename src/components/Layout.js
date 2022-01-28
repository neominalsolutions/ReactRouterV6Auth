import React, { useContext } from 'react';
import { Outlet, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import AuthContext from '../store/contexts/AuthContext';


function Layout() {

    const {signOut} = useContext(AuthContext);
    const navigate = useNavigate();

    const logout = async () => {
        signOut((response) => {
            alert(response);
            navigate('/login');
        })
    }

    return (<div>
        <div>
            <Link to="/users">Users Page</Link>
            <br />
            <button onClick={logout}>Oturumu Kapat</button>
        </div>
        <Outlet />
    </div>)
}

export default Layout;
