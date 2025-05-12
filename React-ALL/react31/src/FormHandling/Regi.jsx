import React from 'react'

const Regi = () => {

    
  return (
    <div className='container mt-5'>
    <div className="row">
    <div className="col-5">
    <form>
   
    <div className='form-group'>
        <input type="text" placeholder="User Name" className='form-control'/>
    </div>
     <div className='form-group'>
        <input type="text" placeholder="Mobile" className='form-control'/>
    </div>
     <div className='form-group'>
        <input type="text" placeholder="email Id" className='form-control'/>
    </div>
    
     
        <input type="submit" placeholder="Email Id:" className='btn btn-warning'/>
    
    </form>
    
    
    </div>
    </div>
    </div>
  )
}

export default Regi