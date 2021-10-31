import React, { useContext} from "react";
import MyInput from "../components/UI/input/MyInput";
import { AuthContext } from "../context";

const Login = () => {
    const {setIsAuth} = useContext(AuthContext)

    const login = event => {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }

    return (
        <div>
            <MyInput type='text' placeholder='Введіть логін'/>
            <MyInput type='password' placeholder='Введіть пароль'/>
            <button onClick={login}>Увійти</button>
        </div>
    )
}

export default Login