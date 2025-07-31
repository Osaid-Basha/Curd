
import axios from 'axios';
import { useEffect, useState } from 'react'
export default function useFetch(path) {
     const [data, setData] = useState({ users: [] });
        const [error, setError] = useState(null);
        const [isLoading, setIsLoading] = useState(true);
      
            const getUser = async () => {
                try {
                    const response = await axios.get(`${import.meta.env.VITE_BURL}/${path}`);
                    setData(response.data);
                    console.log(response.data);
                } catch (error) {
                    setError(error);
                } finally {
                    setIsLoading(false);
                }
            }
           useEffect(() => {
                getUser();
            },[]);
     
  return { data, error, isLoading,setData };
}
