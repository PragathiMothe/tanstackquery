import React from 'react'
import { Link } from 'react-router-dom'

const Navlink = () => {
  return (
    <div>
        <Link to="/">HomePage</Link>
        <Link to="/Employeepage">Employeepage</Link>
        <Link to="/QEmployee">QEmployee page</Link>
    </div>
  )
}
export default Navlink