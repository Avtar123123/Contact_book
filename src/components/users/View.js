import React,{useState,useEffect} from 'react'
import {useParams,Link} from 'react-router-dom'
import axios from 'axios'
const View = () => {
    const {id}=useParams();
    console.log(id)
    const [data,setData]=useState({
      name:"",
      phone:"",
      email:""
    })
    useEffect(()=>{
      loaduser();
    },[])
    const loaduser=async()=>{
      const res=await axios.get(`http://localhost:3003/user/${id}`)
      setData(res.data)

    }

  return (
    <div className='container py-4'>
    <Link className="btn btn-outline-primary" to='/'>Back to Home</Link>
    <h1 className="display-4">User Id: {id}</h1>
    <hr></hr>
<ul  className="list-group w-50 h6" style={{fontSize:'18px'}}>
  
    <li className="list-group-item ">Name: <span style={{fontSize:'20px',fontFamily:'arial'}}>{data.name}</span></li>
    
    
    <li className="list-group-item">Phone No: <span style={{fontSize:'20px',fontFamily:'arial'}}></span>{data.phone}</li>
    
    
    <li className="list-group-item">Email: <span style={{fontSize:'20px',fontFamily:'arial'}}>{data.email}</span></li>
  
</ul>

    </div>
  )
}

export default View