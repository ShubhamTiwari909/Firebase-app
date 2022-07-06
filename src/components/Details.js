import db from './Firebase';
import { collection, getDocs, query, where } from "firebase/firestore";
import {useEffect } from 'react';
import { useDispatch } from 'react-redux'
import DetailsView from './View/DetailsView';
import {useParams} from 'react-router-dom'


function Details({userData}) {

  const userId = userData.uid
  console.log(userId)
  const taskId = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    async function fetch() {
      const querySnapshot1 = await getDocs(query(collection(db, "data"), where("uniqueId", "==", taskId.id)));

      dispatch({ type: "FETCH", payload: querySnapshot1.docs })
    }
    fetch();
  }, [taskId.id, dispatch])


  
  return (
    <div className="mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center gap-6 mx-10">
        <DetailsView userId={userId} />
      </div>
    </div>
  )
}

export default Details