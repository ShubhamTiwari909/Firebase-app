import {useEffect} from 'react'
// Import Firestore database
import db from './Firebase';
import { collection, getDocs, query, where } from "firebase/firestore";
import { useDispatch } from 'react-redux'
import ProfileView from './View/ProfileView'

const Read = ({ userData }) => {
    console.log(userData)
    const userId = userData.uid
    const dispatch = useDispatch()
    useEffect(() => {
        async function fetch() {
            const querySnapshot1 = await getDocs(query(collection(db, "data"), where("userId", "==", userId)));

            dispatch({ type: "FETCH", payload: querySnapshot1.docs })
        }
        fetch();
    }, [dispatch, userId])

    return (
        <div>
           <ProfileView userId={userId} />
        </div>

    );
}


export default Read;
