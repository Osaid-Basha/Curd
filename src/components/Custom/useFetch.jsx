
import axios from 'axios';
import { useEffect, useState } from 'react'
export default function useFetch(path) {
     const [data, setData] = useState([]);
        const [error, setError] = useState(null);
        const [isLoading, setIsLoading] = useState(true);
        useEffect(() => {
            const getUser = async () => {
                try {
                    const response = await axios.get(`${import.meta.env.VITE_BURL}/${path}`);
                    setData(response.data.users);
                    console.log(response.data.users);
                } catch (error) {
                    setError(error);
                } finally {
                    setIsLoading(false);
                }
            };
            getUser();
        }, [path]);
  return { data, error, isLoading };
}
