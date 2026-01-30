import {useState} from 'react';
import type { UserProps } from '../types/user';
import Search from '../components/Search';
import User from '../components/User';
import Error from '../components/Error';
import Loader from '../components/Loader';
const Home = () => {

    const [user,setUser] = useState<UserProps | null>(null);
    const [error,setError] = useState(false);
    const [isLoading,setIsLoading] = useState(false);

    const loadUser = async(userName: string)=>{
      
        setError(false);
        setUser(null);
        setIsLoading(true);
        const res = await fetch(`https://api.github.com/users/${userName}`);
        
        const data = await res.json();

        if(res.status === 404){
          setError(true);
          return;
        }
        const {avatar_url,login,location,followers,following} = data;
        
        const userData : UserProps = {
          avatar_url,
          login,
          location,
          followers,
          following,
        };

        setUser(userData);
        setIsLoading(false);
    }

  return (
    <div>
      <Search loadUser={loadUser}/>

      {isLoading && 
       <Loader></Loader>
      }
     
      {user && <User {...user}/>}
      {error && <Error/>}
    </div>
  )
}

export default Home
