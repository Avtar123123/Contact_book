import axios from 'axios'
import React,{useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
const EditUser = () => {
    const {id}=useParams();
  const [data,setData]=useState({
    name:'',
    phone:'',
    email:''
  })
  useEffect(()=>{
      loaduser();
  },[])
  const loaduser =async ()=>{
      const res=await axios.get(`http://localhost:3003/user/${id}`)
      setData(res.data)
  }
  const onInput=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const onSubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:3003/user',data)
  }
  return (
    <div style={{display:'flex',justifyContent:'center'}}>
    <div onSubmit={(e)=>onSubmit(e)} className='border bottom-info' style={{width:'60%',textAlign:'center'}}>
    <h3 style={{borderBottom:'2px solid'}}>Edit Contact Detail</h3>
      
      <label className='h4'>Name:</label>
      <br />
        <input type="name" name="name" value={data.name} 
        onChange={(e)=>onInput(e)}
        className='form-control'
       />
       <br />
       <label className='h4'>Phone No. :</label>
      <br />
        <input type="text" name="phone" value={data.phone} 
          onChange={(e)=>onInput(e)}  className='form-control'
        />
         <br />
        <label className='h4'>Email:</label>
        <br />
        <input type="name" name="email" value={data.email} 
          onChange={(e)=>onInput(e)} className='form-control'
        />
        <br />
        <button className='btn btn-warning mt-4 h2'>submit</button>
      </div>
    </div>
  )
}

export default EditUser