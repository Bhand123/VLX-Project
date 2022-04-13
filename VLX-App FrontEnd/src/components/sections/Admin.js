import React from 'react'
import { Link } from 'react-router-dom';
 function Admin() {
  return (
    <div>
                     <h1>Admin Page</h1>
        
                <div>
                    <span style={{margin:70}}></span>
                   <Link to="#"><b>Activate/Deactivate Seller</b></Link> 
                   <span style={{margin:70}}></span>
                   <Link to="/delete"><b>Delete Products</b></Link> 
                    <span style={{margin:70}}></span>
                    
                    <Link to="/"> <b>Logout</b></Link>
                </div>
          
    </div>

  )
}
export default Admin
