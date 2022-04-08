import axios from 'axios'
import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
const AddUser = () => {
  const Navigate=useNavigate();
  const [data,setData]=useState({
    name:'',
    phone:'',
    email:''
  })
  const onInput=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const onSubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:3003/user',data);
    Navigate('/')
  }
  return (

<div className="container">
<div className="w-75 mx-auto shadow  p-5 text-center">
  <h2 className="text-center mb-4">Add A User</h2>
  <form onSubmit={e => onSubmit(e)}>
    <div className="form-group">
      <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Enter Your Name"
        name="name"
        value={data.name}
        onChange={e => onInput(e)}
      />
    </div>
    <div className="form-group pt-2">
      <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Enter Your phone no."
        name="phone"
        value={data.phone}
        onChange={e => onInput(e)}
      />
    </div>
    <div className="form-group pt-2">
      <input
        type="email"
        className="form-control form-control-lg"
        placeholder="Enter Your E-mail Address"
        name="email"
        value={data.email}
        onChange={e => onInput(e)}
      />
    </div>
    <button className="btn btn-outline-success mt-4" >Add User</button>
  </form>
</div>
</div>
  )
}

export default AddUser