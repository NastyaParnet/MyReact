import Login from "../pages/Login";
import Posts from "../pages/Posts";
import SimComments from "../pages/SimComments";
import Start from "../pages/Start";

export const PrivateRoutes = [
    {path: '/start', component: Start, exact: true},
    {path: '/posts', component: Posts, exact: true},
    {path: '/posts/:id', component: SimComments, exact: true},
]

export const PublicRoutes = [
    {path: '/login', component: Login, exact: true}
]