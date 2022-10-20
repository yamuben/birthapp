import { Navigate, Outlet } from 'react-router-dom'
import DashLayout from "../components/DashLayout"
const PrivateRoutes = () => {
  let auth = {'token':true}
return (
    auth.token ?<DashLayout><Outlet/></DashLayout>  : <Navigate to='/home'/>
  )
}
export default PrivateRoutes;