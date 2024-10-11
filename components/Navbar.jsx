import Link from 'next/link'
import React from 'react'



 const Navbar = () => {
  return (
    <div>
        <ul>
        <li><Link href="/">Home</Link></li> 
        <li><Link href="/consultas">Consultas</Link></li>
        <li> <Link href="/datos">Datos</Link></li>
        </ul>
     
    </div>
  )
}
export default Navbar

