import db from './Firebase';
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect} from 'react';
import { useDispatch } from 'react-redux'
import UserProfileView from './View/UserProfileView';

function UserProfile() {

  const userId = useParams();
  const dispatch = useDispatch()

  useEffect(() => {
    async function fetch() {
      const querySnapshot1 = await getDocs(query(collection(db, "data"), where("userId", "==", userId.id)));

      dispatch({ type: "FETCH", payload: querySnapshot1.docs })
    }
    fetch();
  }, [dispatch, userId])


  return (
    <div className="mt-30">
      <UserProfileView />
    </div>
  )
}

export default UserProfile