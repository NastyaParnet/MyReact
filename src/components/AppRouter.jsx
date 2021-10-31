import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom"
import { AuthContext } from "../context";
import { PrivateRoutes, PublicRoutes } from "../router";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)

    if(isLoading) return <Loader/>

    return (
        isAuth
            ?<Switch>
                {PrivateRoutes.map(route => 
                    <Route 
                        path={route.path} 
                        component={route.component} 
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Redirect to='/start'/>
            </Switch>
            :<Switch>
                {PublicRoutes.map(route => 
                    <Route 
                        path={route.path} 
                        component={route.component} 
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Redirect to='/login'/>
            </Switch>
    )
}

export default AppRouter