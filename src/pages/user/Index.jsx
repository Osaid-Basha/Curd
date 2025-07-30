import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loader from '../../components/looder/Loader';

export default function Index() {
    const [users, setUsers] = useState([]);
    const [erorr, setErorr] = useState(null);
    const [isLoding, setIsLoding] = useState(true);
    const getUser =async ()=>{
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_BURL}/users`
          );
          setUsers(response.data.users);
          
        } catch (error) {
          setErorr(error);
        }
        finally {
          setIsLoding(false);
        }
    }
    useEffect(()=>{
        getUser();
    },[]);
    if(isLoding) return <Loader/>

    if (erorr) return <div>Error</div>;

    
  return (
    <div>
        {users.map((user)=>(
            <div key={user.id}>
                <h1>Name:{user.userName}</h1>
                <h1>Email:{user.email}</h1>
            </div>
        ))}
    </div>
  )
}
