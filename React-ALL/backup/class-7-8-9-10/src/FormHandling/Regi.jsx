import React, { useState } from 'react'

const Regi = () => {

  let [user,setUser]=useState({uname:"",mobile:"",email:""})
  let updateHandler = (event)=>{
    let {name,value}  = event.target;//Object Destructuring
    setUser({...user,[name]:value})
  }
  let submitHandler = (event)=>{
    event.preventDefault();
    console.log(user)
    //invoke Reg api
  }
  return (
    <div className='container mt-5'>
    <pre>{JSON.stringify(user)}</pre>
    <div className="row">
    <div className="col-5">
    <form onSubmit={submitHandler}>
      <div className='form-group'>
          <input type="text" name="uname" placeholder="User Name" className='form-control' onChange={updateHandler}/>
      </div>
      <div className='form-group'>
          <input type="text" name="mobile" placeholder="Mobile" className='form-control' onChange={updateHandler}/>
      </div>
      <div className='form-group'>
          <input type="text" name="email" placeholder="email Id" className='form-control' onChange={updateHandler}/>
      </div>
          <input type="submit" placeholder="Email Id:" className='btn btn-warning'/>
    </form>
    
    
    </div>
    </div>
    </div>
  )
}

export default Regi