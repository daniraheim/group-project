import React from 'react';
import { Link } from 'react-router-dom';

function Layout({children}) 
{
    return (
         <div className="container mt-4">
            <h3 className="text-center mb-4">QUICKS HIGH STUDENT SHEET</h3>
            <nav>
                <Link className="btn btn-primary me-2" to="/"> Home </Link>
                <Link className="btn btn-success" to="/add"> Add New Sudent </Link>
            </nav>
            {children}
         </div>   
    )
}

export default Layout;