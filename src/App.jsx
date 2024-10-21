import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setLocalStorage } from './utils/localStorage'
import AuthContext from './Context/AuthProvider'


const App = () => {
  // useEffect(()=>{
  //   setLocalStorage()
  // })

  const [user,setUser]=useState(null)

  const handlelogin=(email,password)=>{
if(email == 'admin@gmail.com' && password =='123')
{
  console.log("admin is here")
setUser('admin')
}
else if(email == 'emp@gmail.com' && password =='123')
{
setUser('employee')
}
else{
  alert('invalid credentials')
} 
  }
  const data=useContext(AuthContext)
  console.log(data)

  return (
    <>
    {!user?<Login handlelogin={handlelogin} />:''}
    {user =='admin'?<AdminDashboard/>:<EmployeeDashboard/>}
    {/* <EmployeeDashboard/> */}
    {/* <AdminDashboard/> */}
    </>
  )
}

export default App