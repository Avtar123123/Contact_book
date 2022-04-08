import React,{useState,useEffect} from 'react'
import axios from 'axios'

import {Link,useNavigate} from 'react-router-dom'
import Avatar from 'react-avatar'

import { computeHeadingLevel } from '@testing-library/react'
const  Home = () => {
  const Navigate=useNavigate();
    const [data,setData]=useState([])
    useEffect(()=>{
        loadData();
    },[])
    const loadData =async()=>{
       const api = await axios.get('http://localhost:3003/user')
      
        setData(api.data)
    }

    const deleteUser = async id => {

      await axios.delete(`http://localhost:3003/user/${id}`)
      Navigate('/')
    }
    const onClick=(id)=>{
      console.log(id)
      
    }
  return (
    <div> 
    <table className="table table-striped ">
  <thead className='bg-danger'>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
 {data.map((item,id)=>(
        <tbody>
        
        <tr key={id}>
        <td>
          <input type="checkbox" value={item.id} name={item} onClick={()=>onClick(item.id)} />
        </td>
        <td scope="row" > <Avatar name={item.name} style={{marginRight:'8px'}}  size="45" round={true}  />{item.name}</td>
        <td>{item.phone}</td>
        <td>{item.email}</td>
        <td >
        <Link type="button" className="btn btn-outline-info" to={`/view/${item.id}`}>View</Link>
        <Link  style={{margin:'0px 8px'}} type="button" className="btn btn-outline-primary" to={`/edituser/${item.id}`}>Edit</Link>
       
        
        <button
                    className="btn btn-outline-danger"
                    onClick={() => deleteUser(item.id)}
                  >
                    Delete
                  </button>
        
        </td>
        </tr>
        </tbody>
      ))}
    </table>

    </div>
  )
}

export default  Home