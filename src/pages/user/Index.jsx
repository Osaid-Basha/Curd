
import axios from 'axios';
import useFetch from '../../components/Custom/useFetch';
import Loader from '../../components/looder/Loader';
import { Link } from 'react-router-dom';
export default function Index() {
   const { data, error, isLoding,setData } = useFetch('users');
    
  const deleteUser=async(id)=>{

    const response=await axios.delete(`${import.meta.env.VITE_BURL}/users/${id}`);
    console.log(response);
    const newUser=data.users.filter((user)=>user._id!==id);
    setData({users:newUser});

  }


   console.log(data.users);
    if(isLoding) return <Loader/>

    if (error) return <div>Error</div>;

    
  return (
    <div>
      <table className="table table-hover responsive-md">
        <thead>
          <tr>
            <td>id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Number</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {data.users.map((user) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.userName}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td className="d-flex gap-2 ">
                <Link
                  className="btn btn-outline-info "
                  to={`/details/${user._id}`}
                >
                  Details
                </Link>
                <Link
                  className="btn btn-outline-success "
                  to={`/edit/${user._id}`}
                >
                  Edit
                </Link>
                <button
                  className="btn btn-outline-danger "
                  onClick={() => deleteUser(user._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
