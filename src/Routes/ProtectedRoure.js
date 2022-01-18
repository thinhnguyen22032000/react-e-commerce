import React, {useContext} from "react"
import { Navigate, Outlet } from "react-router-dom"
import { authContext } from "../context/authContext"
import Auth from "../components/partials/Header/Auth"


const ProtectedRoute = () => {
    const { auth } = useContext(authContext)
    return auth.isAuthenticated ? <Outlet /> : <Auth/>
}

export default ProtectedRoute