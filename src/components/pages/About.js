import axios from 'axios'
import React,{useState} from 'react'

const About = () => {
  const [data,setData]=useState({
    name:'',
    username:'',
    email:''
  })
  const onInput=(e)=>{
    setData({...data,[e.target.name]:[e.target.value]})
  }
  const onSubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:3003/user',data)
  }
  return (
    <div>
      <form onSubmit={(e)=>onSubmit(e)}>
        <input type="name" name="name" value={data.name} 
        onChange={(e)=>onInput(e)}
        
       />
        <input type="name" name="username" value={data.username} 
          onChange={(e)=>onInput(e)}
        />
        <input type="name" name="email" value={data.email} 
          onChange={(e)=>onInput(e)}
        />
        <button>submit</button>
      </form>
    </div>
  )
}

export default About