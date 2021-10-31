import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context";

const Navbar = () => {
    const {setIsAuth} = useContext(AuthContext)

    function logout(){
        setIsAuth(false)
        localStorage.removeItem('auth')
        
    }
    return (
        <div className='navbar'>
            <div className='navbar__links'>
                <Link to='/start'>Про сайт</Link>
                <Link to='/posts'>Коментарі</Link>
            </div>
            <button className='logout' onClick={logout}>Вийти</button>
        </div>
    )
}

export default Navbar