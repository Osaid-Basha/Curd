
import useFetch from '../../components/Custom/useFetch';
import Loader from '../../components/looder/Loader';

export default function Index() {
   const { data, erorr, isLoding } = useFetch('users');
    
    if(isLoding) return <Loader/>

    if (erorr) return <div>Error</div>;

    
  return (
    <div>
        {data.map((user)=>(
            <div key={user._id}>
                <h1>Name:{user.userName}</h1>
                <h1>Email:{user.email}</h1>
            </div>
        ))}
    </div>
  )
}
