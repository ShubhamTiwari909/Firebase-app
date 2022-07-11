import { useEffect } from 'react'
// Import Firestore database
import db from './Firebase';
import { collection, getDocs, query, where } from "firebase/firestore";
import { useDispatch } from 'react-redux'
import ProfileView from './View/ProfileView'
import NoQuotes from './Images/NoQuotes2.png'


const Read = ({ userData }) => {

    const userId = userData !== null ? userData.uid : ""
    const username = userData !== null ? userData.displayName : ""

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
            {userData === null ?
                <div>
                    <img src={NoQuotes} alt="Sign in to read a quote" />
                </div>
                :
                <ProfileView userId={userId} username={username} />}
        </div>

    );
}


export default Read;
