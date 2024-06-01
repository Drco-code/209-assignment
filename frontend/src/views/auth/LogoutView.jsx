import { useEffect } from "react"
import { logout } from "../../utils/auth"
import { Link } from "react-router-dom"

function LogoutView() {
  useEffect(() => {
    logout()
  }, [])
  return (
    <div>
      <h1>Logout</h1>
      <Link to={'/register'}>Register</Link>
      <Link to={'/login'}>Login</Link>
    </div>
  )
}

export default LogoutView