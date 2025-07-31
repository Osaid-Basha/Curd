import { useParams } from "react-router-dom";
import useFetch from '../../components/Custom/useFetch';
import Loader from '../../components/looder/Loader';
export default function Details() {
    const { id } = useParams();
    const { data, error, isLoading } = useFetch(`users/${id}`);
    console.log(data);
    if (isLoading) return <Loader />

    if (error) return <div>Error</div>;
    console.log(data);
    return (
      <div>
        <h1>Details</h1>
        <p>{data.user.userName}</p>
        <p>{data.user.email}</p>
        <p>{data.user.phone}</p>
      </div>
    );
}
