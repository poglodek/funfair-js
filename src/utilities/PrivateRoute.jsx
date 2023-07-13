import { Navigate, Outlet } from 'react-router-dom'
const PrivateRoute = ({ user }) => {
  let isAuthenticated = user.token;
  return (
    isAuthenticated ? <Outlet /> : <Navigate to='/login' />
  )
}

export default PrivateRoute;